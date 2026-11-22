import { useMemo, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import {
  buildWhatsAppUrl,
  DIAGNOSTIC_SPECIALTIES,
  DIRECT_WHATSAPP_URL,
  STAGE_LABELS,
  WHATSAPP_DISPLAY,
  type OfferStageId,
} from "../data/content";

interface DiagnosticSectionProps {
  selectedStage: OfferStageId;
  onSelectStage: (stage: OfferStageId) => void;
}

const STAGE_OPTIONS: { id: OfferStageId; title: string }[] = [
  { id: "combo", title: "Combo: Landing Page + Agente de IA" },
  { id: "landing", title: "Só Landing Page Odontológica" },
  { id: "agente", title: "Só Agente de IA no WhatsApp" },
];

export function DiagnosticSection({
  selectedStage,
  onSelectStage,
}: DiagnosticSectionProps) {
  const [clinicName, setClinicName] = useState("");
  const [cityOrInsta, setCityOrInsta] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([
    "Implantes Dentários",
  ]);

  const toggleSpecialty = (label: string) => {
    setSelectedSpecialties((prev) =>
      prev.includes(label)
        ? prev.length > 1
          ? prev.filter((item) => item !== label)
          : prev
        : [...prev, label]
    );
  };

  const assembledMessage = useMemo(() => {
    const clinicLine = clinicName.trim()
      ? `Clínica / Responsável: ${clinicName.trim()}`
      : "Clínica / Responsável: (informar na conversa)";
    const focusLine = `Interesse: ${STAGE_LABELS[selectedStage]}`;
    const specialtiesLine = `Especialidades: ${selectedSpecialties.join(", ")}`;
    const extraLine = cityOrInsta.trim()
      ? `\nCidade / Instagram: ${cityOrInsta.trim()}`
      : "";

    return `Olá, equipe Avanço AI. Quero fazer um diagnóstico rápido para minha clínica odontológica.\n\n${clinicLine}\n${focusLine}\n${specialtiesLine}${extraLine}`;
  }, [clinicName, selectedStage, selectedSpecialties, cityOrInsta]);

  const whatsappHref = useMemo(
    () => buildWhatsAppUrl(assembledMessage),
    [assembledMessage]
  );

  return (
    <section
      id="diagnostico"
      className="border-b border-[#11161F]/8 bg-[#F7F5F0] py-24 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-start gap-12 px-5 sm:px-8 lg:grid-cols-12">
        {/* Left column: title + 1 short sentence + direct WhatsApp link */}
        <div className="min-w-0 lg:sticky lg:top-28 lg:col-span-5">
          <p className="font-mono-label inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] text-[#8C5E14] uppercase">
            <span className="rounded-md border border-[#8C5E14]/25 bg-[#FBF5E8] px-2 py-0.5">
              05
            </span>
            <span>Diagnóstico rápido</span>
          </p>

          <h2 className="mt-4 text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#11161F] sm:text-[42px]">
            Monte seu plano{" "}
            <span className="font-editorial font-normal text-[#8C5E14]">
              pelo WhatsApp.
            </span>
          </h2>

          <p className="mt-4 max-w-[38ch] text-[16px] leading-[1.6] text-[#495464]">
            Marque as opções ao lado e abra a conversa com a mensagem pronta para
            revisar.
          </p>

          <div className="mt-8">
            <p className="text-[13px] font-medium text-[#667282]">
              Prefere chamar direto?
            </p>
            <a
              href={DIRECT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile mt-2.5 inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#16794B]/30 bg-white px-4 py-2.5 text-[14px] font-semibold text-[#16794B] hover:bg-[#16794B] hover:text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>WhatsApp {WHATSAPP_DISPLAY}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right interactive diagnostic card */}
        <div className="min-w-0 lg:col-span-7">
          <div className="rounded-[24px] border border-[#11161F]/12 bg-white p-5 shadow-[0_24px_60px_-28px_rgba(11,16,24,0.16)] sm:p-7">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="clinic-name"
                  className="block text-[13.5px] font-bold text-[#11161F]"
                >
                  Nome da clínica ou dentista
                </label>
                <input
                  id="clinic-name"
                  name="clinicName"
                  type="text"
                  autoComplete="organization"
                  placeholder="Ex.: Clínica Sorriso ou Dra. Helena"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  className="mt-1.5 block min-h-[44px] w-full rounded-xl border border-[#11161F]/16 bg-[#F7F5F0]/55 px-4 text-[14.5px] text-[#11161F] placeholder:text-[#667282] focus:border-[#8C5E14] focus:bg-white"
                />
              </div>

              <fieldset>
                <legend className="block text-[13.5px] font-bold text-[#11161F]">
                  O que quer priorizar hoje?
                </legend>
                <div className="mt-2 grid gap-2">
                  {STAGE_OPTIONS.map((option) => {
                    const active = selectedStage === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => onSelectStage(option.id)}
                        className={`btn-tactile flex min-h-[44px] w-full items-center justify-between gap-3 rounded-xl border px-4 py-2 text-left text-[13.5px] font-semibold ${
                          active
                            ? "border-[#0B1018] bg-[#0B1018] text-white"
                            : "border-[#11161F]/14 bg-white text-[#11161F] hover:border-[#11161F]/30 hover:bg-[#F7F5F0]/60"
                        }`}
                      >
                        <span>{option.title}</span>
                        <span
                          className={`grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full border ${
                            active
                              ? "border-[#E8B04A] bg-[#E8B04A]"
                              : "border-[#11161F]/25"
                          }`}
                          aria-hidden="true"
                        >
                          {active ? (
                            <span className="h-1.5 w-1.5 rounded-full bg-[#0B1018]" />
                          ) : null}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div>
                <p className="text-[13.5px] font-bold text-[#11161F]">
                  Especialidades prioritárias
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {DIAGNOSTIC_SPECIALTIES.map((specialty) => {
                    const isSelected = selectedSpecialties.includes(specialty);
                    return (
                      <button
                        key={specialty}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => toggleSpecialty(specialty)}
                        className={`btn-tactile min-h-[36px] rounded-full border px-3 py-1 text-[12.5px] font-semibold ${
                          isSelected
                            ? "border-[#8C5E14] bg-[#FBF5E8] text-[#8C5E14]"
                            : "border-[#11161F]/14 bg-white text-[#495464] hover:border-[#11161F]/30 hover:text-[#11161F]"
                        }`}
                      >
                        {specialty}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="clinic-city"
                  className="block text-[13.5px] font-bold text-[#11161F]"
                >
                  Cidade ou @Instagram{" "}
                  <span className="font-normal text-[#667282]">(opcional)</span>
                </label>
                <input
                  id="clinic-city"
                  name="cityOrInsta"
                  type="text"
                  placeholder="Ex.: Salvador - BA · @suaclinica"
                  value={cityOrInsta}
                  onChange={(e) => setCityOrInsta(e.target.value)}
                  className="mt-1.5 block min-h-[44px] w-full rounded-xl border border-[#11161F]/16 bg-[#F7F5F0]/55 px-4 text-[14.5px] text-[#11161F] placeholder:text-[#667282] focus:border-[#8C5E14] focus:bg-white"
                />
              </div>

              {/* Live preview */}
              <div className="rounded-2xl border border-[#11161F]/10 bg-[#F7F5F0] p-3.5">
                <p className="font-mono-label text-[10.5px] font-semibold tracking-[0.04em] text-[#8C5E14] uppercase">
                  Prévia da mensagem
                </p>
                <pre className="mt-1.5 whitespace-pre-wrap font-sans text-[12.5px] leading-[1.5] text-[#1F2937]">
                  {assembledMessage}
                </pre>
              </div>

              <div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-diagnostic-cta="whatsapp"
                  className="btn-tactile flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#16794B] px-6 py-3 text-[15px] font-bold text-white shadow-[0_14px_30px_-12px_rgba(22,121,75,0.5)] hover:bg-[#11603B]"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  <span>Abrir no WhatsApp</span>
                  <ArrowUpRight className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
                <p className="mt-2 text-center text-[12px] text-[#667282]">
                  Você revisa o texto no WhatsApp ({WHATSAPP_DISPLAY}) antes de enviar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
