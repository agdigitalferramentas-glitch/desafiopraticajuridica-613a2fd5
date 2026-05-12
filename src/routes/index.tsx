import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.webp";
import {
  ShieldCheck,
  Calendar,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  Clock,
  Lock,
  Scale,
  Brain,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Desafio Prática Jurídica com IA — Thiago Sobral" },
      {
        name: "description",
        content:
          "2 dias ao vivo e gratuitos para advogados: aprenda a estruturar IA na sua rotina jurídica com segurança técnica. 26 e 27 de maio.",
      },
      { property: "og:title", content: "Desafio Prática Jurídica com IA" },
      {
        property: "og:description",
        content:
          "Você realmente quer continuar peticionando do mesmo jeito nos próximos 5 anos? Evento gratuito ao vivo com Thiago Sobral.",
      },
    ],
  }),
});

function LeadForm({ id = "lead", inline = false }: { id?: string; inline?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const inputCls =
    "w-full rounded-lg border border-border bg-card px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent";
  return (
    <form
      id={id}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-3"
    >
      {inline ? (
        <>
          <input required type="text" placeholder="Seu nome" className={inputCls} />
          <div className="grid gap-3 sm:grid-cols-2">
            <input required type="email" placeholder="Melhor e-mail" className={inputCls} />
            <input required type="tel" placeholder="WhatsApp com DDD" className={inputCls} />
          </div>
        </>
      ) : (
        <>
          <input required type="text" placeholder="Seu nome" className={inputCls} />
          <input required type="email" placeholder="Melhor e-mail" className={inputCls} />
          <input required type="tel" placeholder="WhatsApp com DDD" className={inputCls} />
        </>
      )}
      <button
        type="submit"
        className="group relative inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-gradient px-6 py-4 text-base font-bold uppercase tracking-wide text-[oklch(0.20_0_0)] shadow-glow transition-transform hover:-translate-y-0.5 active:translate-y-0"
      >
        {submitted ? "Vaga garantida ✓" : "Garantir minha vaga gratuita"}
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <Lock className="h-3.5 w-3.5" />
        <em>Seus dados estão protegidos. Sem spam.</em>
      </p>
    </form>
  );
}


function CtaButton({ children, href = "#inscricao" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent-gradient px-7 py-4 text-sm font-bold uppercase tracking-wider text-[oklch(0.20_0_0)] shadow-elegant transition-transform hover:-translate-y-0.5"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.65_0.19_250/0.18)] blur-3xl animate-float" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 lg:pt-16">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[oklch(0.65_0.19_250/0.4)] bg-[oklch(0.65_0.19_250/0.1)] px-3 py-1 text-xs font-medium uppercase tracking-widest text-[oklch(0.93_0.05_245)]">
              <Sparkles className="h-3.5 w-3.5" />
              Desafio Prática Jurídica com IA
            </div>
            <h1 className="font-display text-4xl md:text-[2.5rem] lg:text-[2.75rem] font-normal leading-[1.2]">
              Você realmente quer continuar
              <br />
              <span className="italic text-[oklch(0.93_0.05_245)]">peticionando do mesmo jeito</span>
              <br />
              nos próximos 5&nbsp;anos?
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85 text-balance">
              Em <strong className="text-white">2 dias ao vivo e gratuitos</strong>, você vai aprender
              na prática como estruturar inteligência artificial na sua rotina jurídica — com
              segurança técnica, sem expor dados do cliente e sem depender de ferramentas que
              inventam jurisprudência.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                <Calendar className="h-4 w-4 text-[oklch(0.65_0.19_250)]" /> 26 e 27 de maio
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                <Clock className="h-4 w-4 text-[oklch(0.65_0.19_250)]" /> 19:51h
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                <ShieldCheck className="h-4 w-4 text-[oklch(0.65_0.19_250)]" /> Evento ao vivo e gratuito
              </span>
            </div>
          </div>

          <div className="relative mt-10 lg:w-1/2" id="inscricao">
            <div className="rounded-2xl bg-[oklch(0.99_0.003_120)] p-5 shadow-elegant">
              <LeadForm id="lead-hero" inline />
            </div>
          </div>
        </div>
      </section>

      {/* DIAS DO DESAFIO */}
      <section className="relative bg-[oklch(0.985_0.005_120)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.45_0.20_250)]">
              Programação
            </span>
            <h2 className="mt-3 font-display text-4xl font-normal leading-tight text-balance md:text-5xl">
              O que acontece em cada dia do desafio
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* DIA 1 */}
            <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-elegant transition-transform hover:-translate-y-1">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-accent-gradient opacity-20" />
              <div className="flex items-baseline justify-between">
                <span className="font-display text-6xl font-normal text-[oklch(0.45_0.20_250)]">
                  01
                </span>
                <span className="text-sm font-medium text-muted-foreground">26 de maio · 19:51h</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-normal leading-tight text-balance">
                Como usar IA para recuperar 20 horas da sua semana sem abrir mão da qualidade
                técnica
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Você não está lento. Você está usando a ferramenta errada do jeito errado. A
                diferença entre o advogado que passa 3 horas numa contestação e o que entrega a
                mesma peça em 40 minutos não é talento. <strong className="text-foreground">É método.</strong>
              </p>
              <ul className="mt-6 space-y-3 text-[15px]">
                {[
                  "Por que o ChatGPT padrão falha no Direito — e o que fazer diferente",
                  "A estrutura de prompt que transforma qualquer IA num assistente jurídico preciso",
                  "Como peticionar com IA sem perder o raciocínio estratégico da peça",
                  "Demonstração ao vivo: do zero à peça estruturada em tempo real",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[oklch(0.55_0.18_250)]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* DIA 2 */}
            <article className="group relative overflow-hidden rounded-2xl border border-border bg-[oklch(0.29_0_0)] p-8 text-white shadow-elegant transition-transform hover:-translate-y-1">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-accent-gradient opacity-30" />
              <div className="flex items-baseline justify-between">
                <span className="font-display text-6xl font-normal text-[oklch(0.93_0.05_245)]">
                  02
                </span>
                <span className="text-sm font-medium text-white/70">27 de maio · 19:51h</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-normal leading-tight text-balance">
                Segurança, ética e estratégia: o que separa o uso amador da prática jurídica de
                alta performance com IA
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/80">
                Usar IA no Direito sem método é como assinar uma peça sem ler. O Dia 2 é sobre o
                que a maioria dos cursos ignora:{" "}
                <strong className="text-white">como usar IA de forma tecnicamente responsável.</strong>
              </p>
              <ul className="mt-6 space-y-3 text-[15px]">
                {[
                  "Como verificar tudo que a IA produz antes de protocolar",
                  "Segurança de dados no uso de IA: o que é mito e o que é risco real",
                  "Onde a IA termina e onde começa a sua responsabilidade como advogado",
                  "Como sair da operação e voltar a ser o estrategista da sua banca",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[oklch(0.65_0.19_250)]" />
                    <span className="text-white/90">{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-12 flex justify-center">
            <CtaButton>Quero participar do desafio</CtaButton>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="relative bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.45_0.20_250)]">
              Diagnóstico
            </span>
            <h2 className="mt-3 font-display text-4xl font-normal leading-tight text-balance md:text-5xl">
              Para quem é o<br className="hidden sm:block" />
              <em className="text-[oklch(0.45_0.20_250)]">Desafio Prática Jurídica com IA?</em>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-[oklch(0.65_0.19_250/0.3)] bg-[oklch(0.95_0.05_245/0.4)] p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.65_0.19_250)] text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-normal">Para quem é este Desafio</h3>
              </div>
              <ul className="mt-6 space-y-4 text-[15px] leading-relaxed">
                {[
                  "Você gasta mais tempo formatando e revisando peças do que pensando na estratégia das causas",
                  "Já tentou usar IA no seu trabalho e ficou inseguro com o resultado",
                  "Sente que escritórios maiores têm uma vantagem tecnológica que você ainda não alcançou",
                  'Quer usar IA, mas não pode se dar ao luxo de errar com dados ou jurisprudência de cliente',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[oklch(0.55_0.18_250)]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <XCircle className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-normal">Para quem não é</h3>
              </div>
              <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                {[
                  'Quem busca uma ferramenta que "faz tudo" sem revisão humana',
                  "Quem acredita que o Direito não vai mudar nos próximos 5 anos",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <XCircle className="mt-0.5 h-4 w-4 flex-none text-muted-foreground/70" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <CtaButton>O Desafio é pra mim!</CtaButton>
          </div>
        </div>
      </section>

      {/* THIAGO SOBRAL */}
      <section className="relative overflow-hidden bg-hero py-24 text-white">
        <div className="absolute inset-0 grain opacity-30" />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[oklch(0.65_0.19_250/0.12)] blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-full overflow-hidden rounded-2xl border border-white/10 shadow-elegant">
              <img src={thiagoImg} alt="Thiago Sobral" className="block w-full h-auto" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.93_0.05_245)]">
              Quem ensina
            </span>
            <h2 className="mt-3 font-display text-4xl font-normal leading-tight text-balance md:text-5xl">
              Quem é <em className="text-[oklch(0.93_0.05_245)]">Thiago Sobral</em>?
            </h2>
            <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-white/85">
              <p>
                <strong className="text-white">Thiago Sobral</strong> é professor da{" "}
                <strong className="text-white">Faculdade Impacta</strong>, membro da{" "}
                <strong className="text-white">Comissão de Direito Digital da OAB-SP</strong> desde
                2018 e profissional com mais de{" "}
                <strong className="text-white">26 anos na área de tecnologia corporativa</strong> —
                com experiência em projetos de inteligência artificial de nível global.
              </p>
              <p>
                Sua especialidade é pegar o que as grandes organizações fazem com IA e traduzir para
                ambientes que exigem precisão, segurança e responsabilidade técnica.
              </p>
              <p className="text-[oklch(0.93_0.05_245)] font-display italic text-xl">
                Exatamente o que o Direito exige.
              </p>
              <p>
                Este Desafio é a versão ao vivo e gratuita do que ele já ensinou presencialmente
                para advogados da{" "}
                <strong className="text-white">
                  ESA — Escola Superior de Advocacia da OAB/Guarulhos
                </strong>
                .
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: Scale, label: "OAB-SP", sub: "Direito Digital" },
                { icon: Brain, label: "26+ anos", sub: "em tecnologia" },
                { icon: Zap, label: "Faculdade", sub: "Impacta" },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <Icon className="mx-auto h-5 w-5 text-[oklch(0.65_0.19_250)]" />
                  <p className="mt-2 font-display text-sm font-normal">{label}</p>
                  <p className="text-xs text-white/60">{sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <CtaButton>Finalizar a inscrição gratuita</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="relative bg-[oklch(0.985_0.005_120)] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl font-normal leading-tight text-balance md:text-5xl">
              Dois dias. Método real.{" "}
              <em className="text-[oklch(0.45_0.20_250)]">Resultado na sua prática.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
              Os advogados que aprenderem a usar IA com método e segurança agora não vão disputar os
              mesmos clientes que você. Eles vão atender mais, com mais qualidade, em menos tempo.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-foreground">
              Essas 2 aulas ao vivo são o seu ponto de entrada.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-xl">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-elegant">
              <LeadForm id="lead-final" />
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              📅 <strong className="text-foreground">26 e 27 de maio</strong> · Ao vivo · 100%
              gratuito
              <br />
              <span className="text-xs">
                <Lock className="mr-1 inline h-3 w-3" />
                <em>Seus dados estão protegidos. Você pode cancelar a qualquer momento.</em>
              </span>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Thiago Sobral · Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            <Scale className="h-4 w-4" /> Desafio Prática Jurídica com IA
          </p>
        </div>
      </footer>
    </main>
  );
}
