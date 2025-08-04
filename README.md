# 🚀 Tech Challenge – Grupo 7 (FIAP) - Fase 2

Projeto desenvolvido como parte do desafio técnico da Fase 2 do curso POSTECH, com foco em arquitetura de **microfrontends**, performance, escalabilidade e experiência do usuário.

## 📚 Sobre o Projeto

Este projeto tem como objetivo aprimorar um sistema de gerenciamento financeiro com as seguintes diretrizes:

* Interface atualizada com gráficos e análises financeiras.
* Sistema híbrido, com a funcionalidade de investimentos construída como **microfrontend**.
* Filtros avançados e busca em listagem de transações.
* Validação de dados e upload de comprovantes.
* Containerização com Docker.
* Deploy em ambiente cloud.

## 🧑‍💻 Integrantes do Grupo 7

* Alexa Lins
* Diego Costa
* Henrique Aguiar
* Kauane Gonçalves
* Manoel Meseque

## 📁 Estrutura Geral do Projeto

### 🔸 Repositório Principal

Repositório: [https://github.com/FIAP-GRUPO-7/tech-challenge](https://github.com/FIAP-GRUPO-7/tech-challenge)

Contém todo o frontend principal (Next.js), autenticação, dashboard, transferências, extrato, entre outras funcionalidades. A única funcionalidade em microfrontend é a parte de **investimentos**.

---

## 🚀 Como Executar o Projeto Principal Localmente

1. Clone o repositório:

```bash
git clone https://github.com/FIAP-GRUPO-7/tech-challenge.git
cd tech-challenge
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env.local` com a seguinte variável:

```env
NEXT_PUBLIC_API_URL=https://tech-backend-25px.onrender.com
```

4. Inicie o projeto:

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 📦 Executar a Parte de Investimentos (Microfrontend)

A funcionalidade de **investimentos** é implementada como microfrontend e está no repositório separado:

Repositório: [https://github.com/FIAP-GRUPO-7/mf-tech-challenge](https://github.com/FIAP-GRUPO-7/mf-tech-challenge)

### Como Rodar Localmente os Microfrontends

1. Clone o repositório:

```bash
git clone https://github.com/FIAP-GRUPO-7/mf-tech-challenge.git
cd mf-tech-challenge
```

2. Instale as dependências em cada projeto:

```bash
cd shell && npm install
cd ../greetingcard && npm install
cd ../extractlist && npm install
cd ../sidebar && npm install
cd ../header && npm install
cd ../chart && npm install
```

3. Execute os microfrontends (em terminais separados):

```bash
cd shell && npm start
cd ../greetingcard && npm start
cd ../extractlist && npm start
cd ../sidebar && npm start
cd ../header && npm start
cd ../chart && npm start
```

Acesse: [http://localhost:9000](http://localhost:9000)

---

## 🐳 Como Rodar com Docker Compose

### 🔹 Frontend Principal

```bash
cd tech-challenge
```

```bash
docker-compose up --build
```

> A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

### 🔹 Backend (API)

Repositório: [https://github.com/kauaneleeal/tech-challenge-api](https://github.com/kauaneleeal/tech-challenge-api)

```bash
git clone https://github.com/kauaneleeal/tech-challenge-api.git
cd tech-challenge-api
docker-compose up --build
```

> API: [http://localhost:3001](http://localhost:3001)
> Swagger: [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

### 🔹 MongoDB

Utilizamos o **MongoDB Atlas** em nuvem, já configurado via variável `MONGO_URI` no `.env`:

```env
MONGO_URI=mongodb+srv://techchallengegp7:<senha>@techchallenge...mongodb.net/
```

✅ Ou seja: **não é necessário subir um container local do MongoDB**

---

## 🔐 Autenticação e Segurança

* Token JWT com validação de expiração.
* Armazenamento via cookie `httpOnly` seguro.
* Middleware no frontend para proteger rotas SSR.
* Requisições autenticadas via `Authorization: Bearer <token>`

---

## 🌐 Deploy

* **Frontend:** hospedado na **Vercel**
  🌍 [https://tech-challenge-phi.vercel.app/](https://tech-challenge-phi.vercel.app/)

* **API:** hospedada na **Render**
  🌍 [https://tech-backend-25px.onrender.com](https://tech-backend-25px.onrender.com)

* **Banco de Dados:** MongoDB Atlas (cloud)

Todas as variáveis de ambiente estão preparadas para produção.

---

## 🧪 Tecnologias e Ferramentas

* **React 19 + Next.js 15**
* **TypeScript**
* **TailwindCSS**
* **Redux Toolkit**
* **Recharts**
* **Docker & Docker Compose**
* **MongoDB Atlas**
* **Lucide React & React Icons**

---

## ⚙️ Scripts Principais

```bash
npm run dev       # Executa o ambiente de desenvolvimento
npm run build     # Compila a aplicação para produção
npm start         # Inicia o servidor Next.js em produção
npm run lint      # Executa análise estática do código
```
