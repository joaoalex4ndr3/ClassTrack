
```markdown
# ClassTrack - Banco de Dados

[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-blue.svg)](https://www.postgresql.org/)
[![Version](https://img.shields.io/badge/Version-1.0-green.svg)]()
[![Status](https://img.shields.io/badge/Status-Production-brightgreen.svg)]()

##  Sobre o Banco

Banco de dados do sistema **ClassTrack** - Gestão Acadêmica.

| Propriedade | Valor |
|-------------|-------|
| **Nome do Banco** | `classtrack` |
| **SGBD** | PostgreSQL 12+ |
| **Schema** | public |
| **Versão** | 1.0 |

---

##  Estrutura do Banco

### Tabelas (13 tabelas)

| # | Tabela | Descrição |
|---|--------|-----------|
| 1 | `Turmas` | Turmas escolares |
| 2 | `Alunos` | Cadastro de estudantes |
| 3 | `Responsaveis` | Responsáveis legais |
| 4 | `Aluno_Responsavel` | Relação N:N alunos ↔ responsáveis |
| 5 | `Professores` | Cadastro de professores |
| 6 | `Disciplinas` | Disciplinas oferecidas |
| 7 | `Professor_Disciplinas` | Relação professores ↔ disciplinas ↔ turmas |
| 8 | `Avaliacoes` | Avaliações por disciplina |
| 9 | `Notas` | Notas dos alunos |
| 10 | `Frequencias` | Controle de presença |
| 11 | `Comportamentos` | Ocorrências comportamentais |
| 12 | `Alertas` | Alertas de risco |
| 13 | `Direcao` | Usuários administrativos |

### Diagrama de Relacionamento (Resumo)

```
Turmas (1) ──< (N) Alunos
Turmas (1) ──< (N) Professor_Disciplinas
Alunos (1) ──< (N) Notas
Alunos (1) ──< (N) Frequencias
Alunos (1) ──< (N) Comportamentos
Alunos (1) ──< (N) Alertas
Alunos (N) ──< (N) Responsaveis (via Aluno_Responsavel)
Disciplinas (1) ──< (N) Notas
Disciplinas (1) ──< (N) Avaliacoes
```

---

##  Perfis de Acesso

| Perfil | Tabela | Autenticação | Senha Padrão |
|--------|--------|--------------|--------------|
|  Aluno | `Alunos` | CPF + Senha | `123456` |
|  Professor | `Professores` | Email + Senha | `123456` |
|  Direção | `Direcao` | CPF + Senha | `123456` |

---

## 🔧 Instalação

### 1. Criar o Banco

```sql
CREATE DATABASE classtrack;
```

### 2. Executar o Script

```bash
# Via psql
psql -U postgres -d classtrack -f database/schema.sql

# Via psql (conectado)
\i database/schema.sql
```

### 3. Verificar Instalação

```sql
\dt                          -- Listar tabelas
SELECT COUNT(*) FROM Turmas; -- Verificar dados
```

---

##  Dicionário Rápido

### Turmas
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Id_turma | SERIAL | PK |
| Nome_turma | VARCHAR(100) | Nome da turma |
| Ano_letivo | INTEGER | Ano letivo |
| Turno | VARCHAR(20) | Matutino/Vespertino/Noturno |

### Alunos
| Campo | Tipo | Restrição |
|-------|------|-----------|
| Id_aluno | SERIAL | PK |
| Nome | VARCHAR(150) | NOT NULL |
| Cpf | VARCHAR(14) | UNIQUE NOT NULL |
| Status | VARCHAR(20) | CHECK (Ativo, Inativo, Trancado, Transferido) |
| Id_turma | INTEGER | FK → Turmas |
| Senha | VARCHAR(255) | NOT NULL |

### Professores
| Campo | Tipo | Restrição |
|-------|------|-----------|
| Id_professor | SERIAL | PK |
| Nome | VARCHAR(150) | NOT NULL |
| Email | VARCHAR(150) | UNIQUE NOT NULL |
| Senha | VARCHAR(255) | NOT NULL |

### Notas
| Campo | Tipo | Restrição |
|-------|------|-----------|
| Id_nota | SERIAL | PK |
| Valor_nota | NUMERIC(5,2) | NOT NULL |
| Id_aluno | INTEGER | FK → Alunos |
| Id_avaliacao | INTEGER | FK → Avaliacoes |
| Id_disciplina | INTEGER | FK → Disciplinas |

---

## 🔗 Chaves Estrangeiras (Resumo)

| Tabela | FK | Referência |
|--------|----|------------|
| Alunos | Id_turma | Turmas(Id_turma) |
| Notas | Id_aluno | Alunos(Id_aluno) |
| Notas | Id_avaliacao | Avaliacoes(Id_avaliacao) |
| Notas | Id_disciplina | Disciplinas(Id_disciplina) |
| Frequencias | Id_aluno | Alunos(Id_aluno) |
| Frequencias | Id_disciplina | Disciplinas(Id_disciplina) |
| Comportamentos | Id_aluno | Alunos(Id_aluno) |
| Comportamentos | Id_professor | Professores(Id_professor) |
| Alertas | Id_aluno | Alunos(Id_aluno) |

---

##  Consultas Úteis

### Login dos Perfis

```sql
-- Aluno
SELECT * FROM Alunos WHERE Cpf = '123.456.789-00' AND Senha = '123456';

-- Professor
SELECT * FROM Professores WHERE Email = 'professor@email.com' AND Senha = '123456';

-- Direção
SELECT * FROM Direcao WHERE Cpf = '000.000.000-00' AND Senha = '123456';
```

### Relatórios

```sql
-- Boletim do aluno
SELECT d.Nome_disciplina, n.Valor_nota
FROM Notas n
JOIN Disciplinas d ON n.Id_disciplina = d.Id_disciplina
WHERE n.Id_aluno = 1;

-- Frequência do aluno
SELECT 
    SUM(CASE WHEN Presenca = TRUE THEN 1 ELSE 0 END) as Presencas,
    COUNT(*) as Total_Aulas,
    ROUND(100.0 * SUM(CASE WHEN Presenca = TRUE THEN 1 ELSE 0 END) / COUNT(*), 2) as Percentual
FROM Frequencias
WHERE Id_aluno = 1;

-- Alertas por nível de risco
SELECT Nivel_risco, COUNT(*) as Total
FROM Alertas
GROUP BY Nivel_risco;
```

---

##  Manutenção

### Backup

```bash
# Backup completo
pg_dump -U postgres -d classtrack > backup_$(date +%Y%m%d).sql

# Backup apenas estrutura
pg_dump -U postgres -s -d classtrack > estrutura.sql

# Backup apenas dados
pg_dump -U postgres -a -d classtrack > dados.sql
```

### Restauração

```bash
psql -U postgres -d classtrack < backup_20241201.sql
```

### Índices Recomendados

```sql
-- Login
CREATE INDEX idx_alunos_login ON Alunos(Cpf, Senha);
CREATE INDEX idx_professores_login ON Professores(Email, Senha);

-- Consultas
CREATE INDEX idx_notas_aluno ON Notas(Id_aluno, Id_disciplina);
CREATE INDEX idx_frequencias_data ON Frequencias(Data_frequencia);
```

---

##  Validações

### Constraints CHECK

```sql
-- Status do Aluno
ALTER TABLE Alunos ADD CONSTRAINT chk_status 
CHECK (Status IN ('Ativo', 'Inativo', 'Trancado', 'Transferido'));
```

### Chaves Únicas

| Tabela | Campo |
|--------|-------|
| Alunos | Cpf |
| Responsaveis | Cpf |
| Professores | Email |
| Direcao | Cpf |

### Valores Padrão

| Tabela | Campo | Padrão |
|--------|-------|--------|
| Alunos | Status | 'Ativo' |
| Alunos | Senha | '123456' |
| Professores | Senha | '123456' |
| Frequencias | Presenca | TRUE |
| Comportamentos | Data_registro | CURRENT_DATE |
| Alertas | Data_alerta | CURRENT_DATE |

---

##  Dados de Teste (Seed)

```sql
-- Direção
INSERT INTO Direcao (Nome, Cpf, Email, Senha) 
VALUES ('Administrador', '000.000.000-00', 'admin@classtrack.com', '123456');

-- Professor
INSERT INTO Professores (Nome, Email, Senha) 
VALUES ('Professor Teste', 'professor@classtrack.com', '123456');

-- Aluno
INSERT INTO Alunos (Nome, Data_nascimento, Cpf, Email, Status, Id_turma, Senha) 
VALUES ('Aluno Teste', '2010-01-01', '123.456.789-00', 'aluno@classtrack.com', 'Ativo', 1, '123456');
```

**Banco de Dados - ClassTrack v1.0**
```
