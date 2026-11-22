export const WHATSAPP_NUMBER = "5571996463942";
export const WHATSAPP_DISPLAY = "+55 71 99646-3942";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DIRECT_WHATSAPP_URL = buildWhatsAppUrl(
  "Olá, equipe Avanço AI. Quero fazer um diagnóstico rápido para minha clínica odontológica."
);

export type SpecialtyId = "implantes" | "lentes" | "alinhadores";

export type OfferStageId = "combo" | "landing" | "agente";

export interface ChatOption {
  id: string;
  patientText: string;
  agentReply: string;
  topicTag: string;
}

export interface SpecialtyShowcase {
  id: SpecialtyId;
  tabLabel: string;
  clinicSampleName: string;
  domainSample: string;
  imagePath: string;
  imageAlt: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  pillars: { title: string; detail: string }[];
  croFootnote: string;
  whatsapp: {
    clinicAgentName: string;
    patientInitial: string;
    agentWelcome: string;
    options: ChatOption[];
    shiftQuestion: string;
  };
}

export const SPECIALTIES: SpecialtyShowcase[] = [
  {
    id: "implantes",
    tabLabel: "Implantes",
    clinicSampleName: "Clínica Modelo · Implantes",
    domainSample: "implantes.suaclinica.com.br",
    imagePath: "/images/clinic-implantes.jpg",
    imageAlt:
      "Consultório odontológico em pedra travertino e madeira representando exemplo ilustrativo de página de implantes",
    headline: "Volte a mastigar com segurança.",
    subheadline: "Avaliação individual com planejamento digital 3D.",
    ctaText: "Pedir avaliação no WhatsApp",
    pillars: [
      {
        title: "Planejamento 3D",
        detail: "Estudo digital antes de cada etapa.",
      },
      {
        title: "Primeira consulta calma",
        detail: "Avaliação e exame sem cirurgia no dia.",
      },
      {
        title: "Plano claro",
        detail: "Indicação e prazos explicados na consulta.",
      },
    ],
    croFootnote:
      "Exemplo ilustrativo. Indicação definida em avaliação presencial (CFO/CRO).",
    whatsapp: {
      clinicAgentName: "Atendimento · Clínica Modelo",
      patientInitial:
        "Oi! Vi a página de implantes e queria saber como funciona a avaliação.",
      agentWelcome:
        "Oi! Na avaliação o dentista analisa seu caso e explica o plano. Qual sua principal dúvida?",
      options: [
        {
          id: "conforto",
          patientText: "Tenho receio de dor. Como é a primeira consulta?",
          agentReply:
            "A primeira consulta é só conversa e exame clínico, sem cirurgia no dia.",
          topicTag: "Conforto",
        },
        {
          id: "valores",
          patientText: "Vocês passam o valor do implante por aqui?",
          agentReply:
            "Pelas regras do CRO, o valor depende do exame presencial. Na consulta passamos o plano completo.",
          topicTag: "Orçamento CRO",
        },
        {
          id: "exames",
          patientText: "Preciso já levar uma tomografia?",
          agentReply:
            "Se tiver exames recentes, pode trazer. Se ainda não tiver, o dentista orienta na avaliação.",
          topicTag: "Exames prévios",
        },
      ],
      shiftQuestion: "Qual turno fica melhor para você vir?",
    },
  },
  {
    id: "lentes",
    tabLabel: "Lentes de Contato",
    clinicSampleName: "Clínica Modelo · Estética",
    domainSample: "lentes.suaclinica.com.br",
    imagePath: "/images/clinic-lentes.jpg",
    imageAlt:
      "Retrato editorial de sorriso natural ilustrando exemplo de página de lentes de contato dental",
    headline: "Sorriso natural feito para o seu rosto.",
    subheadline: "Lentes em porcelana com simulação prévia do desenho.",
    ctaText: "Agendar avaliação estética",
    pillars: [
      {
        title: "Resultado natural",
        detail: "Cor e formato proporcionais ao seu rosto.",
      },
      {
        title: "Teste antes de aprovar",
        detail: "Você visualiza a proposta no planejamento.",
      },
      {
        title: "Mínimo desgaste",
        detail: "Preservação avaliada dente a dente.",
      },
    ],
    croFootnote:
      "Exemplo ilustrativo. Todo planejamento depende de avaliação presencial (CFO/CRO).",
    whatsapp: {
      clinicAgentName: "Atendimento · Clínica Modelo",
      patientInitial:
        "Oi! Quero saber como funciona o planejamento de lentes.",
      agentWelcome:
        "Oi! Começamos com uma avaliação estética para estudar seu sorriso. O que você quer saber primeiro?",
      options: [
        {
          id: "naturalidade",
          patientText: "Tenho medo de ficar artificial ou desgastar muito.",
          agentReply:
            "Priorizamos formato natural e preservação do esmalte, definidos no exame presencial.",
          topicTag: "Naturalidade",
        },
        {
          id: "etapas",
          patientText: "Quantas consultas costuma levar?",
          agentReply:
            "Fazemos avaliação, teste do desenho e aplicação. O dentista confirma o total no exame.",
          topicTag: "Consultas",
        },
        {
          id: "horarios",
          patientText: "Vocês atendem no fim da tarde?",
          agentReply:
            "Temos horários no fim da tarde conforme a agenda da semana.",
          topicTag: "Fim de tarde",
        },
      ],
      shiftQuestion: "Qual período do dia fica melhor para você?",
    },
  },
  {
    id: "alinhadores",
    tabLabel: "Alinhadores",
    clinicSampleName: "Clínica Modelo · Ortodontia",
    domainSample: "alinhadores.suaclinica.com.br",
    imagePath: "/images/clinic-alinhadores.jpg",
    imageAlt:
      "Alinhador ortodôntico transparente sobre pedra travertino ilustrando página de ortodontia digital",
    headline: "Alinhamento discreto com scanner 3D.",
    subheadline: "Placas transparentes e removíveis para a sua rotina.",
    ctaText: "Agendar escaneamento",
    pillars: [
      {
        title: "Escaneamento 3D",
        detail: "Leitura digital rápida, sem moldes.",
      },
      {
        title: "Discreto no dia a dia",
        detail: "Transparente em reuniões e fácil de limpar.",
      },
      {
        title: "Trocas acompanhadas",
        detail: "Revisões objetivas com ortodontista.",
      },
    ],
    croFootnote:
      "Exemplo ilustrativo. Indicação e prazo dependem de diagnóstico presencial (CFO/CRO).",
    whatsapp: {
      clinicAgentName: "Atendimento · Clínica Modelo",
      patientInitial:
        "Oi! Vi o anúncio de alinhadores e queria saber do scanner.",
      agentWelcome:
        "Oi! Na avaliação fazemos o escaneamento 3D para analisar seu alinhamento. Como posso ajudar?",
      options: [
        {
          id: "tempo",
          patientText: "Quanto tempo dura o tratamento?",
          agentReply:
            "Depende do caso. Com o scanner 3D o ortodontista mostra o prazo estimado na consulta.",
          topicTag: "Prazo 3D",
        },
        {
          id: "rotina",
          patientText: "Precisa tirar para comer ou trabalhar?",
          agentReply:
            "Você tira só para comer e escovar. Em reuniões o alinhador é bem discreto.",
          topicTag: "Rotina",
        },
        {
          id: "particular",
          patientText: "Vocês atendem particular ou convênio?",
          agentReply:
            "O tratamento com alinhadores é particular, com parcelamento apresentado após a avaliação.",
          topicTag: "Particular",
        },
      ],
      shiftQuestion: "Qual turno funciona melhor na sua rotina?",
    },
  },
];

export const COMPARISON_BEFORE = [
  "Cliques pagos caem no Instagram ou em site lento.",
  "Mensagens no WhatsApp ficam horas sem resposta.",
  "A recepção perde tempo repetindo respostas básicas.",
];

export const COMPARISON_AFTER = [
  "Página exclusiva e rápida focada no tratamento.",
  "Agente de IA responde em segundos, 24 horas por dia.",
  "Recepção recebe o contato pronto para marcar horário.",
];

export interface OfferTier {
  id: OfferStageId;
  badge: string;
  title: string;
  subtitle: string;
  featured?: boolean;
  deliverables: string[];
  ctaLabel: string;
}

export const OFFER_TIERS: OfferTier[] = [
  {
    id: "landing",
    badge: "Oferta principal",
    title: "Landing Page Odontológica",
    subtitle: "Página sob medida para seus tratamentos de maior margem.",
    deliverables: [
      "Visual criado para a identidade da clínica",
      "Textos revisados nas normas do CFO e CRO",
      "Carregamento rápido no celular",
      "Pronta para Google Ads, Meta Pixel e WhatsApp",
    ],
    ctaLabel: "Quero a Landing Page",
  },
  {
    id: "combo",
    badge: "Mais completo",
    title: "Landing Page + Agente de IA",
    subtitle:
      "A página atrai o paciente e a IA responde no WhatsApp em segundos.",
    featured: true,
    deliverables: [
      "Tudo da Landing Page Odontológica",
      "Agente de IA treinado no tom da clínica",
      "Atendimento e qualificação 24 horas por dia",
      "Resumo pronto enviado para a recepção agendar",
    ],
    ctaLabel: "Quero o Combo Completo",
  },
  {
    id: "agente",
    badge: "Módulo independente",
    title: "Agente de IA no WhatsApp",
    subtitle:
      "Atendimento rápido para clínicas que já recebem mensagens todo dia.",
    deliverables: [
      "Conversa natural, sem menu de números",
      "Responde dúvidas permitidas sobre a avaliação",
      "Coleta o procedimento e o melhor turno",
      "Pode conectar a uma landing page depois",
    ],
    ctaLabel: "Quero só o Agente de IA",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Diagnóstico no WhatsApp",
    text: "Você indica os procedimentos prioritários e o formato ideal.",
  },
  {
    step: "02",
    title: "Criação sob medida",
    text: "Montamos o visual, os textos e o roteiro do agente.",
  },
  {
    step: "03",
    title: "Prévia para aprovar",
    text: "Você testa a página no celular e a conversa antes de publicar.",
  },
  {
    step: "04",
    title: "Publicação no domínio",
    text: "Conectamos WhatsApp e rastreamento para seus anúncios.",
  },
];

export const DIAGNOSTIC_SPECIALTIES = [
  "Implantes Dentários",
  "Lentes de Contato Dental",
  "Alinhadores Invisíveis",
  "Reabilitação Oral",
  "Harmonização Orofacial",
  "Outra",
];

export const STAGE_LABELS: Record<OfferStageId, string> = {
  combo: "Combo Completo (Landing Page + Agente de IA)",
  landing: "Apenas Landing Page Odontológica",
  agente: "Apenas Agente de IA no WhatsApp",
};

export const FAQ_ITEMS = [
  {
    question: "Respeita as normas do CFO e do CRO?",
    answer:
      "Sim. A página e o agente apresentam o tratamento de forma informativa e conduzem à avaliação presencial, sem prometer resultados nem expor preços.",
  },
  {
    question: "O Agente de IA parece robô no WhatsApp?",
    answer:
      "Não. Ele conversa no tom da sua clínica em texto natural, responde dúvidas iniciais e passa um resumo para a recepção agendar.",
  },
  {
    question: "Posso começar só pela Landing Page ou só pelo Agente de IA?",
    answer:
      "Sim. Você escolhe começar por um módulo isolado ou contratar o combo completo, evoluindo no tempo da clínica.",
  },
  {
    question: "A página usa a marca, fotos reais e domínio da clínica?",
    answer:
      "Sim. Aplicamos sua identidade visual, fotos reais da equipe e do consultório, e publicamos no seu próprio domínio.",
  },
  {
    question: "Funciona com o meu gestor de tráfego atual?",
    answer:
      "Sim. Entregamos a página pronta para Google Ads, Meta Pixel e eventos de clique no WhatsApp desde o primeiro dia.",
  },
];
