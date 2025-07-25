# 🚀 Tech Challenge – Grupo 7 (FIAP) - Fase 2

Projeto desenvolvido como parte do desafio técnico da Fase 2 do curso POSTECH, com foco em arquitetura de **microfrontends**, performance, escalabilidade e experiência do usuário.

## 📚 Sobre o Projeto

Este projeto tem como objetivo aprimorar um sistema de gerenciamento financeiro com as seguintes diretrizes:

- Interface atualizada com gráficos e análises financeiras.
- Sistema de microfrontends com deploy independente.
- Filtros avançados e busca em listagem de transações.
- Validação de dados e upload de comprovantes.
- Containerização com Docker.
- Deploy em ambiente cloud.

## 🧑‍💻 Integrantes do Grupo 7

- Alexa Lins
- Diego Costa   
- Henrique Aguiar
- Kauane Gonçalves
- Manoel Meseque

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

### Passo a Passo

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

## 🌐 Deploy

A aplicação pode ser implantada na Vercel para integração nativa com projetos Next.js. Cada microfrontend pode ser hospedado em um domínio ou subdomínio separado e consumido via URLs públicas.

## 🧪 Tecnologias e Ferramentas

- **React 19 + Next.js 15**
- **TypeScript**
- **TailwindCSS**
- **Redux Toolkit**
- **Recharts**
- **Module Federation**
- **Docker & Docker Compose**
- **Lucide React & React Icons**

## ⚙️ Scripts Principais

```bash
npm run dev       # Executa o ambiente de desenvolvimento
npm run build     # Compila a aplicação para produção
npm start         # Inicia o servidor Next.js em produção
npm run lint      # Executa análise estática do código
```
