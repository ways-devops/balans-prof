export type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  businessType?: string;
  taxSystem?: string;
  comment?: string;
  consent?: boolean | string;
};

export type LeadField = keyof Required<LeadPayload>;

export type LeadValidationErrors = Partial<Record<LeadField, string>>;

export type ValidLeadPayload = {
  name: string;
  phone: string;
  email: string;
  businessType: string;
  taxSystem: string;
  comment: string;
  consent: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const russianPhonePattern = /^(?:\+7|8)\d{10}$/;

function clean(value: unknown) {
  return String(value ?? "").trim();
}

function normalizePhone(phone: string) {
  return phone.replace(/[()\s-]/g, "");
}

function isConsentAccepted(value: LeadPayload["consent"]) {
  return value === true || value === "true" || value === "on";
}

export function validateLeadPayload(payload: LeadPayload): {
  data: ValidLeadPayload;
  errors: LeadValidationErrors;
} {
  const data: ValidLeadPayload = {
    name: clean(payload.name),
    phone: clean(payload.phone),
    email: clean(payload.email),
    businessType: clean(payload.businessType),
    taxSystem: clean(payload.taxSystem),
    comment: clean(payload.comment),
    consent: isConsentAccepted(payload.consent),
  };

  const errors: LeadValidationErrors = {};
  const normalizedPhone = normalizePhone(data.phone);

  if (data.name.length < 2) {
    errors.name = "Введите имя минимум из 2 символов.";
  }

  if (!data.phone || normalizedPhone === "+7" || normalizedPhone === "8") {
    errors.phone = "Введите телефон.";
  } else if (!russianPhonePattern.test(normalizedPhone)) {
    errors.phone = "Введите российский номер: +7 999 999-99-99, +79999999999 или 89999999999.";
  }

  if (!data.email) {
    errors.email = "Введите email.";
  } else if (!emailPattern.test(data.email)) {
    errors.email = "Введите корректный email.";
  }

  if (!data.businessType) {
    errors.businessType = "Выберите тип бизнеса.";
  }

  if (!data.taxSystem) {
    errors.taxSystem = "Выберите систему налогообложения.";
  }

  if (data.comment.length > 1000) {
    errors.comment = "Комментарий должен быть не длиннее 1000 символов.";
  }

  if (!data.consent) {
    errors.consent = "Необходимо согласиться с условиями обработки персональных данных.";
  }

  return {
    data: {
      ...data,
      phone: normalizedPhone,
    },
    errors,
  };
}

export function hasLeadValidationErrors(errors: LeadValidationErrors) {
  return Object.keys(errors).length > 0;
}
