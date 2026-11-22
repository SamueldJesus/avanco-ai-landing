import { useEffect, useRef, useState } from "react";
import {
  Check,
  CheckCheck,
  MessageCircle,
  Monitor,
  RotateCcw,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { SPECIALTIES, type ChatOption, type SpecialtyId } from "../data/content";

interface SimulatedMessage {
  id: string;
  sender: "patient" | "agent";
  text: string;
  time: string;
}

const SHIFTS = ["Manhã", "Tarde", "Final do dia"] as const;

export function InteractiveShowcase() {
  const [specialtyId, setSpecialtyId] = useState<SpecialtyId>("implantes");
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile">("desktop");
  const [messages, setMessages] = useState<SimulatedMessage[]>([]);
  const [selectedOption, setSelectedOption] = useState<ChatOption | null>(null);
  const [selectedShift, setSelectedShift] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [chatHighlight, setChatHighlight] = useState(false);

  const chatScrollRef = useRef<HTMLDivElement | null>(null);
  const chatSectionRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);

  const active =
    SPECIALTIES.find((item) => item.id === specialtyId) ?? SPECIALTIES[0];

  const resetChatFor = (specId: SpecialtyId) => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const target = SPECIALTIES.find((item) => item.id === specId) ?? SPECIALTIES[0];
    setSelectedOption(null);
    setSelectedShift(null);
    setIsTyping(false);
    setMessages([
      {
        id: `${specId}-p0`,
        sender: "patient",
        text: target.whatsapp.patientInitial,
        time: "19:42",
      },
      {
        id: `${specId}-a0`,
        sender: "agent",
        text: target.whatsapp.agentWelcome,
        time: "19:42",
      },
    ]);
  };

  useEffect(() => {
    resetChatFor(specialtyId);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [specialtyId]);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSelectOption = (option: ChatOption) => {
    if (isTyping) return;
    setSelectedOption(option);
    setMessages((prev) => [
      ...prev,
      {
        id: `p-${option.id}-${prev.length}`,
        sender: "patient",
        text: option.patientText,
        time: "19:43",
      },
    ]);
    setIsTyping(true);

    timerRef.current = window.setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${option.id}-${prev.length}`,
          sender: "agent",
          text: `${option.agentReply} ${active.whatsapp.shiftQuestion}`,
          time: "19:43",
        },
      ]);
    }, 340);
  };

  const handleSelectShift = (shift: string) => {
    if (isTyping) return;
    setSelectedShift(shift);
    const shiftSentence =
      shift === "Final do dia"
        ? "Prefiro no final do dia."
        : shift === "Manhã"
          ? "Prefiro de manhã."
          : "Prefiro à tarde.";
    setMessages((prev) => [
      ...prev,
      {
        id: `p-shift-${shift}`,
        sender: "patient",
        text: shiftSentence,
        time: "19:44",
      },
    ]);
    setIsTyping(true);

    timerRef.current = window.setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `a-shift-${shift}`,
          sender: "agent",
          text: `Anotado! Passei seu interesse em ${active.tabLabel} (${shift}) para a recepção confirmar o horário aqui.`,
          time: "19:44",
        },
      ]);
    }, 340);
  };

  const handleMockupCtaClick = () => {
    chatSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setChatHighlight(true);
    window.setTimeout(() => setChatHighlight(false), 1200);
  };

  return (
    <section
      id="demonstracao"
      className="obsidian-grid-bg border-b border-white/10 py-24 text-white lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        {/* Heading + Specialty tabs */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-[660px]">
            <p className="font-mono-label inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] text-[#E8B04A] uppercase">
              <span className="rounded-md border border-[#E8B04A]/35 bg-[#E8B04A]/12 px-2 py-0.5">
                02
              </span>
              <span>Demonstração</span>
            </p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:text-[42px]">
              Teste a página e o{" "}
              <span className="font-editorial whitespace-nowrap font-normal text-[#E8B04A]">
                Agente de IA.
              </span>
            </h2>
            <p className="mt-3 text-[15.5px] text-white/70">
              Troque a especialidade e clique na conversa.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Escolher especialidade odontológica de exemplo"
            className="inline-flex flex-wrap gap-2 rounded-2xl border border-white/12 bg-white/5 p-1.5"
          >
            {SPECIALTIES.map((spec) => {
              const isSelected = spec.id === specialtyId;
              return (
                <button
                  key={spec.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSpecialtyId(spec.id)}
                  className={`btn-tactile dark-focus min-h-[42px] rounded-xl px-4 py-2 text-[13.5px] font-semibold ${
                    isSelected
                      ? "bg-[#E8B04A] text-[#0B1018] shadow-sm"
                      : "text-white/80 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {spec.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive studio: Mockup + WhatsApp simulator */}
        <div className="mt-10 grid items-start gap-7 lg:grid-cols-12">
          {/* PART A: Dental Landing Page Showcase */}
          <div className="min-w-0 lg:col-span-7">
            <div className="rounded-[24px] border border-white/12 bg-[#121926] p-4 sm:p-5">
              {/* Top bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono-label rounded-full border border-[#E8B04A]/35 bg-[#E8B04A]/14 px-2.5 py-1 text-[10.5px] font-semibold text-[#E8B04A]">
                    Exemplo ilustrativo
                  </span>
                  <span className="font-mono-label text-[12px] text-white/60">
                    {active.domainSample}
                  </span>
                </div>

                <div
                  className="inline-flex items-center rounded-xl border border-white/12 bg-[#0B1018] p-1"
                  role="group"
                  aria-label="Alternar formato de visualização da vitrine"
                >
                  <button
                    type="button"
                    aria-pressed={viewportMode === "desktop"}
                    onClick={() => setViewportMode("desktop")}
                    className={`btn-tactile dark-focus inline-flex min-h-[34px] items-center gap-1.5 rounded-lg px-3 text-[12px] font-semibold ${
                      viewportMode === "desktop"
                        ? "bg-white text-[#0B1018]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Desktop</span>
                  </button>
                  <button
                    type="button"
                    aria-pressed={viewportMode === "mobile"}
                    onClick={() => setViewportMode("mobile")}
                    className={`btn-tactile dark-focus inline-flex min-h-[34px] items-center gap-1.5 rounded-lg px-3 text-[12px] font-semibold ${
                      viewportMode === "mobile"
                        ? "bg-white text-[#0B1018]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Celular</span>
                  </button>
                </div>
              </div>

              {/* Clinic Landing Page Mockup */}
              <div className="mt-4 flex justify-center">
                <div
                  key={`${active.id}-${viewportMode}`}
                  className={`animate-panel-enter w-full overflow-hidden rounded-[18px] border border-white/15 bg-[#F7F5F0] text-[#11161F] shadow-xl transition-[max-width] duration-200 ${
                    viewportMode === "mobile" ? "max-w-[336px]" : "max-w-full"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-[#11161F]/8 bg-white px-4 py-3">
                    <span className="text-[12.5px] font-bold tracking-[-0.02em] text-[#11161F]">
                      {active.clinicSampleName}
                    </span>
                    <span className="font-mono-label rounded-md bg-[#F7F5F0] px-2 py-0.5 text-[10px] font-medium text-[#8C5E14]">
                      CRO
                    </span>
                  </div>

                  <div
                    className={`grid gap-5 p-5 ${
                      viewportMode === "desktop" ? "sm:grid-cols-12 sm:items-center" : ""
                    }`}
                  >
                    <div className={viewportMode === "desktop" ? "sm:col-span-6" : ""}>
                      <h3 className="text-[21px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#11161F] sm:text-[23px]">
                        {active.headline}
                      </h3>
                      <p className="mt-2.5 text-[13.5px] leading-[1.5] text-[#495464]">
                        {active.subheadline}
                      </p>

                      <button
                        type="button"
                        onClick={handleMockupCtaClick}
                        className="btn-tactile mt-4 inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-xl bg-[#16794B] px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-[#11603B] sm:w-auto"
                      >
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        <span>{active.ctaText}</span>
                      </button>
                    </div>

                    <div className={viewportMode === "desktop" ? "sm:col-span-6" : ""}>
                      <div className="overflow-hidden rounded-[14px] border border-[#11161F]/10 bg-[#EFEAE0]">
                        <img
                          src={active.imagePath}
                          width={1280}
                          height={720}
                          alt={active.imageAlt}
                          className="aspect-[16/10] w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 3 Ultra-short Pillars */}
                  <div
                    className={`grid gap-2.5 border-t border-[#11161F]/8 bg-white px-5 py-4 ${
                      viewportMode === "desktop" ? "sm:grid-cols-3" : "grid-cols-1"
                    }`}
                  >
                    {active.pillars.map((pillar) => (
                      <div
                        key={pillar.title}
                        className="rounded-xl border border-[#11161F]/8 bg-[#F7F5F0]/70 p-3"
                      >
                        <p className="text-[12.5px] font-bold text-[#11161F]">
                          {pillar.title}
                        </p>
                        <p className="mt-0.5 text-[12px] leading-[1.45] text-[#495464]">
                          {pillar.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Discreet CFO/CRO compliance bar */}
                  <div className="flex items-center gap-2 border-t border-[#11161F]/8 bg-[#F7F5F0] px-4 py-2.5 text-[11px] text-[#495464]">
                    <ShieldCheck
                      className="h-3.5 w-3.5 shrink-0 text-[#8C5E14]"
                      aria-hidden="true"
                    />
                    <span>{active.croFootnote}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PART B: Interactive WhatsApp AI Agent Simulator */}
          <div ref={chatSectionRef} className="min-w-0 lg:col-span-5">
            <div
              className={`rounded-[24px] border bg-[#121926] p-4 transition-colors duration-300 sm:p-5 ${
                chatHighlight
                  ? "border-[#22C55E] shadow-[0_0_0_3px_rgba(34,197,94,0.22)]"
                  : "border-white/12"
              }`}
            >
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="font-mono-label shrink-0 rounded-full border border-[#22C55E]/35 bg-[#22C55E]/15 px-2.5 py-1 text-[10.5px] font-semibold text-[#6EE7B7]">
                    Simulação interativa
                  </span>
                  <span className="truncate text-[12px] font-semibold text-white/80">
                    WhatsApp · IA 24h
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => resetChatFor(specialtyId)}
                  className="btn-tactile dark-focus inline-flex min-h-[36px] shrink-0 items-center gap-1.5 rounded-xl border border-white/14 bg-[#0B1018] px-3 text-[12px] font-medium text-white/85 hover:bg-white/10 hover:text-white"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Reiniciar</span>
                </button>
              </div>

              <div className="mt-4 overflow-hidden rounded-[18px] border border-white/15 bg-white text-[#11161F] shadow-xl">
                <div className="flex items-center justify-between bg-[#0F4C3A] px-4 py-3 text-white">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#E8B04A]/20 text-[#E8B04A]">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[13px] font-bold leading-tight">
                        {active.whatsapp.clinicAgentName}
                      </p>
                      <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
                        <span>{isTyping ? "digitando..." : "online · 24h"}</span>
                      </p>
                    </div>
                  </div>
                  <span className="font-mono-label rounded-md bg-white/12 px-2 py-0.5 text-[10px] text-white/90">
                    IA
                  </span>
                </div>

                <div
                  ref={chatScrollRef}
                  className="wa-chat-canvas h-[240px] space-y-2.5 overflow-y-auto p-3.5"
                  aria-live="polite"
                >
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`animate-msg-pop flex ${
                        msg.sender === "patient" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-[13px] leading-[1.45] shadow-xs ${
                          msg.sender === "patient"
                            ? "rounded-tr-sm bg-[#D9FDD3] text-[#111B21]"
                            : "rounded-tl-sm bg-white text-[#111B21]"
                        }`}
                      >
                        <p>{msg.text}</p>
                        <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[#54656F]">
                          <span>{msg.time}</span>
                          {msg.sender === "patient" ? (
                            <CheckCheck className="h-3.5 w-3.5 text-[#53BDEB]" aria-hidden="true" />
                          ) : null}
                        </span>
                      </div>
                    </div>
                  ))}

                  {isTyping ? (
                    <div className="flex justify-start">
                      <div className="inline-flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 shadow-xs">
                        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#495464]" />
                        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#495464]" />
                        <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#495464]" />
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Clickable reply choices */}
                <div className="border-t border-[#11161F]/10 bg-[#F7F5F0] p-3">
                  {!selectedOption ? (
                    <div>
                      <p className="font-mono-label mb-2 text-[10px] font-semibold tracking-[0.04em] text-[#495464] uppercase">
                        Escolha uma pergunta:
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {active.whatsapp.options.map((option) => (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => handleSelectOption(option)}
                            className="btn-tactile flex min-h-[38px] w-full items-center justify-between gap-2 rounded-xl border border-[#11161F]/12 bg-white px-3 py-2 text-left text-[12.5px] font-medium text-[#11161F] hover:border-[#16794B] hover:bg-[#F1FBF5]"
                          >
                            <span>“{option.patientText}”</span>
                            <span className="shrink-0 text-[11px] font-bold text-[#16794B]">
                              Enviar →
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : !selectedShift ? (
                    <div>
                      <p className="font-mono-label mb-2 text-[10px] font-semibold tracking-[0.04em] text-[#495464] uppercase">
                        Escolha um turno:
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {SHIFTS.map((shift) => (
                          <button
                            key={shift}
                            type="button"
                            disabled={isTyping}
                            onClick={() => handleSelectShift(shift)}
                            className="btn-tactile min-h-[38px] rounded-xl border border-[#16794B]/30 bg-white px-2.5 py-2 text-[12.5px] font-semibold text-[#16794B] hover:bg-[#16794B] hover:text-white disabled:opacity-50"
                          >
                            {shift}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : isTyping ? (
                    <p className="py-1 text-[12.5px] font-medium text-[#495464]">
                      Enviando resumo para a recepção...
                    </p>
                  ) : (
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#16794B]">
                        <Check className="h-4 w-4" aria-hidden="true" />
                        Pronto para a recepção
                      </span>
                      <button
                        type="button"
                        onClick={() => resetChatFor(specialtyId)}
                        className="btn-tactile rounded-lg border border-[#11161F]/15 bg-white px-3 py-1.5 text-[12px] font-semibold text-[#11161F] hover:bg-[#EFEAE0]"
                      >
                        Testar outra
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Compact handoff strip */}
              <div className="mt-3.5 rounded-2xl border border-[#E8B04A]/25 bg-[#0B1018] px-4 py-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[12px] font-bold text-white">
                    Resumo para a recepção
                  </span>
                  <span
                    className={`font-mono-label rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      selectedShift && !isTyping
                        ? "bg-[#22C55E]/20 text-[#6EE7B7]"
                        : "bg-white/10 text-white/65"
                    }`}
                  >
                    {selectedShift && !isTyping ? "Pronto para agendar" : "Em atendimento"}
                  </span>
                </div>

                <dl className="mt-2.5 grid grid-cols-3 gap-2 text-[11.5px]">
                  <div>
                    <dt className="text-white/50">Interesse</dt>
                    <dd className="truncate font-medium text-[#E8B04A]">
                      {active.tabLabel}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-white/50">Dúvida</dt>
                    <dd className="truncate font-medium text-white/90">
                      {selectedOption ? selectedOption.topicTag : "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-white/50">Turno</dt>
                    <dd className="truncate font-medium text-white/90">
                      {selectedShift ?? "—"}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
