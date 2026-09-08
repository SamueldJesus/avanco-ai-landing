# Avanço AI — automação comercial B2B

Landing page para consultorias empresariais, recrutamento executivo, agências de marketing B2B e SaaS. Oferta concentrada em atendimento e qualificação inbound, preparação de prospecção e organização de CRM/follow-up.

HTML estático, CSS compilado com Tailwind e JavaScript nativo. Preserva a hospedagem existente na Vercel e os ativos de marca. Temas claro/escuro acompanham o sistema.

## Desenvolvimento

- `npm ci`
- `npm run build:css` para atualizar o CSS versionado após alterações.
- `python -m http.server 8765 --bind 127.0.0.1` para servir a página localmente.

## Arquivos

- `index.html`: conteúdo, metadados, navegação, FAQ e formulário.
- `src/input.css`: estilos responsivos e tokens de marca.
- `assets/style.css`: resultado compilado, incluído no Git.
- `assets/site.js`: menu, simulação e encaminhamento ao WhatsApp.

## Captação e simulação

O formulário abre uma mensagem revisável no WhatsApp comercial **+55 71 99646-3942**, confirmado pelo proprietário. Não envia mensagens automaticamente e não salva leads em servidor ou armazenamento local. Há link direto como alternativa sem JavaScript.

A simulação utiliza horas semanais × 4,33 × percentual escolhido. O valor financeiro expressa capacidade equivalente, não economia garantida. O fluxo da primeira seção é identificado como demonstração; não há métricas de clientes ou testemunhos inventados.

## Publicação

Preservar o projeto Vercel ligado ao repositório. Publicar a raiz estática com o CSS compilado; não migrar domínio ou criar infraestrutura adicional. Mudanças em branches permitem revisão antes de integrar à main.
