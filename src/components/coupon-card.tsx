import { Tag } from "lucide-react";

/**
 * Card informativo do cupom BLACKDANIU.
 * O cupom é aplicado automaticamente no checkout — o card apenas comunica isso.
 */
export default function CouponCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full rounded-2xl border-l-8 border-[oklch(0.75_0.15_75)] bg-[oklch(0.955_0.035_85)] p-5 text-left shadow-elegant sm:p-7 ${className}`}
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <Tag
          className="h-8 w-8 flex-none text-[oklch(0.25_0.02_80)] sm:h-11 sm:w-11"
          strokeWidth={1.75}
          aria-hidden
        />
        <div className="min-w-0">
          <p className="text-lg font-bold leading-snug text-[oklch(0.25_0.02_80)] text-balance sm:text-xl md:text-2xl">
            Cupom de desconto{" "}
            <span className="text-[oklch(0.60_0.16_70)]">BLACKDANIU</span> já aplicado diretamente
            no checkout!
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[oklch(0.38_0.02_80)] sm:text-[15px]">
            Válido por tempo limitado · Desconto aplicado de forma automática ao finalizar a compra.
          </p>
        </div>
      </div>
    </div>
  );
}
