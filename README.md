# NLW Agents

Este repositório contém uma aplicação full stack desenvolvida durante evento da Rocketseat no mês de julho de 2025, dividida em duas partes:

- **Backend** (`/server`): API construída com Node.js e Express.
- **Frontend** (`/web`): Interface web desenvolvida com React + Vite.

## 📁 Estrutura do Projeto

.
├── server/ # API Node.js com Fastify
└── web/ # Aplicação frontend em React + Vite

## 🚀 Requisitos

- Node.js >= 18.x
- npm ou yarn
- (Opcional, mas recomendado) Docker, se desejar rodar com containers

---

## 🔧 Como rodar o projeto localmente

### 1. Clone o repositório

```bash

git clone https://github.com/jppg1992/nlw-agents.git
cd nlw-agents

```

---

### 2. Inicie o Backend (API)

```bash
cd server
docker compose up -d
npm install
npm run dev
```

A API será iniciada em: `http://localhost:3333`

> Certifique-se de verificar as variáveis de ambiente necessárias no arquivo `.env`.

---

### 3. Inicie o Frontend (Web)

Abra outro terminal e rode:

```bash
cd web
npm install
npm run dev
```

A aplicação web estará disponível em: `http://localhost:5173`

> O frontend se comunica com a API rodando no `http://localhost:3333`.

---

## 🛠 Tecnologias Utilizadas

### Backend (`/server`)

- Node.js
- Fastify
- (Outras dependências específicas)

### Frontend (`/web`)

- React
- Vite
- (Outras dependências específicas)

---

## 📦 Scripts disponíveis

### Backend

| Script                | Descrição                                                           |
| --------------------- | ------------------------------------------------------------------- |
| `npm run dev`         | Inicia a API em modo desenvolvimento                                |
| `npm run start`       | Inicia a API em produção                                            |
| `npm run db:generete` | Gerar um novo arquivo de migration com base nos schemas adicionados |
| `npm run db:migrate`  | Rodar os scripts para criar as tabelas no banco de dados            |
| `npm run db:seed`     | Popular banco de dados                                              |

### Frontend

| Script        | Descrição                                 |
| ------------- | ----------------------------------------- |
| `npm run dev` | Inicia o frontend em modo desenvolvimento |
