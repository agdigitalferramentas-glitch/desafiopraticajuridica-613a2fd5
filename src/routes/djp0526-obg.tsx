import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import obgBg from "@/assets/obg-bg.webp";

export const Route = createFileRoute("/djp0526-obg")({
  component: ThankYouPage,
  head: () => ({
    meta: [
      { title: "Falta apenas um passo — Desafio Prática Jurídica com IA" },
      {
        name: "description",
        content:
          "Sua inscrição está quase completa. Entre no grupo do WhatsApp para confirmar sua vaga no Desafio Prática Jurídica com IA.",
      },
      { name: "robots", content: "noindex, nofollow" },
      {
        property: "og:title",
        content: "Falta apenas um passo — Desafio Prática Jurídica com IA",
      },
      {
        property: "og:description",
        content:
          "Entre no grupo do WhatsApp para confirmar sua vaga e receber tudo sobre o Desafio.",
      },
    ],
  }),
});

const WHATSAPP_URL =
  "https://chat.whatsapp.com/LNTqg22g5MNHpHwY3cwKS5?name=&nome=&email=&page_code=ipa0526-grupos&funnel=9";

function ThankYouPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-hero bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${obgBg})` }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.65_0.19_250/0.18)] blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 h-[22rem] w-[22rem] -translate-x-1/3 translate-y-1/3 rounded-full bg-[oklch(0.65_0.19_250/0.12)] blur-3xl" />

      <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-16">
        {/* Progress bar */}
        <div className="w-full max-w-xl">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.93_0.05_245)]">
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              Inscrição em andamento
            </span>
            <span>98% concluído</span>
          </div>
          <div
            className="h-2.5 w-full overflow-hidden rounded-full bg-white/10"
            role="progressbar"
            aria-valuenow={98}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progresso da inscrição"
          >
            <div
              className="h-full rounded-full bg-accent-gradient shadow-glow transition-[width] duration-700"
              style={{ width: "98%" }}
            />
          </div>
        </div>

        {/* Headline */}
        <div className="mt-12 w-full text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.93_0.05_245)]">
            Falta apenas um passo…
          </p>
          <h1 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-balance sm:text-4xl md:text-5xl">
            Sua inscrição está{" "}
            <em className="text-[oklch(0.93_0.05_245)]">quase completa</em>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 text-balance sm:text-lg">
            Entre no grupo do WhatsApp para confirmar sua vaga e garantir acesso a tudo sobre o{" "}
            <strong className="text-white">Desafio Prática Jurídica com IA.</strong>
          </p>
        </div>

        {/* Benefits card */}
        <div className="mt-10 w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <p className="font-display text-lg font-normal text-white">
            No grupo de inscritos você recebe:
          </p>
          <ul className="mt-5 space-y-4 text-[15px] leading-relaxed text-white/90">
            {[
              "Confirmação oficial da sua vaga com data, horário e link de acesso",
              "Lembretes antes de cada aula ao vivo para você não perder nenhum dia",
              "Materiais e novidades em primeira mão, antes de qualquer outro canal",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[oklch(0.65_0.19_250)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-10 w-full max-w-xl">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-gradient px-7 py-4 text-base font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Entrar no grupo do WhatsApp
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-center text-sm italic text-white/70">
            Ao entrar no grupo, sua inscrição estará 100% confirmada.
          </p>
        </div>
      </section>
    </main>
  );
}
