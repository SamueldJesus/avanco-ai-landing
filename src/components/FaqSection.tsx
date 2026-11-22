import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../data/content";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="duvidas"
      className="border-b border-[#11161F]/8 bg-white py-24 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-start gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="min-w-0 lg:sticky lg:top-28 lg:col-span-4">
          <p className="font-mono-label inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] text-[#8C5E14] uppercase">
            <span className="rounded-md border border-[#8C5E14]/25 bg-[#FBF5E8] px-2 py-0.5">
              06
            </span>
            <span>Dúvidas</span>
          </p>
          <h2 className="mt-4 text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#11161F] sm:text-[38px]">
            Perguntas diretas{" "}
            <span className="font-editorial font-normal text-[#8C5E14]">
              antes de começar.
            </span>
          </h2>
        </div>

        <div className="min-w-0 space-y-3 lg:col-span-8">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[18px] border border-[#11161F]/10 bg-[#F7F5F0]/65 transition-colors duration-150"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="flex min-h-[60px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15.5px] font-bold leading-snug text-[#11161F] hover:bg-[#EFEAE0]/70 sm:px-6"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono-label text-[12px] font-semibold text-[#8C5E14]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#495464] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#8C5E14]" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen ? (
                  <div
                    id={`faq-panel-${idx}`}
                    className="animate-panel-enter border-t border-[#11161F]/8 bg-white px-5 py-4 text-[14.5px] leading-[1.6] text-[#495464] sm:px-6 sm:pl-[58px]"
                  >
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
