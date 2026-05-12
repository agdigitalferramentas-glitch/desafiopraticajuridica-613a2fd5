import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

function LeadForm({ id = "lead" }: { id?: string }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      id={id}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-3"
    >
      <input
        required
        type="text"
        placeholder="Seu nome"
        className="w-full rounded-lg border border-border bg-card px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <input
        required
        type="email"
        placeholder="Melhor e-mail"
        className="w-full rounded-lg border border-border bg-card px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <input
        required
        type="tel"
        placeholder="WhatsApp com DDD"
        className="w-full rounded-lg border border-border bg-card px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        className="group relative inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-gradient px-6 py-4 text-base font-bold uppercase tracking-wide text-[oklch(0.18_0.04_160)] shadow-glow transition-transform hover:-translate-y-0.5 active:translate-y-0"
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
      className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent-gradient px-7 py-4 text-sm font-bold uppercase tracking-wider text-[oklch(0.18_0.04_160)] shadow-elegant transition-transform hover:-translate-y-0.5"
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
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 grain opacity-40" />
        <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.78_0.22_145/0.18)] blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-20 h-[24rem] w-[24rem] rounded-full bg-[oklch(0.32_0.07_160/0.6)] blur-3xl" />

        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2 font-display text-lg font-normal tracking-tight">
            <Scale className="h-5 w-5 text-[oklch(0.78_0.22_145)]" />
            <span>Thiago Sobral</span>
            <span className="text-white/40">·</span>
            <span className="text-white/70">Faculdade Impacta</span>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.78_0.22_145)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.78_0.22_145)]" />
            </span>
            Inscrições abertas · Vagas limitadas
          </div>
        </nav>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-10 lg:grid-cols-[1.1fr,0.9fr] lg:pt-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[oklch(0.78_0.22_145/0.4)] bg-[oklch(0.78_0.22_145/0.1)] px-3 py-1 text-xs font-medium uppercase tracking-widest text-[oklch(0.93_0.10_145)]">
              <Sparkles className="h-3.5 w-3.5" />
              Desafio ao vivo · 100% gratuito
            </div>
            <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-normal leading-[1.05] text-balance">
              Você realmente quer continuar{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-[oklch(0.93_0.10_145)]">
                  peticionando do mesmo jeito
                </span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-[oklch(0.78_0.22_145/0.25)]" />
              </span>{" "}
              nos próximos 5 anos?
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85 text-balance">
              Em <strong className="text-white">2 dias ao vivo e gratuitos</strong>, você vai aprender
              na prática como estruturar inteligência artificial na sua rotina jurídica — com
              segurança técnica, sem expor dados do cliente e sem depender de ferramentas que
              inventam jurisprudência.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                <Calendar className="h-4 w-4 text-[oklch(0.78_0.22_145)]" /> 26 e 27 de maio
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                <Clock className="h-4 w-4 text-[oklch(0.78_0.22_145)]" /> 19:51h
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
                <ShieldCheck className="h-4 w-4 text-[oklch(0.78_0.22_145)]" /> Evento ao vivo
              </span>
            </div>
          </div>

          <div className="relative" id="inscricao">
            <div className="absolute -inset-2 rounded-2xl bg-accent-gradient opacity-30 blur-xl" />
            <div className="relative rounded-2xl border border-white/15 bg-white/[0.04] p-7 backdrop-blur-xl shadow-elegant">
              <h2 className="font-display text-2xl font-normal text-white">
                Garanta sua vaga gratuita
              </h2>
              <p className="mt-1 text-sm text-white/70">
                Preencha os campos e receba o link da transmissão.
              </p>
              <div className="mt-6">
                <div className="rounded-xl bg-[oklch(0.99_0.003_120)] p-5">
                  <LeadForm id="lead-hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAS DO DESAFIO */}
      <section className="relative bg-[oklch(0.985_0.005_120)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.32_0.07_160)]">
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
                <span className="font-display text-6xl font-normal text-[oklch(0.22_0.05_160)]">
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
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[oklch(0.55_0.18_145)]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* DIA 2 */}
            <article className="group relative overflow-hidden rounded-2xl border border-border bg-[oklch(0.22_0.05_160)] p-8 text-white shadow-elegant transition-transform hover:-translate-y-1">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-accent-gradient opacity-30" />
              <div className="flex items-baseline justify-between">
                <span className="font-display text-6xl font-normal text-[oklch(0.93_0.10_145)]">
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
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[oklch(0.78_0.22_145)]" />
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
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.32_0.07_160)]">
              Diagnóstico
            </span>
            <h2 className="mt-3 font-display text-4xl font-normal leading-tight text-balance md:text-5xl">
              Para quem é o<br className="hidden sm:block" />
              <em className="text-[oklch(0.32_0.07_160)]">Desafio Prática Jurídica com IA?</em>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-[oklch(0.78_0.22_145/0.3)] bg-[oklch(0.96_0.05_145/0.4)] p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.78_0.22_145)] text-white">
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
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[oklch(0.55_0.18_145)]" />
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
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[oklch(0.78_0.22_145/0.12)] blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr,1.4fr] lg:items-center">
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.32_0.07_160)] shadow-elegant">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-accent-gradient text-5xl font-display font-normal text-[oklch(0.18_0.04_160)] shadow-glow animate-pulse-ring">
                    TS
                  </div>
                  <p className="mt-6 font-display text-xl">Thiago Sobral</p>
                  <p className="mt-1 text-sm text-white/60">Direito Digital · IA · OAB-SP</p>
                </div>
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.22_0.05_160)] to-transparent" />
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.93_0.10_145)]">
              Quem ensina
            </span>
            <h2 className="mt-3 font-display text-4xl font-normal leading-tight text-balance md:text-5xl">
              Quem é <em className="text-[oklch(0.93_0.10_145)]">Thiago Sobral</em>?
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
              <p className="text-[oklch(0.93_0.10_145)] font-display italic text-xl">
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
                  <Icon className="mx-auto h-5 w-5 text-[oklch(0.78_0.22_145)]" />
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
              <em className="text-[oklch(0.32_0.07_160)]">Resultado na sua prática.</em>
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
