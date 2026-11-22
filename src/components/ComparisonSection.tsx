import { Check, X } from "lucide-react";
import { COMPARISON_AFTER, COMPARISON_BEFORE } from "../data/content";

export function ComparisonSection() {
  return (
    <section
      id="comparativo"
      className="border-b border-[#11161F]/8 bg-white py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="max-w-[640px]">
          <p className="font-mono-label inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] text-[#8C5E14] uppercase">
            <span className="rounded-md border border-[#8C5E14]/25 bg-[#FBF5E8] px-2 py-0.5">
              01
            </span>
            <span>O problema</span>
          </p>
          <h2 className="mt-4 text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#11161F] sm:text-[42px]">
            Anúncios caros perdem pacientes{" "}
            <span className="font-editorial font-normal text-[#8C5E14]">
              antes da consulta.
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Before */}
          <article className="rounded-[22px] border border-[#11161F]/10 bg-[#F7F5F0] p-7 sm:p-9">
            <h3 className="border-b border-[#11161F]/10 pb-5 text-[19px] font-bold tracking-[-0.02em] text-[#11161F]">
              Clínica no improviso
            </h3>

            <ul className="mt-6 space-y-5">
              {COMPARISON_BEFORE.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 text-[15.5px] leading-[1.5] text-[#374151]"
                >
                  <span
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#9B2C2C]/10 text-[#9B2C2C]"
                    aria-hidden="true"
                  >
                    <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* After */}
          <article className="rounded-[22px] border border-[#E8B04A]/30 bg-[#0B1018] p-7 text-white shadow-[0_24px_60px_-28px_rgba(11,16,24,0.45)] sm:p-9">
            <h3 className="border-b border-white/12 pb-5 text-[19px] font-bold tracking-[-0.02em] text-white">
              Com a Avanço AI
            </h3>

            <ul className="mt-6 space-y-5">
              {COMPARISON_AFTER.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 text-[15.5px] leading-[1.5] text-white/90"
                >
                  <span
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#E8B04A]/18 text-[#E8B04A]"
                    aria-hidden="true"
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
