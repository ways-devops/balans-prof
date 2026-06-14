import { NextResponse } from "next/server";

import {
  hasLeadValidationErrors,
  type LeadPayload,
  validateLeadPayload,
} from "@/lib/lead-validation";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatLeadMessage(lead: ReturnType<typeof validateLeadPayload>["data"]) {
  const createdAt = new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Moscow",
  }).format(new Date());

  const comment = lead.comment || "Не указан";

  return [
    "<b>Новая заявка с сайта</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(lead.name)}`,
    `<b>Телефон:</b> ${escapeHtml(lead.phone)}`,
    `<b>Email:</b> ${escapeHtml(lead.email)}`,
    `<b>Тип бизнеса:</b> ${escapeHtml(lead.businessType)}`,
    `<b>Система налогообложения:</b> ${escapeHtml(lead.taxSystem)}`,
    `<b>Комментарий:</b> ${escapeHtml(comment)}`,
    "",
    `<b>Дата и время заявки:</b> ${escapeHtml(createdAt)}`,
  ].join("\n");
}

async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("Telegram environment variables are not configured.");
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Telegram API request failed: ${response.status} ${errorText}`);
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;
    const { data, errors } = validateLeadPayload(body);

    if (hasLeadValidationErrors(errors)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Проверьте данные формы.",
          errors,
        },
        { status: 400 },
      );
    }

    await sendTelegramMessage(formatLeadMessage(data));

    return NextResponse.json({
      ok: true,
      message: "Заявка успешно отправлена. Мы скоро с вами свяжемся.",
    });
  } catch (error) {
    console.error("Lead submission failed", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Не удалось отправить заявку. Попробуйте позже.",
      },
      { status: 500 },
    );
  }
}
