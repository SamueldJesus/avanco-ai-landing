import { ArrowRight, MessageCircle, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-x-clip border-b border-[#11161F]/8 bg-[#F7F5F0] pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20"
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        {/* Left copy column */}
        <div className="animate-panel-enter min-w-0 lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#8C5E14]/25 bg-[#FBF5E8] px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.04em] text-[#8C5E14] sm:text-[12px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#8C5E14]" aria-hidden="true" />
            <span className="font-mono-label uppercase">Avanço AI · Odontologia</span>
          </p>

          <h1 className="mt-6 text-[34px] font-extrabold leading-[1.07] tracking-[-0.032em] text-[#11161F] sm:text-[50px] lg:max-w-[19ch] lg:text-[54px] lg:leading-[1.06] lg:tracking-[-0.035em]">
            Landing pages odontológicas que transformam anúncios em{" "}
            <span className="font-editorial font-normal text-[#8C5E14]">
              avaliações.
            </span>
          </h1>

          <p className="mt-5 max-w-[46ch] text-[17px] leading-[1.6] text-[#495464] sm:text-[18.5px]">
            Páginas sob medida para implantes, lentes e alinhadores. Com opção de Agente
            de IA atendendo no WhatsApp 24h.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#diagnostico"
              className="btn-tactile inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#0B1018] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_-12px_rgba(11,16,24,0.45)] hover:bg-[#192233]"
            >
              <span>Fazer diagnóstico rápido</span>
              <ArrowRight className="h-4 w-4 text-[#E8B04A]" aria-hidden="true" />
            </a>
            <a
              href="#demonstracao"
              className="btn-tactile inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-[#11161F]/16 bg-white px-6 py-3.5 text-[15px] font-semibold text-[#11161F] hover:border-[#11161F]/32 hover:bg-[#FBF9F5]"
            >
              <Play className="h-3.5 w-3.5 text-[#8C5E14]" aria-hidden="true" />
              <span>Ver demonstração</span>
            </a>
          </div>

          <p className="mt-7 text-[13px] font-medium text-[#667282]">
            Padrão ético CFO/CRO · Combo completo ou contratação por etapas
          </p>
        </div>

        {/* Right clean editorial preview */}
        <div className="min-w-0 lg:col-span-5">
          <div className="rounded-[24px] border border-[#11161F]/10 bg-white p-3.5 shadow-[0_24px_60px_-28px_rgba(11,16,24,0.22)]">
            <div className="mb-3 flex items-center justify-between gap-2 px-1">
              <span className="font-mono-label truncate text-[11px] text-[#667282]">
                implantes.suaclinica.com.br
              </span>
              <span className="font-mono-label shrink-0 rounded-full border border-[#8C5E14]/25 bg-[#FBF5E8] px-2.5 py-0.5 text-[10px] font-semibold text-[#8C5E14]">
                Exemplo ilustrativo
              </span>
            </div>

            <div className="group overflow-hidden rounded-[16px] border border-[#11161F]/8 bg-[#EFEAE0]">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src="/images/clinic-implantes.jpg"
                  width={1280}
                  height={720}
                  fetchPriority="high"
                  alt="Consultório odontológico minimalista ilustrando exemplo de landing page para implantes"
                  className="photo-zoom h-full w-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between gap-3 bg-white px-4 py-3">
                <p className="truncate text-[13px] font-bold text-[#11161F]">
                  Clínica Modelo · Implantes
                </p>
                <a
                  href="#demonstracao"
                  className="btn-tactile inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#16794B] px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-[#11603B]"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Avaliar</span>
                </a>
              </div>
            </div>

            <div className="mt-3 rounded-[16px] bg-[#0B1018] px-4 py-3.5 text-white">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-[12px] font-semibold text-white">
                  <span className="h-2 w-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
                  Agente de IA · WhatsApp 24h
                </span>
                <span className="font-mono-label text-[10px] text-[#E8B04A]">
                  Simulação
                </span>
              </div>
              <p className="mt-2 text-[13px] leading-[1.5] text-white/85">
                “Olá! Posso explicar a avaliação de implantes e ver o melhor turno.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
