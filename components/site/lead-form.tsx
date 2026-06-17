"use client";

import { ChangeEvent, FormEvent, KeyboardEvent, useRef, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  hasLeadValidationErrors,
  type LeadPayload,
  type LeadValidationErrors,
  validateLeadPayload,
} from "@/lib/lead-validation";

type FormState = "idle" | "submitting" | "success" | "error";

type LeadResponse = {
  ok: boolean;
  message?: string;
  errors?: LeadValidationErrors;
};

const successMessage = "Заявка успешно отправлена. Мы скоро с вами свяжемся.";
const errorMessage = "Не удалось отправить заявку. Попробуйте позже.";
const phonePrefix = "+7";
const phoneControlKeys = [
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Tab",
  "Home",
  "End",
  "Enter",
];

function getPhoneNationalDigits(value: string) {
  const digits = value.replace(/\D/g, "");
  const nationalDigits = digits.startsWith("8") || digits.startsWith("7") ? digits.slice(1) : digits;

  return nationalDigits.slice(0, 10);
}

function formatPhoneValue(value: string) {
  const digits = getPhoneNationalDigits(value);

  if (!digits) {
    return phonePrefix;
  }

  const parts = [`${phonePrefix} (`];
  parts.push(digits.slice(0, 3));

  if (digits.length >= 3) {
    parts.push(")");
  }

  if (digits.length > 3) {
    parts.push(` ${digits.slice(3, 6)}`);
  }

  if (digits.length > 6) {
    parts.push(`-${digits.slice(6, 8)}`);
  }

  if (digits.length > 8) {
    parts.push(`-${digits.slice(8, 10)}`);
  }

  return parts.join("");
}

function getPayload(form: HTMLFormElement): LeadPayload {
  const formData = new FormData(form);

  return {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    businessType: String(formData.get("businessType") ?? ""),
    taxSystem: String(formData.get("taxSystem") ?? ""),
    comment: String(formData.get("comment") ?? ""),
    consent: formData.get("consent") === "on",
  };
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="text-sm font-medium leading-5 text-red-600">
      {message}
    </p>
  );
}

export function LeadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<LeadValidationErrors>({});
  const [statusMessage, setStatusMessage] = useState("");
  const [phoneValue, setPhoneValue] = useState(phonePrefix);

  function clearFieldError(field: keyof LeadValidationErrors) {
    setErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };
      delete nextErrors[field];

      return nextErrors;
    });
  }

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhoneValue(formatPhoneValue(event.target.value));

    if (errors.phone) {
      clearFieldError("phone");
    }
  }

  function handlePhoneKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.ctrlKey || event.metaKey || phoneControlKeys.includes(event.key)) {
      return;
    }

    if (event.key.length === 1 && !/\d/.test(event.key)) {
      event.preventDefault();
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("");
    setState("idle");

    const payload = getPayload(event.currentTarget);
    const validation = validateLeadPayload(payload);

    if (hasLeadValidationErrors(validation.errors)) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setState("submitting");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as LeadResponse;

      if (!response.ok || !result.ok) {
        if (result.errors) {
          setErrors(result.errors);
        }

        throw new Error(result.message || errorMessage);
      }

      formRef.current?.reset();
      setPhoneValue(phonePrefix);
      setStatusMessage(result.message || successMessage);
      setState("success");
    } catch {
      setStatusMessage(errorMessage);
      setState("error");
    }
  }

  const inputErrorClass = "border-red-300 focus-visible:ring-red-500";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            name="name"
            placeholder="Анна"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(errors.name && inputErrorClass)}
          />
          <FieldError id="name-error" message={errors.name} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="+7 (999) 999-99-99"
            value={phoneValue}
            onChange={handlePhoneChange}
            onKeyDown={handlePhoneKeyDown}
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={cn(errors.phone && inputErrorClass)}
          />
          <FieldError id="phone-error" message={errors.phone} />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@company.ru"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(errors.email && inputErrorClass)}
        />
        <FieldError id="email-error" message={errors.email} />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="businessType">Тип бизнеса</Label>
          <Select
            id="businessType"
            name="businessType"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.businessType)}
            aria-describedby={errors.businessType ? "businessType-error" : undefined}
            className={cn(errors.businessType && inputErrorClass)}
          >
            <option value="" disabled>
              Выберите
            </option>
            <option value="ИП">ИП</option>
            <option value="ООО">ООО</option>
          </Select>
          <FieldError id="businessType-error" message={errors.businessType} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="taxSystem">Система налогообложения</Label>
          <Select
            id="taxSystem"
            name="taxSystem"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.taxSystem)}
            aria-describedby={errors.taxSystem ? "taxSystem-error" : undefined}
            className={cn(errors.taxSystem && inputErrorClass)}
          >
            <option value="" disabled>
              Выберите
            </option>
            <option value="ОСНО">ОСНО</option>
            <option value="УСН Доходы">УСН Доходы</option>
            <option value="УСН Доходы минус расходы">УСН Доходы минус расходы</option>
            <option value="ПСН">ПСН</option>
            <option value="ЕСХН">ЕСХН</option>
            <option value="Не знаю">Не знаю</option>
          </Select>
          <FieldError id="taxSystem-error" message={errors.taxSystem} />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="comment">Комментарий</Label>
        <Textarea
          id="comment"
          name="comment"
          maxLength={1000}
          placeholder="Расскажите, чем занимается бизнес, сколько операций и сотрудников, какая задача сейчас важна"
          aria-invalid={Boolean(errors.comment)}
          aria-describedby={errors.comment ? "comment-error" : undefined}
          className={cn("resize-none", errors.comment && inputErrorClass)}
        />
        <FieldError id="comment-error" message={errors.comment} />
      </div>

      <div
        className={cn(
          "mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-brand-900/40",
          errors.consent && "border-red-200 bg-red-50",
        )}
      >
        <label htmlFor="consent" className="flex cursor-pointer items-start gap-3">
          <Checkbox
            id="consent"
            name="consent"
            required
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            onChange={() => {
              if (errors.consent) {
                clearFieldError("consent");
              }
            }}
          />
          <span className="text-sm leading-6 text-slate-600">
            Я согласен на{" "}
            <a
              href="/consent"
              className="font-semibold text-brand-900 transition-colors hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              обработку персональных данных
            </a>{" "}
            и принимаю{" "}
            <a
              href="/privacy"
              className="font-semibold text-brand-900 transition-colors hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Политику конфиденциальности
            </a>
            .
          </span>
        </label>
        <div className="mt-2 pl-8">
          <FieldError id="consent-error" message={errors.consent} />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={state === "submitting"}>
        {state === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Отправляем...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            Отправить заявку
          </>
        )}
      </Button>

      {state === "success" ? (
        <div
          className="mt-5 flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-900"
          role="status"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
          {statusMessage || successMessage}
        </div>
      ) : null}
      {state === "error" ? (
        <div
          className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-900"
          role="alert"
        >
          {statusMessage || errorMessage}
        </div>
      ) : null}
    </form>
  );
}
