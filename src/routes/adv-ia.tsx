import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  Clock,
  Lock,
  Scale,
  Brain,
  Zap,
  BookOpen,
  Bot,
  Briefcase,
  Wrench,
  Star,
  ChevronDown,
} from "lucide-react";
import thiagoImg from "@/assets/thiago.webp";
import heroBg from "@/assets/bg-1-vendas-advia-mobile.webp";
import heroBgDesktop from "@/assets/bg-1-vendas-advia-desktop.webp";
import logoNiu from "@/assets/logo-niu.png";
import logoAdvIa from "@/assets/logotipo-advia.svg";
import { usePageMeta } from "@/lib/page-meta";

// ============ ANIMAÇÕES ============
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Reveal({
  children,
  className = "",
  delay = 0,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============ CTA ============
function CTA({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#preco"
      className={`group relative inline-flex items-center justify-center gap-2 rounded-lg bg-accent-gradient px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:-translate-y-0.5 md:text-base ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

// ============ FAQ ITEM ============
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-medium text-foreground"
      >
        <span>{q}</span>
        <ChevronDown
          className={`h-5 w-5 flex-none text-[oklch(0.55_0.18_250)] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="border-t border-border px-5 py-4 text-[15px] leading-relaxed text-muted-foreground">
          {a}
        </div>
      )}
    </div>
  );
}

// ============ PAGE ============
export default function AdvIa() {
  usePageMeta({
    title: "ADV-IA — Inteligência Artificial aplicada ao Direito | Thiago Sobral",
    meta: [
      {
        name: "description",
        content:
          "32 aulas e 15 horas de formação prática em IA para advogados. Engenharia de prompts, agentes de IA e protocolos de segurança. Sem precisar saber programar.",
      },
      { property: "og:title", content: "ADV-IA — IA aplicada ao Direito" },
      {
        property: "og:description",
        content:
          "Domine IA no Direito: 32 aulas práticas, frameworks PTF, CIPFE e PTLFPRCD, agentes de IA personalizados. Sem expor dados, sem jurisprudência inventada.",
      },
    ],
  });
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat md:hidden"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 hidden bg-cover bg-top bg-no-repeat md:block"
          style={{ backgroundImage: `url(${heroBgDesktop})` }}
          aria-hidden
        />
        <div className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.65_0.19_250/0.18)] blur-3xl animate-float" />

        <div className="relative mx-auto max-w-7xl px-6 pb-[480px] pt-10 md:pb-24 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <img
              src={logoAdvIa}
              alt="ADV-IA"
              className="mb-6 h-11 w-auto md:h-14"
            />

            <h1 className="font-display text-[1.7rem] font-normal leading-[1.15] text-balance sm:text-3xl md:text-[2.5rem] lg:text-[2.75rem]">
              O advogado do escritório ao lado já usa IA.{" "}
              <span className="italic text-[oklch(0.93_0.05_245)]">
                Você ainda está formatando petição manualmente.
              </span>
            </h1>

            <p className="mt-5 font-display text-lg font-normal italic leading-snug text-[oklch(0.93_0.05_245)] md:text-xl lg:text-2xl">
              Essa distância cresce a cada semana.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85 text-balance md:text-[20px]">
              São{" "}
              <strong className="text-white">32 aulas práticas</strong> e{" "}
              <strong className="text-white">15 horas de formação</strong> para dominar
              Inteligência Artificial no Direito — da construção de prompts jurídicos à criação
              dos seus próprios agentes de IA.
            </p>

            <ul className="mt-7 flex max-w-2xl flex-col items-start gap-2 text-left text-sm text-white/85 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 sm:text-[15px]">
              {[
                "Sem expor dados do cliente.",
                "Sem jurisprudência inventada.",
                "Sem precisar saber programar.",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-none text-[oklch(0.65_0.19_250)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-10 lg:w-1/2">
              <CTA className="w-full">Quero produzir mais em menos tempo</CTA>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.45_0.20_250)]">
              O problema
            </span>
            <h2 className="mt-3 font-display text-3xl font-normal leading-tight text-balance md:text-5xl">
              Você se formou para pensar.{" "}
              <em className="text-[oklch(0.45_0.20_250)]">Mas gasta o dia inteiro digitando.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-muted-foreground">
              <p>
                Nenhum professor da faculdade avisou: a maior parte do seu tempo como advogado
                não seria gasta em estratégia, argumentação ou análise de tese. Seria gasta em
                operação.
              </p>
              <p>
                Formatar petição. Buscar jurisprudência manualmente. Revisar contrato cláusula
                por cláusula. Reescrever contestações que seguem a mesma estrutura das últimas
                dez.
              </p>
              <p>
                Os prazos apertam, os clientes cobram, o dia termina com aquela sensação:
                trabalhei 12 horas e não sobrou tempo para o trabalho que importa. E cada hora
                gasta no operacional é uma hora que não vira honorário.
              </p>
              <p>
                Cada contestação que leva 3 horas em vez de 50 minutos é um cliente que você não
                atendeu, uma consulta que não agendou, uma causa que não captou. O tempo que a
                operação consome não volta. E o faturamento que ele levaria junto, também não.
              </p>
              <p>
                E quando você tenta acelerar com o ChatGPT? O resultado vem genérico. Ou pior —
                vem com jurisprudência que não existe. Você confere, perde mais tempo do que se
                tivesse feito do zero.
              </p>
              <p className="font-display text-2xl italic text-foreground">
                Fica a pergunta: dá para confiar nisso? Dá. Mas não do jeito que a maioria está
                usando.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="relative overflow-hidden bg-hero py-16 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 grain opacity-30" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.93_0.05_245)]">
              A virada
            </span>
            <h2 className="mt-3 font-display text-3xl font-normal leading-tight text-balance md:text-5xl">
              O problema não é a IA.{" "}
              <em className="text-[oklch(0.93_0.05_245)]">É usar IA sem método.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-left text-[17px] leading-relaxed text-white/85">
              <p>
                Copiar um prompt da internet e colar no ChatGPT é como pedir para um estagiário
                de primeiro semestre redigir uma peça complexa sem instrução nenhuma. O
                resultado pode até ter cara de peça — mas não sobrevive a uma leitura técnica.
              </p>
              <p>
                A IA erra quando não recebe contexto suficiente. Inventa quando não tem fonte.
                Generaliza quando o comando é vago.
              </p>
              <p>
                É por isso que a maioria dos advogados que “já tentou usar IA” desistiu — ou usa
                com medo. Não porque a ferramenta é ruim, mas porque ninguém ensinou a operar
                com o rigor que o Direito exige.
              </p>
              <p>
                Os grandes escritórios não têm esse problema. Investem em equipes de inovação e
                sistemas proprietários. Você não precisa de tudo isso. Precisa do método certo.{" "}
                <strong className="text-white">É o que o ADV-IA entrega.</strong>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="bg-[#E8EEF4] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.45_0.20_250)]">
              Resultado
            </span>
            <h2 className="mt-3 font-display text-3xl font-normal leading-tight text-balance md:text-5xl">
              O que muda quando você domina o método
            </h2>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {[
              {
                title: "No seu tempo",
                body: "A contestação que consumia 3 horas sai em menos de 50 minutos. Contratos de 200 páginas são analisados em 15 minutos. Minutas, pareceres e recursos — tudo no mesmo turno em que antes você produzia uma única peça. Você fecha o notebook às 18h. Com tudo entregue.",
                icon: Clock,
              },
              {
                title: "Na segurança dos seus clientes",
                body: "Você sabe exatamente como usar IA sem expor dados sensíveis. Aplica protocolos de verificação que eliminam jurisprudência inventada. E tem clareza sobre onde a IA para e onde começa a sua responsabilidade como advogado. Sem zona cinzenta. Sem medo de assinar a peça.",
                icon: ShieldCheck,
              },
              {
                title: "Na competitividade do escritório",
                body: "Você opera com a mesma lógica dos escritórios que investem pesado em tecnologia — sem o orçamento deles. Atende mais clientes no mesmo tempo. Elimina retrabalho. E precifica pela estratégia que entrega, não pelas horas que gasta.",
                icon: Briefcase,
              },
              {
                title: "No seu faturamento",
                body: "Se você passa a entregar uma contestação em 50 minutos em vez de 3 horas, sobram 10 horas por semana — horas que viram novas consultas, contratos e causas. Você não precisa trabalhar mais para faturar mais. Precisa parar de gastar tempo com o que a IA faz melhor e mais rápido.",
                icon: Zap,
              },
            ].map(({ title, body, icon: Icon }) => (
              <motion.article
                key={title}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-7 shadow-elegant"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-gradient text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-normal">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
              </motion.article>
            ))}
          </motion.div>

          <Reveal className="mx-auto mt-10 max-w-3xl rounded-2xl border-2 border-[oklch(0.65_0.19_250/0.4)] bg-[oklch(0.95_0.05_245/0.4)] p-7 text-center">
            <p className="font-display text-xl leading-relaxed text-foreground md:text-2xl">
              Você volta a pensar. A IA executa.{" "}
              <em className="text-[oklch(0.45_0.20_250)]">
                E o escritório fatura mais com a mesma estrutura.
              </em>
            </p>
          </Reveal>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.45_0.20_250)]">
              Conteúdo
            </span>
            <h2 className="mt-3 font-display text-3xl font-normal leading-tight text-balance md:text-5xl">
              4 módulos. 32 aulas.{" "}
              <em className="text-[oklch(0.45_0.20_250)]">15 horas de formação aplicada.</em>
            </h2>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-6 lg:grid-cols-2"
          >
            {[
              {
                n: "01",
                title: "Fundamentos de IA",
                lessons: "9 aulas",
                icon: Brain,
                body: "A base que 95% dos advogados que “usam IA” não têm. Modelos fundacionais, IA multimodal, os principais modelos aplicáveis ao Direito e o que já está rodando nos tribunais brasileiros. Sem jargão desnecessário — com a profundidade que a sua profissão exige.",
              },
              {
                n: "02",
                title: "O Advogado como Mestre da IA",
                lessons: "10 aulas",
                icon: Wrench,
                body: "O coração do curso. Engenharia de Prompt e Engenharia de Contexto — os dois pilares que definem se a IA entrega lixo ou entrega uma peça que você assina com segurança. Frameworks PTF, CIPFE e PTLFPRCD aplicados a petições, contratos e pareceres. NotebookLM, Otimizador de Prompts, ZeroGPT e AI Humanizer na prática.",
              },
              {
                n: "03",
                title: "Construindo Agentes de IA",
                lessons: "6 aulas",
                icon: Bot,
                body: "Saia do uso pontual e entre no uso sistemático. Crie seus próprios agentes especializados — um para trabalhista, outro para cível, outro para contratos — cada um com personalidade e instruções próprias. Segurança de dados sensíveis. Google Gems e GPTs personalizados da OpenAI.",
              },
              {
                n: "04",
                title: "Casos Reais e Aplicabilidades",
                lessons: "7 aulas",
                icon: Briefcase,
                body: "Da teoria para a mesa do escritório. Petições reais, análise de contratos, due diligence, automação de atividades repetitivas e atendimento ao cliente assistido por IA. Cada aula é um caso prático com protocolo de segurança embutido.",
              },
            ].map(({ n, title, lessons, icon: Icon, body }) => (
              <motion.article
                key={n}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-elegant transition-transform hover:-translate-y-1"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-accent-gradient opacity-15" />
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-5xl font-normal text-[oklch(0.45_0.20_250)]">
                    {n}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.95_0.05_245)] text-[oklch(0.45_0.20_250)]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Módulo {n.replace("0", "")} · {lessons}
                </p>
                <h3 className="mt-2 font-display text-2xl font-normal leading-tight">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
              </motion.article>
            ))}
          </motion.div>

          <Reveal className="mt-8 rounded-2xl border border-[oklch(0.65_0.19_250/0.3)] bg-[oklch(0.95_0.05_245/0.35)] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.45_0.20_250)]">
              Conteúdo extra
            </p>
            <h3 className="mt-2 font-display text-2xl font-normal">
              Ferramentas Jurídicas Brasileiras
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Aulas dedicadas ao Jusbrasil, Jurídico AI, Turivius e LawX. Como extrair o máximo
              de cada plataforma e integrar com os frameworks do curso.
            </p>
          </Reveal>

          <div className="mt-12 flex justify-center">
            <CTA>Quero produzir mais em menos tempo</CTA>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="bg-[#E8EEF4] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.45_0.20_250)]">
              Diagnóstico
            </span>
            <h2 className="mt-3 font-display text-3xl font-normal leading-tight text-balance md:text-5xl">
              Este curso é para você?
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border-2 border-[oklch(0.65_0.19_250/0.4)] bg-[oklch(0.95_0.05_245/0.4)] p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.65_0.19_250)] text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-normal">É para você se:</h3>
                </div>
                <ul className="mt-6 space-y-4 text-[15px] leading-relaxed">
                  {[
                    "Você é advogado autônomo ou sócio de escritório e a rotina operacional consome todo o seu tempo — sobrando pouco para estratégia, captação ou estudo.",
                    "Já tentou usar ChatGPT ou outra IA no trabalho, mas ficou inseguro com o resultado. Não sabe se pode confiar. Não sabe se está expondo dados.",
                    "Percebe que escritórios maiores operam com vantagem tecnológica que cresce a cada mês — e quer se posicionar antes que a distância fique irreversível.",
                    "Quer usar IA com método e responsabilidade — não como atalho, mas como ferramenta de alta performance.",
                    "Não sabe programar e não quer aprender. Quer comandar a IA em linguagem natural, com a precisão que o Direito exige.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[oklch(0.55_0.18_250)]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <XCircle className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-normal">Não é para você se:</h3>
                </div>
                <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                  {[
                    "Busca um botão que gera peças prontas sem revisão humana. A IA é ferramenta. A assinatura na peça continua sendo sua.",
                    "Não está disposto a dedicar 15 horas para mudar o nível da sua prática.",
                    "Acredita que a advocacia vai continuar sendo feita do mesmo jeito nos próximos 5 anos.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <XCircle className="mt-0.5 h-4 w-4 flex-none text-muted-foreground/70" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THIAGO */}
      <section className="relative overflow-hidden bg-hero py-16 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 grain opacity-30" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[oklch(0.65_0.19_250/0.15)] blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-elegant">
              <img src={thiagoImg} alt="Thiago Sobral" className="block h-auto w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-2 lg:order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.93_0.05_245)]">
              Quem ensina
            </span>
            <h2 className="mt-3 font-display text-3xl font-normal leading-tight text-balance md:text-5xl">
              Quem criou o <em className="text-[oklch(0.93_0.05_245)]">ADV-IA</em>
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-white/85">
              <strong className="text-white">Thiago Sobral</strong> tem 26 anos de carreira em
              tecnologia corporativa e uma trajetória que inclui projetos globais de
              inteligência artificial, cibersegurança e cloud computing.
            </p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.93_0.05_245)]">
              Três fatos que importam para você
            </p>
            <ol className="mt-4 space-y-4 text-[15px] leading-relaxed text-white/85">
              <li className="flex gap-3">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent-gradient text-xs font-bold text-white">
                  1
                </span>
                <span>
                  Professor da Faculdade Impacta e membro da Comissão de Direito Digital da
                  OAB-SP desde 2018 — onde acompanha de perto como a IA está transformando a
                  prática jurídica no Brasil.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent-gradient text-xs font-bold text-white">
                  2
                </span>
                <span>
                  Diretor Global e membro do Conselho de Administração do Linux Professional
                  Institute (Canadá), em seu segundo mandato. Construiu e liderou comunidades de
                  tecnologia com mais de 100 mil profissionais.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent-gradient text-xs font-bold text-white">
                  3
                </span>
                <span>
                  O ADV-IA não nasceu na internet. Foi ministrado presencialmente para
                  advogados da ESA — Escola Superior de Advocacia da OAB/Guarulhos. A versão
                  online é a evolução desse trabalho.
                </span>
              </li>
            </ol>

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
          </Reveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.45_0.20_250)]">
              Prova social
            </span>
            <h2 className="mt-3 font-display text-3xl font-normal leading-tight text-balance md:text-5xl">
              Quem já aplicou o método
            </h2>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {[
              {
                quote:
                  "Economia de tempo enorme e qualidade técnica das peças muito acima do que eu fazia antes.",
                role: "Advogada Cível",
              },
              {
                quote:
                  "Pela primeira vez uso IA sem medo de errar. Sei exatamente o que pode e o que não pode entrar.",
                role: "Sócio de Escritório",
              },
              {
                quote:
                  "Sempre achei que não era bom com tecnologia. O método é em linguagem natural — quem redige petição consegue aplicar.",
                role: "Advogado Trabalhista",
              },
            ].map((d) => (
              <motion.figure
                key={d.role}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-7 shadow-elegant"
              >
                <div className="flex gap-0.5 text-[oklch(0.65_0.19_250)]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground">
                  “{d.quote}”
                </blockquote>
                <figcaption className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {d.role} · Aluno ADV-IA
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="relative overflow-hidden bg-hero py-16 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 grain opacity-30" />
        <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[oklch(0.65_0.19_250/0.18)] blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.93_0.05_245)]">
              Tudo que você recebe
            </span>
            <h2 className="mt-3 font-display text-3xl font-normal leading-tight text-balance md:text-5xl">
              Ao entrar no <em className="text-[oklch(0.93_0.05_245)]">ADV-IA</em>
            </h2>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-4 md:grid-cols-2"
          >
            {[
              {
                t: "Curso Completo — 32 aulas em 4 módulos",
                d: "Dos fundamentos de IA até a criação de agentes personalizados. 15 horas de formação técnica e prática.",
                v: "R$ 1.997,00",
              },
              {
                t: "Ferramentas Jurídicas Brasileiras",
                d: "Aulas sobre Jusbrasil, Jurídico AI, Turivius e LawX — como usar cada plataforma e integrar com os frameworks.",
                v: "R$ 397,00",
              },
              {
                t: "Biblioteca de Prompts — PTF, CIPFE e PTLFPRCD",
                d: "Modelos prontos e editáveis para petições, contratos, recursos e pareceres. Para aplicar no dia seguinte à compra.",
                v: "R$ 497,00",
              },
              {
                t: "Acesso à Comunidade de Alunos",
                d: "Canal exclusivo para dúvidas, troca de experiências e atualizações sobre IA no Direito.",
                v: "Valor: R$197,00",
              },
            ].map((b) => (
              <motion.div
                key={b.t}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-[oklch(0.65_0.19_250)]" />
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-normal text-white">{b.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">{b.d}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-[oklch(0.93_0.05_245)]">
                      Valor: {b.v}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Reveal className="mt-10 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Valor total</p>
            <p className="mt-2 font-display text-3xl text-white/80 line-through decoration-[oklch(0.65_0.19_250)]/60 md:text-4xl">
              R$ 3.188,00
            </p>
          </Reveal>

          {/* Preço */}
          <Reveal id="preco" className="mx-auto mt-12 max-w-2xl rounded-3xl border border-[oklch(0.65_0.19_250/0.4)] bg-[oklch(0.18_0_0/0.6)] p-8 text-center shadow-glow backdrop-blur md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.93_0.05_245)]">
              Seu investimento hoje
            </p>
            <p className="mt-4 text-base text-white/70">
              <span className="line-through decoration-white/40">De R$ 1.997,00</span> por apenas:
            </p>
            <p className="mt-4 font-display text-5xl font-normal leading-none text-white md:text-6xl">
              12x de R$ 49<span className="text-3xl md:text-4xl">,70</span>
            </p>
            <p className="mt-3 text-lg text-white/85">
              ou <strong className="text-white">R$ 497,00</strong> à vista
            </p>

            <div className="mt-8">
              <a
                href="https://pay.kiwify.com.br/sgL2spg"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-gradient px-7 py-5 text-sm font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:-translate-y-0.5 sm:w-auto md:text-base"
              >
                Quero produzir mais em menos tempo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-white/60">
              Esta condição tem prazo. Quando expirar, o preço volta para R$ 1.997 — sem
              exceções.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="bg-[#E8EEF4] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant md:p-12">
              <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                <div className="flex h-28 w-28 flex-none items-center justify-center rounded-full bg-accent-gradient text-white shadow-glow">
                  <ShieldCheck className="h-14 w-14" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.45_0.20_250)]">
                    Garantia incondicional
                  </span>
                  <h2 className="mt-2 font-display text-3xl font-normal leading-tight md:text-4xl">
                    Garantia de 7 dias. Sem perguntas.
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                    Você entra, acessa o curso e aplica os frameworks nos seus primeiros
                    processos. Se em até 7 dias sentir que o conteúdo não se aplica à sua
                    realidade, envie um e-mail. Devolvemos 100% do valor. Sem questionário, sem
                    justificativa.
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                    O Thiago ensina esse método há anos e confia na entrega. O risco é zero. A
                    decisão é sua.
                  </p>
                  <div className="mt-6 flex flex-col items-center gap-3 md:items-start">
                    <a
                      href="https://pay.kiwify.com.br/sgL2spg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-accent-gradient px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:-translate-y-0.5 md:text-base"
                    >
                      Entrar com garantia de 7 dias
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Lock className="h-3.5 w-3.5" /> Compra 100% segura.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.45_0.20_250)]">
              Dúvidas frequentes
            </span>
            <h2 className="mt-3 font-display text-3xl font-normal leading-tight text-balance md:text-5xl">
              FAQ
            </h2>
          </Reveal>

          <Reveal className="mt-10 space-y-3">
            {[
              {
                q: "Preciso saber programar?",
                a: "Não. Os frameworks são em linguagem natural. Se sabe redigir uma petição, sabe usar o método.",
              },
              {
                q: "O curso serve para qualquer área do Direito?",
                a: "Sim. Os frameworks PTF, CIPFE e PTLFPRCD são adaptáveis para Cível, Criminal, Trabalhista, Tributário, Empresarial, Previdenciário e qualquer especialidade. A lógica é a mesma — o que muda é o contexto.",
              },
              {
                q: "Já uso o ChatGPT no trabalho. O curso vai me ajudar?",
                a: "Provavelmente é onde você mais precisa. O ChatGPT sem método produz respostas genéricas e, no pior caso, inventa jurisprudência. O curso ensina a construir prompts estruturados com verificação — a diferença entre perguntar qualquer coisa e arquitetar um comando que entrega uma peça técnica.",
              },
              {
                q: "E se a IA inventar jurisprudência e eu não perceber?",
                a: "Esse é o risco número um do uso amador. O curso dedica aulas a protocolos de verificação e aplica esses protocolos em casos reais no Módulo 4. O método não elimina a sua responsabilidade como advogado — garante que você tenha as ferramentas para checar tudo antes de protocolar.",
              },
              {
                q: "Como funciona o acesso?",
                a: "Imediato após confirmação do pagamento. 100% online. 12 meses de acesso a todo o conteúdo, incluindo atualizações no período.",
              },
              {
                q: "Tem suporte para dúvidas?",
                a: "Sim. Comunidade exclusiva de alunos para tirar dúvidas, trocar experiências e acompanhar novidades sobre IA no Direito.",
              },
              {
                q: "E se eu não gostar?",
                a: "7 dias de garantia incondicional. Acesse, teste, aplique. Se não fizer sentido, solicite o reembolso — 100% de volta.",
              },
              {
                q: "O curso fica desatualizado rápido?",
                a: "A IA evolui rápido — por isso o curso ensina a lógica por trás dos prompts, que funciona em qualquer modelo. Atualizações dentro do período de acesso estão incluídas.",
              },
            ].map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="relative overflow-hidden bg-hero py-16 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 grain opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.65_0.19_250/0.18)] blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-normal leading-tight text-balance md:text-5xl">
              A distância entre você e o advogado que produz o dobro na metade do tempo não é
              talento.{" "}
              <em className="text-[oklch(0.93_0.05_245)]">É método.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-left text-[17px] leading-relaxed text-white/85">
              <p>
                Você pode continuar peticionando manualmente, buscando jurisprudência no braço,
                revisando contratos até as 23h. Ou pode dominar a mesma tecnologia que já está
                nos tribunais superiores e nos grandes escritórios — adaptada para a sua
                realidade, com segurança técnica e sem precisar de uma equipe de TI.
              </p>
              <p className="text-center font-display text-2xl italic text-white">
                32 aulas. 15 horas. 12 meses de acesso. Garantia de 7 dias.
              </p>
              <p className="text-center">
                A única coisa que você arrisca é continuar do jeito que está.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <p className="text-base text-white/70">
              <span className="line-through decoration-white/40">De R$ 1.997,00</span> por apenas:
            </p>
            <p className="mt-3 font-display text-5xl font-normal leading-none md:text-6xl">
              12x de R$ 49<span className="text-3xl md:text-4xl">,70</span>
            </p>
            <p className="mt-2 text-lg text-white/85">
              ou <strong className="text-white">R$ 497,00</strong> à vista
            </p>
            <div className="mt-8">
              <a
                href="https://pay.kiwify.com.br/sgL2spg"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-accent-gradient px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:-translate-y-0.5 md:text-base"
              >
                Quero produzir mais em menos tempo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#272727] py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 text-center text-xs sm:flex-row sm:gap-4 sm:px-6 sm:text-left sm:text-sm">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <img src={logoNiu} alt="Niu Cursos" className="h-6 w-auto sm:h-8" />
            <p className="leading-snug text-white/90">
              ©{new Date().getFullYear()} Niu Cursos – Todos os direitos reservados
            </p>
          </div>
          <p className="leading-snug text-white/90">
            Desenvolvido por{" "}
            <a
              href="https://agwebi.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.75_0.15_245)] hover:underline"
            >
              AG WEBi
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
