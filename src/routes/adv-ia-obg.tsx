import { useEffect, useState } from "react";
import { CheckCircle2, ArrowRight, Sparkles, AlertTriangle, Mail } from "lucide-react";
import heroBg from "@/assets/bg-1-vendas-advia-mobile.webp";
import heroBgDesktop from "@/assets/bg-1-vendas-advia-desktop.webp";
import logoAdvIa from "@/assets/logotipo-advia.svg";
import { usePageMeta } from "@/lib/page-meta";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/";
const WHATSAPP_SUPPORT_URL = "https://niucursos.com.br/suporte";
const SUPPORT_EMAIL = "mailto:contato@niucursos.com";

export default function AdvIaObgPage() {
  const [progress, setProgress] = useState(0);
  const [displayedPercent, setDisplayedPercent] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setProgress(90), 150);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (progress === 0) return;
    const duration = 2000;
    const start = performance.now();
    const from = 0;
    const to = 90;

    const animate = (now: number) => {
      const elapsed = now - start;
      const fraction = Math.min(elapsed / duration, 1);
      const current = Math.round(from + (to - from) * fraction);
      setDisplayedPercent(current);
      if (fraction < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [progress]);

  usePageMeta({
    title: "Bem-vindo à nova elite jurídica — ADV-IA",
    meta: [
      {
        name: "description",
        content:
          "Sua inscrição no ADV-IA está quase completa. Acesse o grupo exclusivo de alunos no WhatsApp e dê o primeiro passo da sua advocacia de alta performance.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Bem-vindo à nova elite jurídica — ADV-IA" },
      {
        property: "og:description",
        content:
          "Acesse o grupo exclusivo de alunos no WhatsApp e comece sua advocacia de alta performance.",
      },
    ],
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: "150px bottom" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-top bg-no-repeat md:block"
        style={{ backgroundImage: `url(${heroBgDesktop})`, backgroundPosition: "150px top" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden />
      <div className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.65_0.19_250/0.18)] blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[22rem] w-[22rem] -translate-x-1/3 translate-y-1/3 rounded-full bg-[oklch(0.65_0.19_250/0.12)] blur-3xl" />

      <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-16">
        {/* Logo */}
        <img src={logoAdvIa} alt="ADV-IA" className="mb-10 h-11 w-auto md:h-14" />

        {/* Progress bar */}
        <div className="w-full max-w-xl">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.93_0.05_245)]">
            <span>{displayedPercent}% concluído</span>
          </div>
          <div
            className="h-2.5 w-full overflow-hidden rounded-full bg-white/10"
            role="progressbar"
            aria-valuenow={90}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progresso da inscrição"
          >
            <div
              className="h-full rounded-full bg-accent-gradient shadow-glow transition-[width] duration-[2000ms] ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Headline */}
        <div className="mt-12 w-full text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[oklch(0.93_0.05_245)]">
            ADV-IA · Inteligência Artificial para Advocacia de Alta Performance
          </p>
          <h1 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-balance sm:text-4xl md:text-5xl">
            Bem-vindo à <em className="text-[oklch(0.93_0.05_245)]">nova elite jurídica.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 text-balance sm:text-lg">
            Sua inscrição no <strong className="text-white">ADV-IA</strong> está quase completa.
            Falta um passo.
          </p>
        </div>

        {/* CTA grupo */}
        <div className="mt-10 w-full max-w-xl">
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-gradient px-7 py-4 text-base font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Acessar grupo exclusivo
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-center text-sm leading-relaxed text-white/80">
            Clique no botão acima para acessar o{" "}
            <strong className="text-white">grupo exclusivo de alunos no WhatsApp</strong> — onde
            acontecem as trocas mais valiosas entre advogados que já estão usando IA com método.
          </p>
        </div>

        {/* Benefits card */}
        <div className="mt-10 w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <ul className="space-y-4 text-[15px] leading-relaxed text-white/90">
            {[
              "Cada peça produzida em menos tempo, com mais qualidade técnica.",
              "Horas que voltam para a sua agenda — e para o seu faturamento.",
              "O primeiro dia da sua advocacia de alta performance.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[oklch(0.65_0.19_250)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Aviso de acesso */}
        <div className="mt-10 w-full max-w-xl rounded-2xl border border-[oklch(0.65_0.19_250/0.35)] bg-[oklch(0.65_0.19_250/0.08)] p-6 backdrop-blur sm:p-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-none text-[oklch(0.93_0.05_245)]" />
            <div>
              <p className="font-display text-lg font-normal text-white">Sobre o seu acesso</p>
              <p className="mt-2 text-[15px] leading-relaxed text-white/85">
                Seus dados de login serão enviados por e-mail em até{" "}
                <strong className="text-white">15 minutos</strong>. Se não encontrar na caixa de
                entrada, confira o spam ou a aba "Promoções". Se em{" "}
                <strong className="text-white">24 horas</strong> o acesso não chegar, fale com a
                gente:
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={WHATSAPP_SUPPORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#25D366]/60 bg-[#25D366]/10 px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#25D366]/20"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Suporte no WhatsApp
                </a>
                <a
                  href={SUPPORT_EMAIL}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  Suporte no e-mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
