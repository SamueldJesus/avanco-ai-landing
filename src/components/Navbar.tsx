import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";

const NAV_LINKS = [
  { href: "#comparativo", label: "Comparativo" },
  { href: "#demonstracao", label: "Demonstração" },
  { href: "#solucoes", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#11161F]/8 bg-[#F7F5F0]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[74px] w-full max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#inicio"
          className="inline-flex items-center gap-3 text-[#11161F] focus-visible:rounded-lg"
          aria-label="Avanço AI Odontologia, início"
        >
          <BrandMark size={34} className="shrink-0 rounded-[9px] shadow-xs" />
          <span className="flex items-baseline gap-2">
            <span className="text-[17px] font-extrabold tracking-[-0.03em] text-[#11161F]">
              Avanço <span className="text-[#8C5E14]">AI</span>
            </span>
            <span className="font-mono-label hidden rounded-full border border-[#8C5E14]/25 bg-[#FBF5E8] px-2 py-0.5 text-[10.5px] font-medium tracking-[0.04em] text-[#8C5E14] uppercase sm:inline-block">
              Odontologia
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] font-medium text-[#495464] transition-colors duration-150 hover:text-[#11161F]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="#diagnostico"
            className="btn-tactile hidden min-h-[42px] items-center gap-1.5 rounded-xl bg-[#0B1018] px-4 py-2 text-[14px] font-semibold text-white shadow-xs hover:bg-[#192233] sm:inline-flex"
          >
            <span>Diagnóstico rápido</span>
            <ArrowUpRight className="h-4 w-4 text-[#E8B04A]" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="btn-tactile inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#11161F]/12 bg-white text-[#11161F] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          className="animate-panel-enter border-t border-[#11161F]/10 bg-[#F7F5F0] px-5 pb-6 pt-4 shadow-lg lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Menu mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[46px] items-center rounded-xl px-3 text-[15.5px] font-semibold text-[#11161F] hover:bg-[#EFEAE0]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 border-t border-[#11161F]/10 pt-4">
            <a
              href="#diagnostico"
              onClick={() => setMenuOpen(false)}
              className="btn-tactile flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#0B1018] px-5 py-3 text-[15px] font-semibold text-white"
            >
              <span>Fazer diagnóstico no WhatsApp</span>
              <ArrowUpRight className="h-4 w-4 text-[#E8B04A]" aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
