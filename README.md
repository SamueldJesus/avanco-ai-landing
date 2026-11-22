# Avanço AI — Odontologia

Landing page da Avanço AI voltada para clínicas odontológicas (páginas sob medida por especialidade e Agente de IA no WhatsApp como módulo complementar ou independente).

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 + Lucide Icons

## Comandos locais

- `npm ci` — instala as dependências exatas do lockfile
- `npm run dev` — sobe o servidor de desenvolvimento
- `npm run typecheck` — valida a tipagem TypeScript (`tsc -b`)
- `npm run build` — valida tipos e gera o bundle estático em `dist/`

## Publicação e histórico

- A branch `main` publica automaticamente na Vercel (`www.avancoai.com.br`), configurada via `vercel.json` (`outputDirectory: "dist"`).
- O formulário de diagnóstico encaminha para o WhatsApp oficial `+55 71 99646-3942`.
- A versão anterior da landing page B2B foi preservada na branch `backup/b2b-landing`.
