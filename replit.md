# Fortunato Criativo — Vitrine de Pedidos

Vitrine de serviços interativa para o estúdio criativo Fortunato Criativo, estilizada como controle de vídeo-game. Permite ao cliente montar um pedido, validar localização por estação de metrô e enviar diretamente pelo WhatsApp.

## Run & Operate

- `pnpm --filter @workspace/vitrine run dev` — inicia o servidor de desenvolvimento da vitrine
- `pnpm run typecheck` — verifica tipos em todos os pacotes

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: HTML puro + CSS + JavaScript (sem frameworks)
- Dev server: Vite 6

## Where things live

- `artifacts/vitrine/index.html` — toda a aplicação: markup, estilos e lógica JS em um único arquivo
- `artifacts/vitrine/vite.config.ts` — configuração do Vite (usa env vars `PORT` e `BASE_PATH`)

## Architecture decisions

- App inteiramente em HTML/CSS/JS puro dentro do `index.html` — sem React nem bibliotecas externas, para máxima portabilidade e simplicidade
- Validação de localização via lista curada de estações do Metrô SP (linhas 1-5 e 15), sem chamadas de API externa
- WhatsApp como canal de pedido: mensagem pré-formatada via `wa.me` link
- Background animado (canvas hexágonos) com `position: fixed` e `z-index: 0`; todo conteúdo em `z-index: 1`

## Product

Vitrine de pedidos para o estúdio Fortunato Criativo (Vila Mariana, SP):
- 6 serviços selecionáveis com preços
- Seleção de estação de metrô mais próxima do cliente
- Resumo do pedido em tempo real com total animado
- Finalização via WhatsApp com mensagem automática
- Botão para agendar reunião online (sem validação de localização)
- Confetti ao finalizar o pedido

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- O arquivo `index.html` contém todo o CSS e JS inline — manter assim por design
- `PORT` e `BASE_PATH` são injetados pelo workflow do Replit; não fixar porta no `vite.config.ts`
- WhatsApp: número configurado em `WA_NUMBER` no topo do `<script>` do `index.html`
