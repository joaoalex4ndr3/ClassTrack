# ClassTrack

## Sistema Inteligente de Acompanhamento Escolar

O **ClassTrack** é uma plataforma web desenvolvida para auxiliar o acompanhamento acadêmico de alunos, professores e direção escolar por meio de uma interface moderna, intuitiva e centralizada.

O sistema foi criado com o objetivo de facilitar o monitoramento de **frequência**, **notas**, **ocorrências** e **indicadores de desempenho escolar**, permitindo uma gestão acadêmica mais eficiente, organizada e transparente.

A branch `main` representa a área principal de apresentação e boas-vindas do sistema, funcionando como o ponto inicial para o usuário conhecer o projeto e acessar os módulos disponíveis.

---

## Organização do Repositório

Este repositório está organizado em **branches separadas por matéria**, facilitando a divisão, o desenvolvimento e a avaliação das entregas relacionadas a cada disciplina do projeto.

Dessa forma, cada branch concentra arquivos, códigos, documentações e implementações específicas de uma determinada área, mantendo o projeto mais organizado e fácil de acompanhar.

Exemplo de organização:

```txt
main                 → Página principal e apresentação do sistema
banco-de-dados       → Modelagem, documentação e ambiente com Docker
logica-programacao   → Fluxogramas e lógica do sistema
front-end            → Interfaces e funcionalidades visuais
documentacao         → Materiais explicativos e entregas acadêmicas
```

Essa divisão ajuda no controle das versões e permite que cada parte do projeto seja avaliada separadamente.

---

## Sumário

* [Sobre o Projeto](#sobre-o-projeto)
* [Objetivos](#objetivos)
* [Status do Projeto](#status-do-projeto)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Ferramentas Utilizadas](#ferramentas-utilizadas)
* [Estrutura do Sistema](#estrutura-do-sistema)
* [Controle de Acesso](#controle-de-acesso)
* [Funcionalidades do Aluno](#funcionalidades-do-aluno)
* [Funcionalidades do Professor](#funcionalidades-do-professor)
* [Funcionalidades da Direção](#funcionalidades-da-direção)
* [Sistema Inteligente de Alertas](#sistema-inteligente-de-alertas)
* [Dashboard e Indicadores](#dashboard-e-indicadores)
* [Relatórios e Exportações](#relatórios-e-exportações)
* [Banco de Dados](#banco-de-dados)
* [Backend](#backend)
* [Segurança](#segurança)
* [Estrutura de Pastas](#estrutura-de-pastas)
* [Fluxo de Navegação](#fluxo-de-navegação)
* [Como Executar o Projeto](#como-executar-o-projeto)
* [Diferenciais do Projeto](#diferenciais-do-projeto)
* [Limitações da Versão Atual](#limitações-da-versão-atual)
* [Melhorias Futuras](#melhorias-futuras)
* [Equipe de Desenvolvimento](#equipe-de-desenvolvimento)
* [Licença](#licença)

---

# Sobre o Projeto

O **ClassTrack** surgiu a partir da necessidade de melhorar o acompanhamento do desempenho acadêmico dentro do ambiente escolar.

Em muitas instituições, informações como notas, frequência, ocorrências e indicadores de desempenho ficam espalhadas em diferentes meios ou são consultadas apenas em momentos específicos. Isso pode dificultar o acompanhamento dos alunos e atrasar ações preventivas.

Muitas vezes, os estudantes descobrem problemas relacionados à frequência, rendimento ou comportamento apenas ao final do semestre, quando as possibilidades de recuperação já são mais limitadas.

Pensando nisso, o ClassTrack foi desenvolvido como uma plataforma capaz de centralizar as principais informações acadêmicas e disponibilizá-las de forma clara para alunos, professores e direção escolar.

O projeto busca promover:

* Maior transparência acadêmica;
* Melhor organização dos dados escolares;
* Acompanhamento preventivo dos alunos;
* Facilidade no registro de informações;
* Apoio à tomada de decisão da equipe escolar.

---

# Objetivos

## Objetivo Geral

Desenvolver uma plataforma digital capaz de centralizar e facilitar o acompanhamento acadêmico dos estudantes, permitindo que alunos, professores e direção tenham acesso às informações de acordo com suas permissões.

## Objetivos Específicos

* Monitorar a frequência escolar dos alunos;
* Acompanhar o desempenho acadêmico;
* Facilitar o trabalho dos professores no registro de dados;
* Disponibilizar indicadores para a direção escolar;
* Gerar alertas preventivos;
* Melhorar a comunicação acadêmica;
* Organizar registros escolares;
* Permitir consultas rápidas e intuitivas;
* Apoiar ações pedagógicas antes que os problemas se agravem.

---

# Status do Projeto

O ClassTrack encontra-se em fase de **protótipo acadêmico funcional**.

Nesta etapa, o projeto possui foco principal em:

* Interface visual;
* Navegação entre páginas;
* Controle de acesso por perfil;
* Simulação de funcionalidades;
* Organização dos módulos;
* Documentação do sistema;
* Modelagem e preparação da estrutura de banco de dados.

## Situação atual

```txt
Frontend: implementado
Banco de dados: modelado e trabalhado com Docker
Backend: ainda não implementado
Integração real com banco: ainda não implementada
```

---

# Tecnologias Utilizadas

## Front-End

* HTML5
* CSS3
* JavaScript ES6+

Essas tecnologias foram utilizadas para desenvolver a estrutura, o estilo e as interações do sistema diretamente no navegador.

## Recursos Visuais

* SVG Icons
* Flexbox
* CSS Grid
* Glassmorphism
* Aurora Background
* Design responsivo
* Cards informativos
* Dashboards visuais
* Componentes interativos

## Armazenamento Local

* LocalStorage

O LocalStorage é utilizado nesta versão para simular algumas informações de sessão e funcionamento do sistema no navegador.

---

# Ferramentas Utilizadas

## Desenvolvimento

* Visual Studio Code
* Git
* GitHub

## Banco de Dados

* Docker

O Docker foi utilizado na parte de banco de dados para facilitar a criação de um ambiente organizado, padronizado e separado da máquina local.

Mesmo que o sistema ainda não possua backend, o uso do Docker permite preparar a estrutura de banco para futuras integrações.

## Controle de Versão

* Git
* GitHub
* Branches separadas por disciplina

---

# Estrutura do Sistema

O sistema é dividido em módulos principais, cada um com uma função específica dentro da plataforma.

## Página Inicial

Área institucional responsável pela apresentação do projeto, seus objetivos e proposta.

## Tela de Acesso

Tela responsável pela escolha do perfil e validação inicial do usuário.

## Painel do Aluno

Área destinada à consulta de informações acadêmicas pessoais.

## Painel do Professor

Área destinada ao gerenciamento acadêmico das turmas, alunos, notas, frequências e ocorrências.

## Painel da Direção

Área destinada ao acompanhamento institucional, visualização de indicadores e apoio à tomada de decisão.

---

# Controle de Acesso

O sistema possui três níveis principais de acesso.

## Aluno

Perfil voltado para consulta das informações acadêmicas pessoais.

### Permissões

* Consultar notas;
* Consultar frequência;
* Visualizar desempenho;
* Acompanhar indicadores acadêmicos;
* Ver informações escolares atualizadas.

---

## Professor

Perfil voltado para o gerenciamento acadêmico dos alunos vinculados às turmas.

### Permissões

* Registrar frequência;
* Realizar chamadas em lote;
* Lançar notas;
* Registrar ocorrências;
* Acompanhar alertas acadêmicos;
* Exportar relatórios.

---

## Direção

Perfil voltado para a análise geral da instituição.

### Permissões

* Visualizar indicadores gerais;
* Monitorar desempenho das turmas;
* Consultar relatórios;
* Acompanhar ocorrências;
* Monitorar alertas críticos;
* Analisar dados institucionais.

---

# Funcionalidades do Aluno

## Dashboard Acadêmico

O aluno possui acesso a um painel com informações resumidas sobre sua situação escolar.

### Informações Disponíveis

* Média geral;
* Frequência acumulada;
* Quantidade de faltas;
* Situação acadêmica;
* Indicadores de desempenho.

## Consulta de Frequência

Permite acompanhar presenças e ausências registradas.

### Informações

* Data da aula;
* Disciplina;
* Situação: presente ou ausente.

## Consulta de Notas

Exibe as avaliações registradas pelos professores.

### Informações

* Disciplina;
* Avaliação;
* Nota obtida;
* Média.

## Indicadores de Desempenho

Apresenta métricas que ajudam o aluno a entender sua evolução acadêmica.

---

# Funcionalidades do Professor

## Dashboard do Professor

Painel com visão geral das informações mais importantes para o professor.

### Indicadores

* Quantidade de alunos;
* Quantidade de turmas;
* Faltas registradas;
* Alertas ativos;
* Notas lançadas.

## Gestão de Turmas

Permite visualizar as turmas vinculadas ao professor.

### Informações

* Nome da turma;
* Ano letivo;
* Turno;
* Disciplina;
* Quantidade de alunos.

## Gestão de Alunos

Permite visualizar informações detalhadas dos estudantes.

### Dados

* Nome;
* Status;
* Média;
* Quantidade de faltas;
* Situação acadêmica.

## Controle de Frequência

### Registro Individual

Permite registrar presença ou ausência de um aluno específico.

### Chamada em Lote

Permite registrar a frequência de uma turma inteira de forma rápida.

### Recursos

* Marcar todos como presentes;
* Marcar todos como ausentes;
* Registro em massa;
* Salvamento rápido.

## Gestão de Notas

### Lançamento de Notas

Permite registrar avaliações acadêmicas dos alunos.

### Campos

* Aluno;
* Avaliação;
* Nota;
* Observação.

### Regras

* Nota mínima: 0
* Nota máxima: 10

## Gestão de Ocorrências

Permite registrar situações disciplinares ou comportamentais.

### Níveis

* Leve;
* Moderado;
* Grave.

### Campos

* Aluno;
* Data;
* Nível;
* Descrição.

---

# Funcionalidades da Direção

## Dashboard Institucional

A direção possui uma visão estratégica dos dados da instituição.

### Indicadores

* Total de alunos;
* Total de turmas;
* Frequência geral;
* Média institucional;
* Alertas ativos;
* Ocorrências registradas.

## Monitoramento Acadêmico

Permite acompanhar:

* Frequência escolar;
* Desempenho acadêmico;
* Ocorrências disciplinares;
* Indicadores de risco;
* Situação geral das turmas.

## Apoio à Tomada de Decisão

Os indicadores permitem que a direção identifique problemas com mais rapidez e acompanhe situações que exigem atenção pedagógica.

---

# Sistema Inteligente de Alertas

Uma das principais funcionalidades do ClassTrack é o sistema de alertas preventivos.

Os alertas ajudam a identificar alunos que podem estar em situação de risco acadêmico.

## Alertas de Frequência

Gerados quando há:

* Frequência abaixo de 75%;
* Ausências consecutivas;
* Risco de reprovação por faltas.

## Alertas de Desempenho

Gerados quando há:

* Média abaixo de 5,0;
* Queda significativa de rendimento;
* Risco de recuperação.

## Alertas de Comportamento

Gerados quando há:

* Acúmulo de ocorrências;
* Reincidência disciplinar;
* Ocorrências de nível moderado ou grave.

## Geração Automática de Alertas

O sistema analisa informações como:

* Frequência;
* Média;
* Ocorrências.

Quando necessário, novos alertas são criados para auxiliar o acompanhamento dos alunos.

---

# Dashboard e Indicadores

Os dashboards do ClassTrack foram pensados para facilitar a visualização dos dados mais importantes.

## Indicadores Acadêmicos

* Média geral;
* Frequência;
* Faltas;
* Situação acadêmica;
* Alertas ativos.

## Ranking de Melhores Alunos

Exibe os estudantes com melhor desempenho acadêmico.

## Alunos em Situação Crítica

Identifica estudantes que necessitam de acompanhamento mais próximo.

## Busca Global

Permite localizar rapidamente:

* Alunos;
* Notas;
* Frequências;
* Ocorrências;
* Alertas.

---

# Relatórios e Exportações

O sistema prevê recursos de exportação para facilitar a análise e o compartilhamento de informações acadêmicas.

## Exportação de Notas

Formato CSV contendo:

* Aluno;
* Turma;
* Avaliação;
* Nota;
* Observação.

## Exportação de Frequência

Formato CSV contendo:

* Data;
* Aluno;
* Turma;
* Disciplina;
* Presença.

---

# Banco de Dados

A parte de banco de dados do ClassTrack foi trabalhada utilizando **Docker**.

O Docker permite criar e executar ambientes isolados em containers, facilitando a padronização do ambiente de desenvolvimento entre os integrantes da equipe.

## Uso do Docker no Projeto

No ClassTrack, o Docker é utilizado para apoiar a estruturação do ambiente de banco de dados.

Ele contribui para:

* Padronizar o ambiente;
* Evitar problemas de configuração local;
* Facilitar a execução do banco em diferentes máquinas;
* Organizar a infraestrutura do projeto;
* Preparar o sistema para futuras integrações.

## Observação Importante

Nesta versão, o banco de dados ainda não está integrado ao sistema visual, pois o projeto não possui backend.

A modelagem e o ambiente com Docker servem como base para uma evolução futura, onde o frontend poderá se comunicar com o banco por meio de uma API.

---

# Backend

Atualmente, o ClassTrack **não possui backend**.

Isso significa que ainda não existe uma camada de servidor responsável por:

* Receber requisições do frontend;
* Validar dados no servidor;
* Conectar com o banco de dados;
* Realizar autenticação segura;
* Salvar informações permanentemente;
* Controlar permissões de forma robusta.

## Como o sistema funciona nesta versão

Nesta fase, as funcionalidades são simuladas no frontend utilizando:

* JavaScript;
* LocalStorage;
* Dados estáticos ou simulados;
* Validações no navegador.

Essa abordagem é adequada para prototipagem e apresentação acadêmica, mas não é indicada para uma versão final em produção.

---

# Segurança

## Controle de Sessão

O sistema utiliza LocalStorage para armazenar informações básicas da sessão do usuário autenticado.

## Validação de Perfil

Cada página realiza validações para verificar o tipo de usuário.

Perfis disponíveis:

* Aluno;
* Professor;
* Direção.

Usuários não autorizados podem ser redirecionados automaticamente para a tela correta.

## Proteção de Rotas

Cada dashboard possui validações específicas para impedir acessos indevidos.

## Limitação de Segurança

Como o projeto ainda não possui backend, as validações são feitas no lado do cliente.

Em uma versão real, seria necessário implementar validações no servidor, autenticação segura e proteção adequada dos dados.

---

# Estrutura de Pastas

```txt
Finalproject
│
├── Assets
│
├── Index
│   ├── index.html
│   └── index.css
│
├── Acesso
│   ├── Acesso.html
│   ├── Acesso.css
│   └── Acesso.js
│
├── Aluno
│   ├── Aluno.html
│   ├── Aluno.css
│   └── Aluno.js
│
├── Professor
│   ├── Professor.html
│   ├── Professor.css
│   └── Professor.js
│
├── Direcao
│   ├── Direcao.html
│   ├── Direcao.css
│   └── Direcao.js
│
└── README.md
```

---

# Fluxo de Navegação

O fluxo principal do sistema segue a seguinte lógica:

```txt
Página Inicial
      ↓
Tela de Acesso
      ↓
Escolha do Perfil
      ↓
Login
      ↓
Aluno | Professor | Direção
      ↓
Painel Correspondente
      ↓
Logout
```

## Explicação do Fluxo

1. O usuário acessa a página inicial do ClassTrack;
2. Em seguida, vai para a tela de acesso;
3. Escolhe seu perfil: aluno, professor ou direção;
4. Realiza o login;
5. O sistema valida as informações;
6. O usuário é direcionado para seu respectivo painel;
7. Ao finalizar, pode encerrar a sessão.

---

# Como Executar o Projeto

Como o ClassTrack ainda não possui backend, ele pode ser executado diretamente no navegador.

## Requisitos

* Navegador web;
* Visual Studio Code;
* Git;
* Docker, caso deseje executar o ambiente de banco de dados.

## Executando o Frontend

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto:

```bash
cd Finalproject
```

3. Abra o projeto no Visual Studio Code:

```bash
code .
```

4. Abra o arquivo principal no navegador ou utilize a extensão Live Server.

## Executando o Ambiente de Banco com Docker

Caso a branch de banco de dados possua um arquivo `docker-compose.yml`, o ambiente pode ser iniciado com:

```bash
docker compose up -d
```

Para encerrar os containers:

```bash
docker compose down
```

## Importante

Mesmo com o banco rodando via Docker, o frontend ainda não se comunica diretamente com ele nesta versão.

Para essa comunicação acontecer, será necessário desenvolver um backend futuramente.

---

# Diferenciais do Projeto

* Desenvolvido por estudantes para o contexto escolar;
* Interface moderna e responsiva;
* Sistema separado por perfis;
* Alertas acadêmicos inteligentes;
* Dashboard analítico;
* Controle acadêmico centralizado;
* Gestão de frequência;
* Gestão de notas;
* Gestão de ocorrências;
* Exportação de relatórios;
* Busca global integrada;
* Organização por branches no GitHub;
* Ambiente de banco preparado com Docker.

---

# Limitações da Versão Atual

Apesar de funcional como protótipo, o projeto ainda possui algumas limitações.

## Ausência de Backend

O sistema ainda não possui uma API ou servidor para conectar o frontend ao banco de dados.

## Banco Não Integrado

O banco de dados está sendo trabalhado com Docker, mas ainda não está integrado ao sistema visual.

## Armazenamento Local

O uso de LocalStorage é útil para simulação, mas não substitui um banco de dados real em produção.

## Segurança Limitada

As validações são feitas no frontend, o que não é suficiente para um sistema real.

## Escalabilidade

A versão atual é adequada para apresentação, documentação e estudo, mas ainda precisa evoluir para ser usada em ambiente escolar real.

---

# Melhorias Futuras

## Desenvolvimento de Backend

Criar uma API para conectar o frontend ao banco de dados.

Possíveis tecnologias:

* Node.js;
* Express;
* Java;
* Spring Boot;
* PHP;
* Python.

## Integração Real com Banco de Dados

Com backend, será possível implementar:

* Login real;
* Autenticação segura;
* Cadastro administrativo de usuários;
* Registro permanente de notas;
* Registro permanente de frequência;
* Relatórios completos;
* Histórico acadêmico;
* Controle de permissões.

## Login Institucional

Implementar login utilizando e-mail educacional fornecido pela instituição.

## Aplicativo Mobile

Criar versões futuras para:

* Android;
* iOS.

## Inteligência Artificial

Possíveis recursos futuros:

* Predição de evasão escolar;
* Análise de desempenho;
* Recomendações pedagógicas;
* Identificação de alunos em risco.

## Melhorias Visuais

* Dashboards mais completos;
* Gráficos interativos;
* Notificações visuais;
* Experiência mobile aprimorada;
* Mais acessibilidade.

---

# Equipe de Desenvolvimento

O ClassTrack é um projeto acadêmico desenvolvido pelos alunos da turma **TADS1-S** do **SENAI Santa Rosália**, com o objetivo de modernizar o acompanhamento acadêmico e facilitar a gestão escolar.

## Desenvolvedores

* Júlio César Botaccio
* João Alexandre da Silva Pereira
* Kaiki Santos da Silva

## Instituição

Serviço Nacional de Aprendizagem Industrial – SENAI Santa Rosália

## Turma

TADS1-S

## Ano

2026

Todos os conceitos, modelagem, interface, regras de negócio e desenvolvimento do sistema foram realizados pelos integrantes da equipe, aplicando os conhecimentos adquiridos durante sua formação acadêmica.

---

# Licença

Projeto desenvolvido para fins acadêmicos e educacionais.

O uso deste projeto é destinado a estudos, apresentações e avaliações acadêmicas.
