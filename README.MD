# ClassTrack

O ClassTrack é uma plataforma web desenvolvida para auxiliar o acompanhamento acadêmico de alunos, professores e direção escolar por meio de uma interface moderna, intuitiva e centralizada.

Este repositório está organizado em branches separadas por matéria, facilitando a divisão, o desenvolvimento e a avaliação das entregas relacionadas a cada disciplina do projeto. Dessa forma, cada branch concentra os arquivos, códigos, documentações e implementações específicas de uma determinada área, mantendo o projeto mais organizado e fácil de acompanhar.

O sistema foi criado com o objetivo de facilitar o monitoramento de frequência, notas, ocorrências e indicadores de desempenho escolar, permitindo uma gestão acadêmica mais eficiente, organizada e transparente.

---

# Sumário

* Sobre o Projeto
* Objetivos
* Tecnologias Utilizadas
* Estrutura do Sistema
* Controle de Acesso
* Funcionalidades do Aluno
* Funcionalidades do Professor
* Funcionalidades da Direção
* Sistema de Alertas Inteligentes
* Dashboard e Indicadores
* Relatórios e Exportações
* Segurança
* Estrutura de Pastas
* Fluxo de Navegação
* Diferenciais do Projeto
* Melhorias Futuras
* Equipe de Desenvolvimento

---

# Sobre o Projeto

O ClassTrack surgiu a partir da necessidade de melhorar o acompanhamento do desempenho acadêmico dentro do ambiente escolar.

Muitas vezes os estudantes descobrem problemas relacionados à frequência, rendimento ou comportamento apenas ao final do semestre, quando as possibilidades de recuperação já são limitadas.

Pensando nisso, foi desenvolvido um sistema capaz de centralizar as principais informações acadêmicas e disponibilizá-las em tempo real para alunos, professores e direção escolar.

O projeto busca promover maior transparência, organização e eficiência no acompanhamento da vida acadêmica.

---

# Objetivos

## Objetivo Geral

Desenvolver uma plataforma digital capaz de centralizar e facilitar o acompanhamento acadêmico dos estudantes.

## Objetivos Específicos

* Monitorar frequência escolar.
* Acompanhar desempenho acadêmico.
* Facilitar o trabalho dos professores.
* Disponibilizar indicadores para a direção.
* Gerar alertas preventivos.
* Melhorar a comunicação acadêmica.
* Organizar registros escolares.
* Permitir consultas rápidas e intuitivas.

---

# Tecnologias Utilizadas

## Front-End

* HTML5
* CSS3
* JavaScript (ES6+)

## Recursos Visuais

* SVG Icons
* Flexbox
* CSS Grid
* Glassmorphism
* Aurora Background
* Design Responsivo

## Armazenamento

* LocalStorage

---

# Estrutura do Sistema

O sistema é dividido em quatro módulos principais.

## Página Inicial

Área institucional responsável pela apresentação do projeto.

## Tela de Acesso

Controle de autenticação e seleção de perfil.

## Painel do Aluno

Área destinada à consulta de informações acadêmicas.

## Painel do Professor

Área destinada ao gerenciamento acadêmico das turmas.

## Painel da Direção

Área destinada ao acompanhamento institucional e tomada de decisões.

---

# Controle de Acesso

O sistema possui três níveis distintos de acesso.

## Aluno

Permite a visualização das informações acadêmicas pessoais.

### Permissões

* Consultar notas.
* Consultar frequência.
* Visualizar desempenho.
* Acompanhar indicadores acadêmicos.

---

## Professor

Permite o gerenciamento acadêmico dos alunos vinculados às suas turmas.

### Permissões

* Registrar frequência.
* Realizar chamadas em lote.
* Lançar notas.
* Registrar ocorrências.
* Gerar alertas.
* Exportar relatórios.

---

## Direção

Possui visão completa dos dados institucionais.

### Permissões

* Visualizar indicadores gerais.
* Monitorar desempenho das turmas.
* Consultar relatórios.
* Acompanhar ocorrências.
* Monitorar alertas críticos.

---

# Funcionalidades do Aluno

## Dashboard Acadêmico

O aluno possui acesso a um painel com informações resumidas sobre sua situação escolar.

### Informações Disponíveis

* Média geral.
* Frequência acumulada.
* Quantidade de faltas.
* Situação acadêmica.
* Indicadores de desempenho.

## Consulta de Frequência

Permite acompanhar todas as presenças e ausências registradas.

### Informações

* Data da aula.
* Disciplina.
* Situação (Presente ou Ausente).

## Consulta de Notas

Exibe as avaliações registradas pelos professores.

### Informações

* Disciplina.
* Avaliação.
* Nota obtida.
* Média.

## Indicadores de Desempenho

Apresenta métricas de evolução acadêmica.

---

# Funcionalidades do Professor

## Dashboard do Professor

Painel com visão geral das informações mais importantes.

### Indicadores

* Quantidade de alunos.
* Quantidade de turmas.
* Faltas registradas.
* Alertas ativos.
* Notas lançadas.

## Gestão de Turmas

Permite visualizar as turmas vinculadas ao professor.

### Informações

* Nome da turma.
* Ano letivo.
* Turno.
* Disciplina.
* Quantidade de alunos.

## Gestão de Alunos

Visualização detalhada dos estudantes.

### Dados

* Nome.
* Status.
* Média.
* Quantidade de faltas.

## Controle de Frequência

### Registro Individual

Registro manual de presença ou ausência.

### Chamada em Lote

Permite registrar frequência de toda uma turma simultaneamente.

### Recursos

* Marcar todos presentes.
* Marcar todos ausentes.
* Registro em massa.
* Salvamento rápido.

## Gestão de Notas

### Lançamento de Notas

Permite registrar avaliações acadêmicas.

### Campos

* Aluno.
* Avaliação.
* Nota.
* Observação.

### Regras

* Nota mínima: 0
* Nota máxima: 10

## Gestão de Ocorrências

Registro de situações disciplinares.

### Níveis

* Leve
* Moderado
* Grave

### Campos

* Aluno
* Data
* Nível
* Descrição

---

# Funcionalidades da Direção

## Dashboard Institucional

A direção possui uma visão estratégica dos dados da instituição.

### Indicadores

* Total de alunos.
* Total de turmas.
* Frequência geral.
* Média institucional.
* Alertas ativos.

## Monitoramento Acadêmico

Permite acompanhar:

* Frequência escolar.
* Desempenho acadêmico.
* Ocorrências disciplinares.
* Indicadores de risco.

---

# Sistema Inteligente de Alertas

Uma das principais funcionalidades do ClassTrack.

## Alertas de Frequência

Gerados quando:

* Frequência abaixo de 75%.
* Ausências consecutivas.
* Risco de reprovação por faltas.

## Alertas de Desempenho

Gerados quando:

* Média abaixo de 5,0.
* Queda significativa de rendimento.
* Risco de recuperação.

## Alertas de Comportamento

Gerados quando:

* Acúmulo de ocorrências.
* Reincidência disciplinar.

## Geração Automática de Alertas

O sistema analisa automaticamente:

* Frequência.
* Média.
* Ocorrências.

Quando necessário, novos alertas são criados automaticamente para auxiliar o acompanhamento dos alunos.

---

# Dashboard e Indicadores

## Ranking de Melhores Alunos

Exibe os estudantes com melhor desempenho acadêmico.

## Alunos em Situação Crítica

Identifica estudantes que necessitam acompanhamento.

## Busca Global

Permite localizar rapidamente:

* Alunos.
* Notas.
* Frequências.
* Ocorrências.
* Alertas.

---

# Relatórios e Exportações

## Exportação de Notas

Formato CSV contendo:

* Aluno
* Turma
* Avaliação
* Nota
* Observação

## Exportação de Frequência

Formato CSV contendo:

* Data
* Aluno
* Turma
* Disciplina
* Presença

---

# Segurança

## Controle de Sessão

O sistema utiliza LocalStorage para armazenar as informações da sessão do usuário autenticado.

## Validação de Perfil

Cada página realiza validação automática do tipo de usuário.

Perfis disponíveis:

* Aluno
* Professor
* Direção

Usuários não autorizados são redirecionados automaticamente.

## Proteção de Rotas

Cada dashboard possui validações específicas para impedir acessos indevidos.

---

# Estrutura de Pastas

Finalproject

├── Assets

├── Index

│ ├── index.html

│ └── index.css

├── Acesso

│ ├── Acesso.html

│ ├── Acesso.css

│ └── Acesso.js

├── Aluno

│ ├── Aluno.html

│ ├── Aluno.css

│ └── Aluno.js

├── Professor

│ ├── Professor.html

│ ├── Professor.css

│ └── Professor.js

├── Direcao

│ ├── Direcao.html

│ ├── Direcao.css

│ └── Direcao.js

└── README.md

---

# Fluxo de Navegação

Index

↓

Acesso

↓

Aluno | Professor | Direção

---

# Diferenciais do Projeto

* Desenvolvido por estudantes para estudantes.
* Interface moderna e responsiva.
* Sistema de alertas inteligentes.
* Dashboard analítico.
* Controle acadêmico centralizado.
* Gestão de frequência.
* Gestão de notas.
* Gestão de ocorrências.
* Exportação de relatórios.
* Busca global integrada.

---

# Melhorias Futuras

## Banco de Dados

Integração com:

* PostgreSQL
* MySQL

## Integração Institucional

* Login por e-mail institucional.
* Integração com sistemas acadêmicos.

## Aplicativo Mobile

* Android
* iOS

## Inteligência Artificial

* Predição de evasão escolar.
* Análise de desempenho.
* Recomendações pedagógicas.

---

# Equipe de Desenvolvimento

O ClassTrack é um projeto acadêmico desenvolvido pelos alunos da turma TADS1-S do SENAI Santa Rosália, com o objetivo de modernizar o acompanhamento acadêmico e facilitar a gestão escolar.

## Desenvolvedores

* Júlio Botássio
* Kaiki Santos da Silva
* João Alexandre da Silva Pereira

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
