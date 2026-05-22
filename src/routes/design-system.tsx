import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles, Info } from "lucide-react";

export const Route = createFileRoute("/design-system")({
  head: () => ({
    meta: [
      { title: "Design System — Desafio Prática Jurídica" },
      { name: "description", content: "Tokens, tipografia, cores, espaçamentos e componentes do design system." },
    ],
  }),
  component: DesignSystemPage,
});

type Token = { name: string; varName: string; value: string };

const semanticColors: Token[] = [
  { name: "background", varName: "--background", value: "oklch(0.99 0.003 250)" },
  { name: "foreground", varName: "--foreground", value: "oklch(0.29 0 0)" },
  { name: "card", varName: "--card", value: "oklch(1 0 0)" },
  { name: "card-foreground", varName: "--card-foreground", value: "oklch(0.29 0 0)" },
  { name: "popover", varName: "--popover", value: "oklch(1 0 0)" },
  { name: "popover-foreground", varName: "--popover-foreground", value: "oklch(0.29 0 0)" },
  { name: "primary", varName: "--primary", value: "oklch(0.29 0 0)" },
  { name: "primary-foreground", varName: "--primary-foreground", value: "oklch(0.985 0.003 250)" },
  { name: "secondary", varName: "--secondary", value: "oklch(0.95 0.03 245)" },
  { name: "secondary-foreground", varName: "--secondary-foreground", value: "oklch(0.29 0 0)" },
  { name: "muted", varName: "--muted", value: "oklch(0.965 0.005 250)" },
  { name: "muted-foreground", varName: "--muted-foreground", value: "oklch(0.45 0.02 250)" },
  { name: "accent", varName: "--accent", value: "oklch(0.65 0.19 250)" },
  { name: "accent-foreground", varName: "--accent-foreground", value: "oklch(0.985 0.003 250)" },
  { name: "destructive", varName: "--destructive", value: "oklch(0.577 0.245 27.325)" },
  { name: "destructive-foreground", varName: "--destructive-foreground", value: "oklch(0.984 0.003 247.858)" },
  { name: "border", varName: "--border", value: "oklch(0.92 0.005 250)" },
  { name: "input", varName: "--input", value: "oklch(0.94 0.005 250)" },
  { name: "ring", varName: "--ring", value: "oklch(0.65 0.19 250)" },
];

const brandColors: Token[] = [
  { name: "brand-ink", varName: "--brand-ink", value: "oklch(0.29 0 0) · #272727" },
  { name: "brand-deep", varName: "--brand-deep", value: "oklch(0.34 0 0) · #353535" },
  { name: "brand-deep-2", varName: "--brand-deep-2", value: "oklch(0.24 0 0) · #1f1f1f" },
  { name: "brand-green (accent azul)", varName: "--brand-green", value: "oklch(0.65 0.19 250) · #0A88F4" },
  { name: "brand-mint", varName: "--brand-mint", value: "oklch(0.93 0.05 245)" },
  { name: "brand-cream", varName: "--brand-cream", value: "oklch(0.985 0.003 250)" },
  { name: "brand-line", varName: "--brand-line", value: "oklch(0.92 0.005 250)" },
];

const chartColors: Token[] = [
  { name: "chart-1", varName: "--chart-1", value: "oklch(0.646 0.222 41.116)" },
  { name: "chart-2", varName: "--chart-2", value: "oklch(0.6 0.118 184.704)" },
  { name: "chart-3", varName: "--chart-3", value: "oklch(0.398 0.07 227.392)" },
  { name: "chart-4", varName: "--chart-4", value: "oklch(0.828 0.189 84.429)" },
  { name: "chart-5", varName: "--chart-5", value: "oklch(0.769 0.188 70.08)" },
];

const radii = [
  { name: "sm", varName: "--radius-sm", value: "calc(var(--radius) - 4px) · 4px" },
  { name: "md", varName: "--radius-md", value: "calc(var(--radius) - 2px) · 6px" },
  { name: "lg", varName: "--radius-lg", value: "var(--radius) · 8px" },
  { name: "xl", varName: "--radius-xl", value: "calc(var(--radius) + 4px) · 12px" },
  { name: "2xl", varName: "--radius-2xl", value: "calc(var(--radius) + 8px) · 16px" },
  { name: "3xl", varName: "--radius-3xl", value: "calc(var(--radius) + 12px) · 20px" },
  { name: "4xl", varName: "--radius-4xl", value: "calc(var(--radius) + 16px) · 24px" },
];

const spacings = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32];

const shadows = [
  { name: "shadow-sm", className: "shadow-sm" },
  { name: "shadow", className: "shadow" },
  { name: "shadow-md", className: "shadow-md" },
  { name: "shadow-lg", className: "shadow-lg" },
  { name: "shadow-xl", className: "shadow-xl" },
  { name: "shadow-2xl", className: "shadow-2xl" },
  { name: "shadow-elegant (custom)", className: "shadow-elegant" },
  { name: "shadow-glow (custom)", className: "shadow-glow" },
];

function Swatch({ token }: { token: Token }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-3">
      <div
        className="h-14 w-14 shrink-0 rounded-lg border border-border"
        style={{ background: `var(${token.varName})` }}
      />
      <div className="min-w-0">
        <p className="font-medium text-sm text-foreground truncate">{token.name}</p>
        <p className="text-xs text-muted-foreground font-mono truncate">{token.varName}</p>
        <p className="text-xs text-muted-foreground font-mono truncate">{token.value}</p>
      </div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 border-b border-border">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="font-display text-3xl md:text-4xl mt-2 text-foreground">{title}</h2>
        {description && <p className="text-muted-foreground mt-3 max-w-2xl">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="bg-hero text-[oklch(0.985_0.003_250)] grain">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <Badge className="bg-white/10 text-white border-white/10 hover:bg-white/10">
            <Sparkles className="mr-1" /> Design System
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl mt-6 max-w-3xl">
            Tokens, tipografia e componentes do projeto
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Referência viva do design system: cores semânticas, paleta de marca, tipografia Lora + Montserrat,
            espaçamentos, raios, sombras e os componentes shadcn em uso.
          </p>
          <nav className="flex flex-wrap gap-2 mt-8 text-sm">
            {[
              ["#colors", "Cores"],
              ["#typography", "Tipografia"],
              ["#spacing", "Espaçamentos"],
              ["#radius", "Raios"],
              ["#shadows", "Sombras"],
              ["#gradients", "Gradientes"],
              ["#animations", "Animações"],
              ["#components", "Componentes"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-white/15 px-3 py-1 text-white/80 hover:bg-white/10 transition"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* COLORS */}
        <Section
          id="colors"
          eyebrow="01 · Tokens"
          title="Cores"
          description="Todas as cores usam o formato oklch e são definidas em src/styles.css. Use sempre as classes semânticas (bg-primary, text-muted-foreground) — nunca cores hardcoded."
        >
          <h3 className="font-display text-xl mb-4">Semânticas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
            {semanticColors.map((c) => <Swatch key={c.varName} token={c} />)}
          </div>

          <h3 className="font-display text-xl mb-4">Paleta de marca</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
            {brandColors.map((c) => <Swatch key={c.varName} token={c} />)}
          </div>

          <h3 className="font-display text-xl mb-4">Gráficos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {chartColors.map((c) => <Swatch key={c.varName} token={c} />)}
          </div>
        </Section>

        {/* TYPOGRAPHY */}
        <Section
          id="typography"
          eyebrow="02 · Tokens"
          title="Tipografia"
          description="Display: Lora (serif). Sans: Montserrat. Headings usam font-display com letter-spacing -0.02em e text-wrap balance."
        >
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <p className="text-xs text-muted-foreground font-mono mb-1">font-display · text-6xl</p>
                  <p className="font-display text-6xl">Aa — Lora Display</p>
                </div>
                <Separator />
                <div>
                  <p className="text-xs text-muted-foreground font-mono mb-1">font-sans · text-base</p>
                  <p className="font-sans text-base">Aa — Montserrat Sans</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Escala de títulos (Lora)</CardTitle>
                <CardDescription>Sempre com font-display.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  ["text-5xl md:text-6xl", "H1 — Headline principal"],
                  ["text-4xl md:text-5xl", "H2 — Seção"],
                  ["text-3xl md:text-4xl", "H3 — Subseção"],
                  ["text-2xl md:text-3xl", "H4 — Bloco"],
                  ["text-xl md:text-2xl", "H5 — Card title"],
                  ["text-lg", "H6 — Inline"],
                ].map(([cls, label]) => (
                  <div key={cls} className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground font-mono">{cls}</span>
                    <span className={`font-display ${cls}`}>{label}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Corpo (Montserrat)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  ["text-lg", "Body large — usado em leads e parágrafos de destaque."],
                  ["text-base", "Body base — leitura padrão de parágrafos e descrições."],
                  ["text-sm", "Body small — apoio, legendas e formulários."],
                  ["text-xs", "Body xs — labels, badges e metadata."],
                ].map(([cls, label]) => (
                  <div key={cls}>
                    <p className="text-xs text-muted-foreground font-mono mb-1">{cls}</p>
                    <p className={cls}>{label}</p>
                  </div>
                ))}
                <Separator />
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="font-normal">font-normal 400</span>
                  <span className="font-medium">font-medium 500</span>
                  <span className="font-semibold">font-semibold 600</span>
                  <span className="font-bold">font-bold 700</span>
                  <span className="font-extrabold">font-extrabold 800</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* SPACING */}
        <Section
          id="spacing"
          eyebrow="03 · Tokens"
          title="Espaçamentos"
          description="Escala Tailwind baseada em 0.25rem (4px). Use múltiplos consistentes em padding, margin e gap."
        >
          <div className="space-y-3">
            {spacings.map((n) => (
              <div key={n} className="flex items-center gap-4">
                <span className="w-16 text-xs font-mono text-muted-foreground">p-{n}</span>
                <span className="w-20 text-xs font-mono text-muted-foreground">{n * 0.25}rem</span>
                <div className="h-4 rounded bg-accent" style={{ width: `${n * 4}px` }} />
              </div>
            ))}
          </div>
        </Section>

        {/* RADIUS */}
        <Section
          id="radius"
          eyebrow="04 · Tokens"
          title="Raios"
          description="Base --radius: 0.5rem. As variantes são derivadas dela."
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {radii.map((r) => (
              <div key={r.varName} className="rounded-xl border border-border bg-card p-4">
                <div
                  className="h-20 w-full bg-accent/15 border border-accent/30 mb-3"
                  style={{ borderRadius: `var(${r.varName})` }}
                />
                <p className="text-sm font-medium">rounded-{r.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{r.value}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* SHADOWS */}
        <Section id="shadows" eyebrow="05 · Tokens" title="Sombras">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shadows.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-3">
                <div className={`h-24 w-full rounded-xl bg-card border border-border ${s.className}`} />
                <p className="text-xs font-mono text-muted-foreground">{s.name}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* GRADIENTS */}
        <Section id="gradients" eyebrow="06 · Tokens" title="Gradientes e texturas">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-40 rounded-2xl bg-hero grain flex items-end p-4 text-white">
              <p className="text-sm font-mono">bg-hero + .grain</p>
            </div>
            <div className="h-40 rounded-2xl bg-accent-gradient flex items-end p-4 text-white">
              <p className="text-sm font-mono">bg-accent-gradient</p>
            </div>
          </div>
        </Section>

        {/* ANIMATIONS */}
        <Section
          id="animations"
          eyebrow="07 · Tokens"
          title="Animações"
          description="Keyframes customizados disponíveis globalmente."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-accent animate-float" />
              <p className="text-xs font-mono text-muted-foreground">.animate-float (8s)</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-accent animate-pulse-ring" />
              <p className="text-xs font-mono text-muted-foreground">.animate-pulse-ring (2.4s)</p>
            </div>
          </div>
        </Section>

        {/* COMPONENTS */}
        <Section
          id="components"
          eyebrow="08 · UI"
          title="Componentes"
          description="Componentes shadcn (new-york) configurados no projeto."
        >
          <div className="grid gap-8">
            <Card>
              <CardHeader><CardTitle>Buttons</CardTitle></CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Badges</CardTitle></CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Inputs</CardTitle></CardHeader>
              <CardContent className="grid gap-4 max-w-md">
                <div className="grid gap-2">
                  <Label htmlFor="ds-name">Nome</Label>
                  <Input id="ds-name" placeholder="Seu nome" />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="ds-check" />
                  <Label htmlFor="ds-check">Aceito os termos</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Alert</CardTitle></CardHeader>
              <CardContent>
                <Alert>
                  <Info />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    Componentes herdam tokens semânticos automaticamente.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Tabs</CardTitle></CardHeader>
              <CardContent>
                <Tabs defaultValue="a" className="w-full">
                  <TabsList>
                    <TabsTrigger value="a">Visão</TabsTrigger>
                    <TabsTrigger value="b">Detalhes</TabsTrigger>
                    <TabsTrigger value="c">Notas</TabsTrigger>
                  </TabsList>
                  <TabsContent value="a" className="text-sm text-muted-foreground">Conteúdo da aba Visão.</TabsContent>
                  <TabsContent value="b" className="text-sm text-muted-foreground">Conteúdo da aba Detalhes.</TabsContent>
                  <TabsContent value="c" className="text-sm text-muted-foreground">Conteúdo da aba Notas.</TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>Container padrão com borda e sombra leve.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Use Card para agrupar conteúdo relacionado. Combine com Separator para hierarquia.
              </CardContent>
            </Card>
          </div>
        </Section>

        <footer className="py-12 text-center text-xs text-muted-foreground">
          Design System · gerado a partir de <span className="font-mono">src/styles.css</span>
        </footer>
      </main>
    </div>
  );
}
