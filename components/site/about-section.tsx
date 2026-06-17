"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  MessageSquareText,
  Quote,
  Star,
  UserRound,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";

const reviews = [
  {
    name: "Иван Петров",
    role: "ИП, розничная торговля",
    text: "Сотрудничаем более года. Всегда на связи, отчётность сдаётся вовремя, никаких штрафов и вопросов от налоговой.",
    service: "Бухгалтерское сопровождение",
  },
  {
    name: "Мария Соколова",
    role: "ООО «Сокол», сфера услуг",
    text: "Перешли на обслуживание после другой компании и сразу увидели разницу. Всё чётко, быстро и по делу.",
    service: "Бухгалтерское сопровождение",
  },
  {
    name: "Алексей Кузнецов",
    role: "ООО «СтройПроект», строительство",
    text: "Помогли зарегистрировать ООО и настроить учёт с нуля. Подробно проконсультировали по всем вопросам.",
    service: "Регистрация ООО и бухгалтерское сопровождение",
  },
  {
    name: "Ольга Смирнова",
    role: "ООО «ЭкоДом», производство",
    text: "Восстановили бухгалтерский учёт за прошлые периоды. Исправили ошибки и привели документы в порядок.",
    service: "Восстановление бухгалтерского учёта",
  },
  {
    name: "Дмитрий Волков",
    role: "ИП, онлайн-торговля",
    text: "Разовые консультации по налогам помогают нам принимать правильные решения и экономить время и деньги.",
    service: "Налоговые консультации",
  },
];

export function AboutSection() {
  const reviewsRef = useRef<HTMLDivElement>(null);
  const [activeReview, setActiveReview] = useState(0);

  const scrollToReview = useCallback((index: number) => {
    const scroller = reviewsRef.current;
    const card = scroller?.querySelector<HTMLElement>(`[data-review-index="${index}"]`);

    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveReview(index);
  }, []);

  const moveReview = useCallback(
    (direction: "previous" | "next") => {
      const nextIndex =
        direction === "next"
          ? (activeReview + 1) % reviews.length
          : (activeReview - 1 + reviews.length) % reviews.length;

      scrollToReview(nextIndex);
    },
    [activeReview, scrollToReview],
  );

  useEffect(() => {
    const scroller = reviewsRef.current;

    if (!scroller) {
      return undefined;
    }

    const updateActiveReview = () => {
      const cards = Array.from(scroller.querySelectorAll<HTMLElement>("[data-review-index]"));
      const scrollerLeft = scroller.getBoundingClientRect().left;
      const nearestCard = cards.reduce(
        (nearest, card) => {
          const distance = Math.abs(card.getBoundingClientRect().left - scrollerLeft);

          return distance < nearest.distance
            ? { index: Number(card.dataset.reviewIndex), distance }
            : nearest;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      );

      setActiveReview(nearestCard.index);
    };

    updateActiveReview();
    scroller.addEventListener("scroll", updateActiveReview, { passive: true });

    return () => scroller.removeEventListener("scroll", updateActiveReview);
  }, []);

  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-4 py-10 shadow-soft sm:px-8 sm:py-14 lg:px-10">
              <div className="mx-auto max-w-3xl text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-500 ring-1 ring-brand-500/15">
                  <Quote className="h-7 w-7 fill-current" aria-hidden="true" />
                </span>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  Отзывы клиентов
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                  Нам доверяют предприниматели, которым важно спокойствие, порядок в отчётности и
                  понятное сопровождение.
                </p>
              </div>

              <div className="relative mt-10 sm:mt-12">
                <button
                  type="button"
                  onClick={() => moveReview("previous")}
                  className="absolute -left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-500 shadow-card transition-all duration-300 hover:-translate-x-0.5 hover:border-brand-500/30 hover:bg-brand-50 hover:shadow-soft lg:flex"
                  aria-label="Предыдущий отзыв"
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                </button>

                <div
                  ref={reviewsRef}
                  className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-2 sm:px-2"
                  aria-label="Карусель отзывов клиентов"
                >
                  {reviews.map((review, index) => (
                    <article
                      key={review.name}
                      data-review-index={index}
                      className="flex min-w-full snap-start flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/25 hover:shadow-soft sm:min-w-[calc(50%_-_0.5rem)] lg:min-w-[calc(33.333%_-_0.667rem)] xl:min-w-[calc(25%_-_0.75rem)]"
                    >
                      <div className="flex gap-1 text-brand-500" aria-label="Рейтинг 5 из 5">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star key={starIndex} className="h-5 w-5 fill-current" aria-hidden="true" />
                        ))}
                      </div>

                      <p className="mt-6 flex-1 text-base leading-8 text-slate-800">
                        “{review.text}”
                      </p>

                      <div className="mt-6 h-px w-12 bg-brand-500" />

                      <div className="mt-6 flex items-center gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500 ring-1 ring-brand-500/20">
                          <UserRound className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="text-base font-semibold text-slate-950">{review.name}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-500">{review.role}</p>
                        </div>
                      </div>

                      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                        <div className="flex items-start gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500 ring-1 ring-brand-500/15">
                            <ClipboardList className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-slate-950">Услуга:</p>
                            <p className="mt-1 text-sm leading-6 text-slate-700">{review.service}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => moveReview("next")}
                  className="absolute -right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-500 shadow-card transition-all duration-300 hover:translate-x-0.5 hover:border-brand-500/30 hover:bg-brand-50 hover:shadow-soft lg:flex"
                  aria-label="Следующий отзыв"
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-1 flex items-center justify-center gap-3 lg:hidden">
                <button
                  type="button"
                  onClick={() => moveReview("previous")}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-500 shadow-card transition-all duration-300 hover:border-brand-500/30 hover:bg-brand-50"
                  aria-label="Предыдущий отзыв"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => moveReview("next")}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-500 shadow-card transition-all duration-300 hover:border-brand-500/30 hover:bg-brand-50"
                  aria-label="Следующий отзыв"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 flex justify-center gap-3" aria-label="Навигация по отзывам">
                {reviews.map((review, index) => (
                  <button
                    key={review.name}
                    type="button"
                    onClick={() => scrollToReview(index)}
                    className={`h-3 w-3 rounded-full border transition-all duration-300 ${
                      activeReview === index
                        ? "border-brand-500 bg-brand-500"
                        : "border-slate-400 bg-white hover:border-brand-500"
                    }`}
                    aria-label={`Показать отзыв ${index + 1}`}
                    aria-current={activeReview === index ? "true" : undefined}
                  />
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-brand-500/10 bg-brand-50 p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-500 shadow-[0_12px_30px_rgba(15,23,42,0.08)] ring-1 ring-brand-500/15">
                    <MessageSquareText className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">
                      Хотите такой же результат?
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                      Оставьте заявку, и мы подберём лучшее решение для вашего бизнеса.
                    </p>
                  </div>
                </div>

                <a
                  href="#lead"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-soft sm:w-auto"
                >
                  Получить консультацию
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
