# Fortunato Criativo — Vitrine de Pedidos

Vitrine de serviços interativa para o estúdio criativo **Fortunato Criativo**, com tema de vídeo-game, integração com WhatsApp e validação de localização por estação de metrô.

![Fortunato Criativo Preview](https://img.shields.io/badge/status-live-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ Funcionalidades

- **Catálogo de serviços** — 6 cards selecionáveis (Criação de Logo, Manual de Marca, Arte de Divulgação, Edição de Vídeo, Criação de Site)
- **Validação de localização** — dropdown com todas as estações das linhas 1, 2, 3, 4, 5 e 15 do Metrô de São Paulo
- **Resumo do pedido em tempo real** — total animado, lista de serviços selecionados
- **Finalizar via WhatsApp** — mensagem pré-formatada enviada direto ao número do estúdio
- **Agendar Reunião Online** — bypass da validação de localização, abre WhatsApp com serviços selecionados
- **Confetti** na conclusão do pedido
- **Background animado** de hexágonos com as cores da marca
- Design dark com fonte **Orbitron**, efeitos de neon glow e tema de controle de vídeo-game

---

## 🛠 Stack

| Camada | Tecnologia |
|---|---|
| Frontend | HTML + CSS + JavaScript (puro, sem frameworks) |
| Bundler / Dev Server | Vite 6 |
| Monorepo | pnpm workspaces |
| Node | 24 |
| TypeScript | 5.9 (type-check apenas) |

---

## 🚀 Rodando localmente

**Pré-requisitos:** Node 20+ e pnpm 9+

```bash
# 1. Instalar dependências
pnpm install

# 2. Iniciar o servidor de desenvolvimento
pnpm --filter @workspace/vitrine run dev
```

Acesse em `http://localhost:<porta>` (a porta é exibida no terminal).

---

## 📁 Estrutura do projeto

```
/
├── artifacts/
│   └── vitrine/           # App principal (HTML/CSS/JS + Vite)
│       ├── index.html     # Toda a vitrine: markup, estilos e lógica
│       └── vite.config.ts
├── lib/                   # Bibliotecas compartilhadas (TypeScript)
├── scripts/               # Scripts utilitários do workspace
├── pnpm-workspace.yaml    # Configuração do monorepo pnpm
├── tsconfig.base.json     # Configuração TypeScript base
└── package.json           # Scripts raiz do workspace
```

---

## 📱 WhatsApp

O número configurado é `5511985815871`. Para trocar, edite a constante no topo do `<script>` em `artifacts/vitrine/index.html`:

```js
const WA_NUMBER = '5511985815871';
```

---

## 🗺 Estações de Metrô suportadas

Todas as estações operacionais das linhas:

- **Linha 1 — Azul** (Tucuruvi ↔ Jabaquara)
- **Linha 2 — Verde** (Vila Madalena ↔ Vila Prudente)
- **Linha 3 — Vermelha** (Palmeiras-Barra Funda ↔ Itaquera)
- **Linha 4 — Amarela** (Luz ↔ Butantã)
- **Linha 5 — Lilás** (Capão Redondo ↔ Ana Rosa)
- **Linha 15 — Prata** (Vila Prudente ↔ Vila Metalúrgica-Autódromo)

---

## 📄 Licença

MIT © Fortunato Criativo
