import { ArrowRight, PlayCircle, Tag } from "lucide-react";
import { useState, useCallback } from "react";
import heroBgMobile from "@/assets/bg-1-obrigado-vendas-advia-mobile.webp";
import heroBgDesktop from "@/assets/bg-1-obrigado-vendas-advia.webp";
import logoAdvIa from "@/assets/logotipo-advia.svg";
import logoNiu from "@/assets/logo-niu.png";
import { usePageMeta } from "@/lib/page-meta";

const CHECKOUT_URL = "https://pay.kiwify.com.br/sgL2spg";
const YT_EMBED = "https://www.youtube.com/embed/4l3emCfzdu0";

const CUPOM = "ANIVERSARIONIU";

export default function AdvIaReplayPage() {
  usePageMeta({
    title: "Replay Liberado — ADV-IA | NIU Cursos",
    meta: [
      {
        name: "description",
        content:
          "Assista à reprise do AULÃO ADV-IA enquanto está disponível e dê o próximo passo para uma advocacia de alta performance.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Replay Liberado — ADV-IA" },
      {
        property: "og:description",
        content: "Assista à reprise do AULÃO enquanto está disponível.",
      },
    ],
  });

  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(CUPOM).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat lg:hidden"
        style={{ backgroundImage: `url(${heroBgMobile})`, backgroundPosition: "center bottom" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-no-repeat lg:block"
        style={{ backgroundImage: `url(${heroBgDesktop})`, backgroundPosition: "center top" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/75" aria-hidden />
      <div className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.65_0.19_250/0.18)] blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[22rem] w-[22rem] -translate-x-1/3 translate-y-1/3 rounded-full bg-[oklch(0.65_0.19_250/0.12)] blur-3xl" />

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 md:py-16">
        {/* Logo */}
        <div className="flex items-center justify-center lg:justify-start">
          <img src={logoAdvIa} alt="ADV-IA" className="h-10 w-auto md:h-12" />
        </div>

        {/* Hero */}
        <div className="mt-10 grid flex-1 items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-12">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.65_0.19_250/0.5)] bg-[oklch(0.65_0.19_250/0.12)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[oklch(0.93_0.05_245)]">
              <PlayCircle className="h-3.5 w-3.5" />
              Replay liberado
            </span>
            <h1 className="mt-6 font-display text-3xl font-normal leading-[1.1] text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Perdeu a <em className="text-[oklch(0.93_0.05_245)]">Aula 1</em>?
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 text-balance sm:text-lg lg:mx-0">
              Assista à reprise enquanto está disponível e descubra como transformar
              sua advocacia com Inteligência Artificial aplicada com método.
            </p>
          </div>

          {/* Right: video */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-glow backdrop-blur">
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={YT_EMBED}
                  title="AULÃO ADV-IA — Replay"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-16 flex flex-col items-center text-center md:mt-20">
          <h2 className="font-display text-xl font-normal leading-tight text-balance sm:text-2xl md:text-3xl">
            Clique aqui se você não quer{" "}
            <em className="text-[oklch(0.93_0.05_245)]">perder mais tempo</em>
          </h2>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex w-full max-w-xl items-center justify-center gap-2 rounded-lg bg-accent-gradient px-7 py-5 text-base font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:-translate-y-0.5 md:text-lg"
          >
            Quero me inscrever agora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={logoNiu} alt="NIU Cursos" className="h-6 w-auto opacity-80" />
            <span>©2026 Niu Cursos – Todos os direitos reservados</span>
          </div>
          <div>
            Desenvolvido por{" "}
            <a
              href="https://agwebi.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.93_0.05_245)] hover:underline"
            >
              AGWEBi
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
