import { Routes, Route, Link } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Index from "@/routes/index";
import AdvIa from "@/routes/adv-ia";
import AdvIaObg from "@/routes/adv-ia-obg";
import DesignSystem from "@/routes/design-system";
import ThankYou from "@/routes/djp0526-obg";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/adv-ia" element={<AdvIa />} />
        <Route path="/adv-ia-obg" element={<AdvIaObg />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/djp0526-obg" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}
