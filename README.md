# 🚀 Tech Challenge – Grupo 7 (FIAP) - Fase 2

Projeto desenvolvido como parte do desafio técnico da Fase 2 do curso POSTECH, com foco em arquitetura de **microfrontends**, performance, escalabilidade e experiência do usuário.

## 📚 Sobre o Projeto

Este projeto tem como objetivo aprimorar um sistema de gerenciamento financeiro com as seguintes diretrizes:

* Interface atualizada com gráficos e análises financeiras.
* Sistema de microfrontends com deploy independente.
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

## 🧩 Estrutura do Projeto

O projeto está dividido em múltiplos microfrontends, que se comunicam entre si usando a arquitetura **Module Federation** (Webpack 5):

```
mf-tech-challenge/
├── shell         # Aplicação principal que orquestra os microfrontends
├── greetingcard  # Microfrontend - Cartão de saudação
├── extractlist   # Microfrontend - Lista de transações
├── sidebar       # Microfrontend - Barra lateral de navegação
├── header        # Microfrontend - Cabeçalho principal
├── chart         # Microfrontend - Gráficos e dashboard
```

## 🚀 Como Executar Localmente

### 🔹 Passo a Passo (modo manual sem Docker)

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
# Shell principal
cd shell && npm start

# Microfrontends
cd ../greetingcard && npm start -- --port 8500
cd ../extractlist && npm start -- --port 8501
cd ../sidebar && npm start -- --port 8502
cd ../header && npm start -- --port 8503
cd ../chart && npm start -- --port 8504
```

Acesse `http://localhost:3000` no navegador.

---

## 🐳 Como Rodar com Docker Compose

### 🔹 Frontend

A aplicação Next.js está configurada para consumir a API pública já hospedada na Render.

1. Acesse a pasta do frontend:

```bash
cd tech-challenge
```

2. Execute o projeto com Docker:

```bash
docker-compose up --build
```

> Acesse o frontend em: [http://localhost:3000](http://localhost:3000)

A variável `NEXT_PUBLIC_API_URL` já está configurada para:
`https://tech-backend-25px.onrender.com`

---

### 🔹 Backend (API)

Repositório separado: [https://github.com/kauaneleeal/tech-challenge-api](https://github.com/kauaneleeal/tech-challenge-api)

* A aplicação está hospedada na Render:
  **🌐 [https://tech-backend-25px.onrender.com](https://tech-backend-25px.onrender.com)**

> Para testar a API diretamente, use essa URL no navegador ou em ferramentas como Postman.
> Exemplo: [https://tech-backend-25px.onrender.com/user](https://tech-backend-25px.onrender.com/user)

### ✅ Deseja rodar localmente?

1. Clone o repositório da API:

```bash
git clone https://github.com/kauaneleeal/tech-challenge-api.git
cd tech-challenge-api
```
2. Execute localmente:

```bash
docker-compose up --build
```

> Acesse: [http://localhost:3001](http://localhost:3001)
> Swagger: [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

⚠️ **Importante**: `http://localhost:3001` **só funcionará se você rodar a API localmente**.
Se estiver usando apenas a versão hospedada na Render, acesse via `https://tech-backend-25px.onrender.com`.

---

### 🔹 Banco de Dados (MongoDB)

O MongoDB já está configurado para uso em nuvem (Atlas), com a URI definida no `.env`:

```
MONGO_URI=mongodb+srv://techchallengegp7:*********@techchallenge.f8m1qcn.mongodb.net/
```

✅ Ou seja: **não é necessário subir um container local do MongoDB.**

---

## 🔐 Autenticação e Segurança

* Token JWT é gerado na autenticação e validado no middleware.
* Armazenamento do token via **cookies seguros (httpOnly)**.
* Middleware protege rotas com SSR.
* Requisições autenticadas enviam `Authorization: Bearer <token>`.

---

## 🌐 Deploy

* **Frontend:** hospedado na **Vercel**
  🌍 [https://tech-challenge-git-(sua-branch)-tech-challenge.vercel.app](https://tech-challenge-git-develop-tech-challenge.vercel.app)

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
* **Module Federation**
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
