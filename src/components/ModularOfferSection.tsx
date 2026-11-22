import { ArrowRight, Check } from "lucide-react";
import { OFFER_TIERS, type OfferStageId } from "../data/content";

interface ModularOfferSectionProps {
  selectedStage: OfferStageId;
  onSelectStage: (stage: OfferStageId) => void;
}

export function ModularOfferSection({
  selectedStage,
  onSelectStage,
}: ModularOfferSectionProps) {
  const handlePick = (stage: OfferStageId) => {
    onSelectStage(stage);
    const el = document.getElementById("diagnostico");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="solucoes"
      className="border-b border-[#11161F]/8 bg-[#F7F5F0] py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="max-w-[600px]">
          <p className="font-mono-label inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] text-[#8C5E14] uppercase">
            <span className="rounded-md border border-[#8C5E14]/25 bg-[#FBF5E8] px-2 py-0.5">
              03
            </span>
            <span>Como contratar</span>
          </p>
          <h2 className="mt-4 text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#11161F] sm:text-[42px]">
            Comece pelo que sua clínica{" "}
            <span className="font-editorial font-normal text-[#8C5E14]">
              precisa agora.
            </span>
          </h2>
          <p className="mt-3 text-[16px] text-[#495464]">
            Contrate o combo completo ou comece por apenas uma etapa.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {OFFER_TIERS.map((tier) => {
            const isFeatured = Boolean(tier.featured);
            const isPicked = selectedStage === tier.id;

            return (
              <article
                key={tier.id}
                className={`card-hover-lift flex flex-col rounded-[24px] border p-7 sm:p-8 ${
                  isFeatured
                    ? "border-[#E8B04A]/45 bg-[#0B1018] text-white shadow-[0_24px_60px_-24px_rgba(11,16,24,0.5)]"
                    : "border-[#11161F]/11 bg-white text-[#11161F] shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-mono-label rounded-full px-3 py-1 text-[11px] font-semibold ${
                      isFeatured
                        ? "border border-[#E8B04A]/40 bg-[#E8B04A]/15 text-[#E8B04A]"
                        : "border border-[#8C5E14]/25 bg-[#FBF5E8] text-[#8C5E14]"
                    }`}
                  >
                    {tier.badge}
                  </span>
                  {isPicked ? (
                    <span
                      className={`font-mono-label text-[10.5px] font-semibold ${
                        isFeatured ? "text-[#6EE7B7]" : "text-[#16794B]"
                      }`}
                    >
                      Selecionado
                    </span>
                  ) : null}
                </div>

                <h3
                  className={`mt-5 text-[22px] font-extrabold leading-tight tracking-[-0.025em] ${
                    isFeatured ? "text-white" : "text-[#11161F]"
                  }`}
                >
                  {tier.title}
                </h3>

                <p
                  className={`mt-2.5 text-[14.5px] leading-[1.55] ${
                    isFeatured ? "text-white/75" : "text-[#495464]"
                  }`}
                >
                  {tier.subtitle}
                </p>

                <ul className="mt-7 flex-1 space-y-3.5 border-t border-current/10 pt-6">
                  {tier.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] leading-[1.45]"
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          isFeatured ? "text-[#E8B04A]" : "text-[#16794B]"
                        }`}
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      <span className={isFeatured ? "text-white/88" : "text-[#1F2937]"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => handlePick(tier.id)}
                    className={`btn-tactile flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-[14.5px] font-semibold ${
                      isFeatured
                        ? "dark-focus bg-[#E8B04A] text-[#0B1018] hover:bg-[#F2BE5E]"
                        : "bg-[#0B1018] text-white hover:bg-[#192233]"
                    }`}
                  >
                    <span>{tier.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[13.5px] text-[#667282]">
          Escopo e prazo definidos no diagnóstico pelo WhatsApp, conforme sua clínica.
        </p>
      </div>
    </section>
  );
}
