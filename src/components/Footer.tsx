import { ArrowUpRight, MessageCircle } from "lucide-react";
import { DIRECT_WHATSAPP_URL, WHATSAPP_DISPLAY } from "../data/content";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="bg-[#080C14] py-14 text-white">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-center">
          <div>
            <a
              href="#inicio"
              className="dark-focus inline-flex items-center gap-3 rounded-lg"
            >
              <BrandMark size={34} className="rounded-[9px]" />
              <span className="text-[18px] font-extrabold tracking-[-0.03em] text-white">
                Avanço <span className="text-[#E8B04A]">AI</span>
              </span>
            </a>
            <p className="mt-3 text-[14px] text-white/65">
              Landing pages e Agentes de IA para clínicas odontológicas.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#diagnostico"
              className="btn-tactile dark-focus inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/18 bg-white/6 px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-white/12"
            >
              <span>Diagnóstico rápido</span>
              <ArrowUpRight className="h-4 w-4 text-[#E8B04A]" aria-hidden="true" />
            </a>
            <a
              href={DIRECT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile dark-focus inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#16794B] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#11603B]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>WhatsApp {WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-3 text-[12.5px] text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Avanço AI · avancoai.com.br</p>
          <p>Vitrines e conversas acima são exemplos ilustrativos.</p>
        </div>
      </div>
    </footer>
  );
}
