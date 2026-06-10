// =====================================================
//  ClassTrack — Visão da Direção
//  Painel administrativo completo
// =====================================================

const DIRECAO_LOGADO = window.direcaoLogado || { id: 10, nome: 'Administrador', role: 'Direção' };

// ── DATABASE ──────────────────────────────────────────
const DB = {
  professores: [
    { id: 1, nome: 'Carlos Eduardo Mendes',  email: 'carlos.mendes@ads.edu.br',   tel: '(11) 98234-5671', esp: 'Algoritmos e Lógica' },
    { id: 2, nome: 'Ana Paula Rodrigues',     email: 'ana.rodrigues@ads.edu.br',   tel: '(11) 97123-4560', esp: 'Banco de Dados' },
    { id: 3, nome: 'Roberto Lima Ferreira',   email: 'roberto.lima@ads.edu.br',    tel: '(11) 96321-0987', esp: 'Programação Orientada a Objetos' },
    { id: 4, nome: 'Fernanda Costa Vieira',   email: 'fernanda.costa@ads.edu.br',  tel: '(11) 95555-6677', esp: 'Engenharia de Software' },
    { id: 5, nome: 'Marcelo Santos Duarte',   email: 'marcelo.santos@ads.edu.br',  tel: '(11) 94444-3322', esp: 'Redes de Computadores' },
  ],

  turmas: [
    { id: 1, nome: 'ADS - 1º Semestre A', ano: 2024, turno: 'Matutino' },
    { id: 2, nome: 'ADS - 1º Semestre B', ano: 2024, turno: 'Noturno' },
    { id: 3, nome: 'ADS - 2º Semestre A', ano: 2024, turno: 'Matutino' },
    { id: 4, nome: 'ADS - 2º Semestre B', ano: 2024, turno: 'Noturno' },
    { id: 5, nome: 'ADS - 3º Semestre A', ano: 2024, turno: 'Matutino' },
    { id: 6, nome: 'ADS - 3º Semestre B', ano: 2024, turno: 'Noturno' },
  ],

  disciplinas: [
    { id: 1, nome: 'Algoritmos e Lógica de Programação', ch: 80 },
    { id: 2, nome: 'Banco de Dados', ch: 80 },
    { id: 3, nome: 'Programação Orientada a Objetos', ch: 80 },
    { id: 4, nome: 'Engenharia de Software', ch: 60 },
    { id: 5, nome: 'Redes de Computadores', ch: 60 },
    { id: 6, nome: 'Desenvolvimento Web', ch: 80 },
  ],

  profDisciplinas: [
    { prof: 1, disc: 1, turma: 1 }, { prof: 1, disc: 1, turma: 2 },
    { prof: 1, disc: 1, turma: 3 }, { prof: 1, disc: 1, turma: 4 },
    { prof: 2, disc: 2, turma: 1 }, { prof: 2, disc: 2, turma: 3 },
    { prof: 3, disc: 3, turma: 2 }, { prof: 3, disc: 3, turma: 4 },
    { prof: 4, disc: 4, turma: 5 }, { prof: 4, disc: 4, turma: 6 },
    { prof: 5, disc: 5, turma: 5 }, { prof: 5, disc: 5, turma: 6 },
  ],

  alunos: [
    { id: 1,  nome: 'Gabriel Henrique Souza',    status: 'Ativo',      turma: 1, email: 'gabriel.souza@aluno.edu.br',    tel: '(11) 91234-5678', nasc: '2003-05-12', cpf: '111.222.333-44' },
    { id: 2,  nome: 'Larissa Beatriz Mendes',    status: 'Ativo',      turma: 1, email: 'larissa.mendes@aluno.edu.br',   tel: '(11) 92345-6789', nasc: '2004-02-20', cpf: '222.333.444-55' },
    { id: 3,  nome: 'Lucas Vinícius Almeida',    status: 'Ativo',      turma: 1, email: 'lucas.almeida@aluno.edu.br',    tel: '(11) 93456-7890', nasc: '2003-11-08', cpf: '333.444.555-66' },
    { id: 19, nome: 'Eduardo Campos Dias',        status: 'Ativo',      turma: 1, email: 'eduardo.dias@aluno.edu.br',     tel: '(11) 94567-8901', nasc: '2004-07-15', cpf: '444.555.666-77' },
    { id: 25, nome: 'Patrick Nunes Monteiro',     status: 'Trancado',   turma: 1, email: 'patrick.monteiro@aluno.edu.br', tel: '(11) 95678-9012', nasc: '2002-09-30', cpf: '555.666.777-88' },
    { id: 4,  nome: 'Isabela Cristina Rocha',     status: 'Ativo',      turma: 2, email: 'isabela.rocha@aluno.edu.br',    tel: '(11) 96789-0123', nasc: '2003-03-22', cpf: '666.777.888-99' },
    { id: 5,  nome: 'Rafael Torres Carvalho',     status: 'Ativo',      turma: 2, email: 'rafael.carvalho@aluno.edu.br',  tel: '(11) 97890-1234', nasc: '2003-08-17', cpf: '777.888.999-00' },
    { id: 6,  nome: 'Camila Fernanda Lopes',      status: 'Ativo',      turma: 2, email: 'camila.lopes@aluno.edu.br',     tel: '(11) 98901-2345', nasc: '2004-01-05', cpf: '888.999.000-11' },
    { id: 20, nome: 'Letícia Pereira Gonçalves',  status: 'Ativo',      turma: 2, email: 'leticia.goncalves@aluno.edu.br',tel: '(11) 90012-3456', nasc: '2003-06-28', cpf: '999.000.111-22' },
    { id: 7,  nome: 'Thiago Augusto Ferreira',    status: 'Ativo',      turma: 3, email: 'thiago.ferreira@aluno.edu.br',  tel: '(11) 91122-3344', nasc: '2003-12-14', cpf: '100.200.300-40' },
    { id: 8,  nome: 'Mariana Oliveira Costa',     status: 'Ativo',      turma: 3, email: 'mariana.costa@aluno.edu.br',    tel: '(11) 92233-4455', nasc: '2004-04-19', cpf: '200.300.400-50' },
    { id: 9,  nome: 'Felipe Andrade Barbosa',     status: 'Ativo',      turma: 3, email: 'felipe.barbosa@aluno.edu.br',   tel: '(11) 93344-5566', nasc: '2003-10-03', cpf: '300.400.500-60' },
    { id: 21, nome: 'Mateus Rodrigues Silva',     status: 'Ativo',      turma: 3, email: 'mateus.silva@aluno.edu.br',     tel: '(11) 94455-6677', nasc: '2004-08-25', cpf: '400.500.600-70' },
    { id: 10, nome: 'Natália Regina Lima',        status: 'Ativo',      turma: 4, email: 'natalia.lima@aluno.edu.br',     tel: '(11) 95566-7788', nasc: '2003-02-11', cpf: '500.600.700-80' },
    { id: 11, nome: 'Bruno César Gomes',          status: 'Ativo',      turma: 4, email: 'bruno.gomes@aluno.edu.br',      tel: '(11) 96677-8899', nasc: '2003-07-04', cpf: '600.700.800-90' },
    { id: 12, nome: 'Amanda Vitória Pinto',       status: 'Ativo',      turma: 4, email: 'amanda.pinto@aluno.edu.br',     tel: '(11) 97788-9900', nasc: '2004-11-22', cpf: '700.800.900-01' },
    { id: 22, nome: 'Vanessa Alves Cardoso',      status: 'Inativo',    turma: 4, email: 'vanessa.cardoso@aluno.edu.br',  tel: '(11) 98899-0011', nasc: '2003-09-16', cpf: '800.900.001-12' },
    { id: 13, nome: 'Diego Martins Ramos',        status: 'Ativo',      turma: 5, email: 'diego.ramos@aluno.edu.br',      tel: '(11) 99900-1122', nasc: '2002-06-08', cpf: '900.001.002-23' },
    { id: 14, nome: 'Carolina Farias Teles',      status: 'Ativo',      turma: 5, email: 'carolina.teles@aluno.edu.br',   tel: '(11) 90011-2233', nasc: '2002-03-27', cpf: '001.002.003-34' },
    { id: 15, nome: 'Pedro Henrique Assis',       status: 'Ativo',      turma: 6, email: 'pedro.assis@aluno.edu.br',      tel: '(11) 91122-3344', nasc: '2002-12-01', cpf: '002.003.004-45' },
    { id: 16, nome: 'Juliana Borges Machado',     status: 'Transferido',turma: 6, email: 'juliana.machado@aluno.edu.br',  tel: '(11) 92233-4455', nasc: '2003-04-13', cpf: '003.004.005-56' },
  ],

  notas: [
    { id: 1,  valor: 7.5, obs: null,                           aluno: 1,  aval: 1 },
    { id: 2,  valor: 6.0, obs: 'Abaixo da média',              aluno: 2,  aval: 1 },
    { id: 3,  valor: 8.0, obs: null,                           aluno: 3,  aval: 1 },
    { id: 4,  valor: 9.5, obs: null,                           aluno: 4,  aval: 1 },
    { id: 5,  valor: 4.5, obs: 'Dificuldade em lógica',        aluno: 5,  aval: 1 },
    { id: 6,  valor: 8.5, obs: null,                           aluno: 6,  aval: 1 },
    { id: 7,  valor: 7.0, obs: null,                           aluno: 7,  aval: 1 },
    { id: 8,  valor: 8.0, obs: null,                           aluno: 8,  aval: 1 },
    { id: 9,  valor: 5.5, obs: 'Dificuldade em lógica',        aluno: 9,  aval: 1 },
    { id: 10, valor: 9.0, obs: null,                           aluno: 10, aval: 1 },
    { id: 11, valor: 6.0, obs: null,                           aluno: 11, aval: 1 },
    { id: 12, valor: 7.5, obs: null,                           aluno: 12, aval: 1 },
    { id: 13, valor: 8.8, obs: null,                           aluno: 19, aval: 1 },
    { id: 14, valor: 3.5, obs: 'Entregou trabalho incompleto', aluno: 20, aval: 1 },
    { id: 15, valor: 9.5, obs: null,                           aluno: 21, aval: 1 },
    { id: 16, valor: 7.2, obs: null,                           aluno: 13, aval: 1 },
    { id: 17, valor: 8.9, obs: null,                           aluno: 14, aval: 1 },
    { id: 18, valor: 6.5, obs: null,                           aluno: 15, aval: 1 },
    // Avaliação 2
    { id: 19, valor: 8.0, obs: null, aluno: 1,  aval: 2 },
    { id: 20, valor: 7.0, obs: null, aluno: 2,  aval: 2 },
    { id: 21, valor: 6.5, obs: null, aluno: 3,  aval: 2 },
    { id: 22, valor: 9.0, obs: null, aluno: 4,  aval: 2 },
    { id: 23, valor: 5.0, obs: null, aluno: 5,  aval: 2 },
  ],

  frequencias: [
    { id: 1,  data: '2024-03-04', pres: true,  aluno: 1,  disc: 1 },
    { id: 2,  data: '2024-03-04', pres: true,  aluno: 2,  disc: 1 },
    { id: 3,  data: '2024-03-04', pres: false, aluno: 3,  disc: 1 },
    { id: 4,  data: '2024-03-04', pres: true,  aluno: 4,  disc: 1 },
    { id: 5,  data: '2024-03-04', pres: true,  aluno: 5,  disc: 1 },
    { id: 6,  data: '2024-03-11', pres: true,  aluno: 1,  disc: 1 },
    { id: 7,  data: '2024-03-11', pres: false, aluno: 2,  disc: 1 },
    { id: 8,  data: '2024-03-11', pres: true,  aluno: 3,  disc: 1 },
    { id: 9,  data: '2024-03-11', pres: true,  aluno: 6,  disc: 1 },
    { id: 10, data: '2024-03-11', pres: false, aluno: 7,  disc: 1 },
    { id: 11, data: '2024-03-18', pres: true,  aluno: 1,  disc: 1 },
    { id: 12, data: '2024-03-18', pres: true,  aluno: 8,  disc: 1 },
    { id: 13, data: '2024-03-18', pres: false, aluno: 9,  disc: 1 },
    { id: 14, data: '2024-03-18', pres: true,  aluno: 10, disc: 1 },
    { id: 15, data: '2024-03-18', pres: true,  aluno: 11, disc: 1 },
    { id: 16, data: '2024-03-25', pres: false, aluno: 1,  disc: 1 },
    { id: 17, data: '2024-03-25', pres: true,  aluno: 12, disc: 1 },
    { id: 18, data: '2024-03-25', pres: true,  aluno: 19, disc: 1 },
    { id: 19, data: '2024-03-25', pres: false, aluno: 20, disc: 1 },
    { id: 20, data: '2024-03-25', pres: true,  aluno: 21, disc: 1 },
    { id: 21, data: '2024-04-01', pres: true,  aluno: 13, disc: 4 },
    { id: 22, data: '2024-04-01', pres: false, aluno: 14, disc: 4 },
    { id: 23, data: '2024-04-01', pres: true,  aluno: 15, disc: 5 },
  ],

  comportamentos: [
    { id: 1, data: '2024-03-06', desc: 'Uso de celular durante a aula sem autorização.',            nivel: 'Leve',     aluno: 3,  prof: 1 },
    { id: 2, data: '2024-03-13', desc: 'Não entregou atividade pelo terceiro período consecutivo.', nivel: 'Moderado', aluno: 9,  prof: 1 },
    { id: 3, data: '2024-04-11', desc: 'Chegou atrasado pela quinta vez no mês.',                   nivel: 'Leve',     aluno: 4,  prof: 2 },
    { id: 4, data: '2024-04-18', desc: 'Confronto verbal com colega durante atividade em grupo.',   nivel: 'Grave',    aluno: 5,  prof: 3 },
    { id: 5, data: '2024-04-22', desc: 'Saiu da sala sem autorização.',                             nivel: 'Leve',     aluno: 7,  prof: 1 },
  ],

  alertas: [
    { id: 1, tipo: 'Frequência',    desc: 'Aluno com mais de 25% de faltas em Algoritmos.',          risco: 'Alto',  data: '2024-04-10', aluno: 3  },
    { id: 2, tipo: 'Frequência',    desc: 'Frequência abaixo do mínimo em Banco de Dados.',          risco: 'Alto',  data: '2024-04-10', aluno: 6  },
    { id: 3, tipo: 'Nota',          desc: 'Nota abaixo de 5.0 em Algoritmos — risco de reprovação.', risco: 'Alto',  data: '2024-04-05', aluno: 5  },
    { id: 4, tipo: 'Nota',          desc: 'Desempenho abaixo da média em Algoritmos.',               risco: 'Médio', data: '2024-04-08', aluno: 9  },
    { id: 5, tipo: 'Comportamento', desc: 'Terceira ocorrência de comportamento no semestre.',       risco: 'Médio', data: '2024-04-18', aluno: 3  },
    { id: 6, tipo: 'Nota',          desc: 'Média parcial abaixo de 6.0 — monitoramento recomendado.',risco: 'Baixo', data: '2024-04-28', aluno: 2  },
    { id: 7, tipo: 'Frequência',    desc: 'Aluno ausente nas últimas 3 aulas.',                      risco: 'Médio', data: '2024-04-15', aluno: 20 },
  ],

  _next: { alunos: 100, professores: 10, notas: 30, frequencias: 30, comportamentos: 10 }
};

let modoAluno = 'novo';
let modoProf  = 'novo';

// ── HELPERS ──────────────────────────────────────────
function nid(t) { return DB._next[t]++; }

function nomeAluno(id) {
  const a = DB.alunos.find(x => x.id == id);
  return a ? a.nome : '—';
}
function nomeTurma(id) {
  const t = DB.turmas.find(x => x.id == id);
  return t ? t.nome : '—';
}
function nomeDisc(id) {
  const d = DB.disciplinas.find(x => x.id == id);
  return d ? d.nome : '—';
}
function nomeProf(id) {
  const p = DB.professores.find(x => x.id == id);
  return p ? p.nome : '—';
}
function turmaDoAluno(id) {
  const a = DB.alunos.find(x => x.id == id);
  return a ? a.turma : null;
}
function turnoTurma(id) {
  const t = DB.turmas.find(x => x.id == id);
  return t ? t.turno : '—';
}

function statusChip(s) {
  const m = { Ativo: 'chip-green', Inativo: 'chip-red', Trancado: 'chip-yellow', Transferido: 'chip-grey' };
  return `<span class="chip ${m[s] || 'chip-grey'}">${s}</span>`;
}
function riskChip(r) {
  const m = { Alto: 'chip-red', Médio: 'chip-yellow', Baixo: 'chip-green' };
  return `<span class="chip ${m[r] || 'chip-grey'}">${r}</span>`;
}
function nivelChip(n) {
  const m = { Leve: 'chip-blue', Moderado: 'chip-yellow', Grave: 'chip-red' };
  return `<span class="chip ${m[n] || 'chip-grey'}">${n}</span>`;
}
function notaClass(v) {
  return v >= 7 ? 'nota-alta' : v >= 5 ? 'nota-media' : 'nota-baixa';
}
function situacaoNota(v) {
  if (v >= 7) return '<span class="chip chip-green">Aprovado</span>';
  if (v >= 5) return '<span class="chip chip-yellow">Recuperação</span>';
  return '<span class="chip chip-red">Reprovado</span>';
}

function mediaAluno(id) {
  const ns = DB.notas.filter(n => n.aluno === id).map(n => n.valor);
  if (!ns.length) return 0;
  return ns.reduce((s, v) => s + v, 0) / ns.length;
}
function freqAluno(id) {
  const regs = DB.frequencias.filter(f => f.aluno === id);
  if (!regs.length) return 100;
  return (regs.filter(f => f.pres).length / regs.length) * 100;
}
function faltasAluno(id) {
  return DB.frequencias.filter(f => f.aluno === id && !f.pres).length;
}

function toast(msg, type = '') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'show ' + type;
  setTimeout(() => t.className = '', 3000);
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// Close modal on background click
document.querySelectorAll('.modal-bg').forEach(bg => {
  bg.addEventListener('click', e => {
    if (e.target === bg) bg.classList.remove('open');
  });
});

let _delCb = null;
function confirmDel(cb) { _delCb = cb; openModal('modal-confirm'); }

document.getElementById('btn-confirm-del').onclick = () => {
  if (_delCb) { _delCb(); _delCb = null; }
  closeModal('modal-confirm');
  toast('Registro excluído com sucesso.', 'error');
  renderAll();
};

// ── MOBILE SIDEBAR ───────────────────────────────────
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('visible');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('visible');
}

// ── NAVIGATION ───────────────────────────────────────
const pageTitles = {
  dashboard: 'Painel Geral', alunos: 'Alunos',
  professores: 'Professores', turmas: 'Turmas',
  frequencias: 'Frequências', notas: 'Notas',
  ocorrencias: 'Ocorrências', alertas: 'Alertas',
  relatorios: 'Relatórios'
};

function go(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#sidebar nav a').forEach(a => a.classList.remove('active'));
  const pg = document.getElementById('page-' + page);
  if (pg) pg.classList.add('active');
  document.querySelectorAll('#sidebar nav a').forEach(a => {
    if (a.getAttribute('onclick') && a.getAttribute('onclick').includes("'" + page + "'"))
      a.classList.add('active');
  });
  document.getElementById('page-title').textContent = pageTitles[page] || page;
  closeSidebar();
  if (page === 'dashboard') renderDash();
  if (page === 'relatorios') renderRelatorios();
}

// ── POPULATE SELECTS ─────────────────────────────────
function populateSelects() {
  const turmaOpts = DB.turmas.map(t => `<option value="${t.id}">${t.nome}</option>`).join('');
  const allOpt = '<option value="">Todas as turmas</option>';

  ['filtro-turma-aluno','filtro-turma-freq','filtro-turma-nota',
   'filtro-turma-oco','filtro-turma-alerta'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = allOpt + turmaOpts;
  });

  const aTurma = document.getElementById('a-turma');
  if (aTurma) aTurma.innerHTML = turmaOpts;

  updateAlertaCount();
}

// ── RENDER DASHBOARD ─────────────────────────────────
function renderDash() {
  const totalAlunos    = DB.alunos.length;
  const ativos         = DB.alunos.filter(a => a.status === 'Ativo').length;
  const totalProfs     = DB.professores.length;
  const alertasAltos   = DB.alertas.filter(a => a.risco === 'Alto').length;
  const totalFaltas    = DB.frequencias.filter(f => !f.pres).length;
  const alunosCriticos = DB.alunos.filter(a => mediaAluno(a.id) < 6 || freqAluno(a.id) < 75).length;

  document.getElementById('dash-stats').innerHTML = `
    <div class="stat-card">
      <div class="num">${totalAlunos}</div>
      <div class="lbl">Total de Alunos</div>
      <div class="sub">${ativos} ativos</div>
    </div>
    <div class="stat-card purple">
      <div class="num">${totalProfs}</div>
      <div class="lbl">Professores</div>
    </div>
    <div class="stat-card">
      <div class="num">${DB.turmas.length}</div>
      <div class="lbl">Turmas Ativas</div>
    </div>
    <div class="stat-card yellow">
      <div class="num">${totalFaltas}</div>
      <div class="lbl">Faltas Registradas</div>
    </div>
    <div class="stat-card red">
      <div class="num">${alertasAltos}</div>
      <div class="lbl">Alertas Alto Risco</div>
    </div>
    <div class="stat-card green">
      <div class="num">${alunosCriticos}</div>
      <div class="lbl">Alunos em Risco</div>
    </div>
  `;

  // Desempenho geral
  const todasNotas = DB.alunos.map(a => mediaAluno(a.id)).filter(m => m > 0);
  const mediaGeral = todasNotas.length
    ? (todasNotas.reduce((s, v) => s + v, 0) / todasNotas.length).toFixed(1)
    : '—';
  const pctFreq = (() => {
    const t = DB.frequencias.length;
    if (!t) return 100;
    return ((DB.frequencias.filter(f => f.pres).length / t) * 100).toFixed(0);
  })();
  const pctAprovados = (() => {
    const c = DB.alunos.filter(a => {
      const m = mediaAluno(a.id);
      return m > 0 && m >= 7;
    }).length;
    const total = DB.alunos.filter(a => mediaAluno(a.id) > 0).length;
    return total ? ((c / total) * 100).toFixed(0) : 0;
  })();

  const freqColor = pctFreq >= 85 ? 'green' : pctFreq >= 70 ? 'yellow' : 'red';
  const aprvColor = pctAprovados >= 70 ? 'green' : pctAprovados >= 50 ? 'yellow' : 'red';

  document.getElementById('dash-desempenho').innerHTML = `
    <div class="ranking-item">
      <div><div class="ranking-name">Média Geral da Escola</div><div class="ranking-meta">Todas as turmas e avaliações</div></div>
      <div class="ranking-score ${mediaGeral >= 7 ? 'nota-alta' : mediaGeral >= 5 ? 'nota-media' : 'nota-baixa'}">${mediaGeral}</div>
    </div>
    <div class="ranking-item">
      <div>
        <div class="ranking-name">Frequência Geral</div>
        <div class="ranking-meta">${pctFreq}% de presença registrada</div>
        <div class="progress-bar-wrap"><div class="progress-bar ${freqColor}" style="width:${pctFreq}%"></div></div>
      </div>
    </div>
    <div class="ranking-item">
      <div>
        <div class="ranking-name">Taxa de Aprovação</div>
        <div class="ranking-meta">${pctAprovados}% dos alunos com nota ≥ 7.0</div>
        <div class="progress-bar-wrap"><div class="progress-bar ${aprvColor}" style="width:${pctAprovados}%"></div></div>
      </div>
    </div>
    <div class="ranking-item">
      <div><div class="ranking-name">Ocorrências no Período</div><div class="ranking-meta">${DB.comportamentos.length} ocorrências registradas</div></div>
      <div class="ranking-score nota-baixa">${DB.comportamentos.length}</div>
    </div>
  `;

  // Alertas recentes
  const recAlertas = [...DB.alertas].sort((a, b) => b.data.localeCompare(a.data)).slice(0, 5);
  document.getElementById('dash-alertas').innerHTML = recAlertas.map(a => {
    const cl = a.risco === 'Alto' ? 'high' : a.risco === 'Médio' ? 'med' : 'low';
    return `<div class="alert-item">
      <div class="alert-icon ${cl}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      </div>
      <div>
        <div class="alert-title">${nomeAluno(a.aluno)}</div>
        <div class="alert-meta">${a.tipo} · ${riskChip(a.risco)} · ${a.data}</div>
        <div class="alert-desc">${a.desc}</div>
      </div>
    </div>`;
  }).join('') || '<div class="empty">Nenhum alerta</div>';

  // Alunos críticos
  const criticos = [...DB.alunos]
    .map(a => ({ ...a, media: mediaAluno(a.id), freq: freqAluno(a.id) }))
    .filter(a => a.media < 6 || a.freq < 75)
    .sort((a, b) => a.media - b.media)
    .slice(0, 6);

  document.getElementById('dash-criticos').innerHTML = criticos.map(a => `
    <div class="ranking-item">
      <div>
        <div class="ranking-name">${a.nome}</div>
        <div class="ranking-meta">${nomeTurma(a.turma)} · Média ${a.media.toFixed(1)} · Freq. ${a.freq.toFixed(0)}%</div>
      </div>
      <div>${a.media < 5 ? '<span class="chip chip-red">Crítico</span>' : '<span class="chip chip-yellow">Atenção</span>'}</div>
    </div>
  `).join('') || '<div class="empty">Nenhum aluno em risco</div>';

  // Últimas ocorrências
  const recOco = [...DB.comportamentos].sort((a, b) => b.data.localeCompare(a.data)).slice(0, 5);
  document.getElementById('dash-ocorrencias').innerHTML = recOco.map(c => {
    const cl = c.nivel === 'Grave' ? 'high' : c.nivel === 'Moderado' ? 'med' : 'low';
    return `<div class="alert-item">
      <div class="alert-icon ${cl}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      </div>
      <div>
        <div class="alert-title">${nomeAluno(c.aluno)}</div>
        <div class="alert-meta">${nivelChip(c.nivel)} · ${c.data} · Prof. ${nomeProf(c.prof)}</div>
        <div class="alert-desc">${c.desc}</div>
      </div>
    </div>`;
  }).join('') || '<div class="empty">Nenhuma ocorrência</div>';

  // Visão por turma
  document.getElementById('dash-turmas-visao').innerHTML = DB.turmas.map(t => {
    const alunos = DB.alunos.filter(a => a.turma === t.id);
    const ativos = alunos.filter(a => a.status === 'Ativo').length;
    const medias = alunos.map(a => mediaAluno(a.id)).filter(m => m > 0);
    const media  = medias.length ? (medias.reduce((s, v) => s + v, 0) / medias.length).toFixed(1) : '—';
    const freqs  = alunos.map(a => freqAluno(a.id));
    const freq   = freqs.length ? (freqs.reduce((s, v) => s + v, 0) / freqs.length).toFixed(0) : '—';
    const mc     = parseFloat(media);
    return `<div class="alert-item">
      <div class="alert-icon ${mc >= 7 ? 'low' : mc >= 5 ? 'med' : 'high'}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      </div>
      <div style="flex:1">
        <div class="alert-title">${t.nome}</div>
        <div class="alert-meta">${t.turno} · ${alunos.length} alunos (${ativos} ativos) · Média ${media} · Freq. ${freq}%</div>
      </div>
      <button class="btn btn-sm btn-outline" onclick="verDetalheTurma(${t.id})">Detalhes</button>
    </div>`;
  }).join('');
}

// ── RENDER ALUNOS ─────────────────────────────────────
function renderAlunos() {
  const tb = document.querySelector('#tbl-alunos tbody');
  if (!tb) return;
  const ft = (document.getElementById('filtro-turma-aluno') || {}).value || '';
  const fs = (document.getElementById('filtro-status-aluno') || {}).value || '';
  const fb = ((document.getElementById('busca-aluno') || {}).value || '').toLowerCase();

  let data = DB.alunos;
  if (ft) data = data.filter(a => a.turma == ft);
  if (fs) data = data.filter(a => a.status === fs);
  if (fb) data = data.filter(a => a.nome.toLowerCase().includes(fb));

  tb.innerHTML = data.map(a => {
    const faltas = faltasAluno(a.id);
    const media  = mediaAluno(a.id);
    const mediaStr = media > 0 ? media.toFixed(1) : '—';
    return `<tr>
      <td><strong>${a.nome}</strong></td>
      <td>${nomeTurma(a.turma)}</td>
      <td>${turnoTurma(a.turma)}</td>
      <td>${statusChip(a.status)}</td>
      <td>${faltas > 3 ? `<b style="color:var(--danger)">${faltas}</b>` : faltas}</td>
      <td class="${media > 0 ? notaClass(media) : ''}">${mediaStr}</td>
      <td>
        <div class="actions-group">
          <button class="btn btn-sm btn-outline" onclick="editarAluno(${a.id})" title="Editar">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Editar
          </button>
          <button class="btn btn-sm btn-danger" onclick="confirmDel(()=>excluirAluno(${a.id}))" title="Excluir">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
            Excluir
          </button>
        </div>
      </td>
    </tr>`;
  }).join('') || '<tr><td colspan="7" class="empty">Nenhum aluno encontrado</td></tr>';
}

function excluirAluno(id) {
  DB.alunos = DB.alunos.filter(a => a.id !== id);
  renderAlunos();
}

function limparFormAluno() {
  ['a-id','a-nome','a-email','a-tel','a-nasc','a-cpf'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const st = document.getElementById('a-status');
  if (st) st.value = 'Ativo';
  const tr = document.getElementById('a-turma');
  if (tr) tr.selectedIndex = 0;
  document.getElementById('modal-aluno-title').textContent = 'Novo Aluno';
}

function editarAluno(id) {
  const a = DB.alunos.find(x => x.id === id);
  if (!a) return;
  modoAluno = 'editar';
  document.getElementById('modal-aluno-title').textContent = 'Editar Aluno';
  document.getElementById('a-id').value    = a.id;
  document.getElementById('a-nome').value  = a.nome;
  document.getElementById('a-email').value = a.email || '';
  document.getElementById('a-tel').value   = a.tel || '';
  document.getElementById('a-nasc').value  = a.nasc || '';
  document.getElementById('a-cpf').value   = a.cpf || '';
  document.getElementById('a-status').value = a.status;
  document.getElementById('a-turma').value  = a.turma;
  openModal('modal-aluno');
}

function salvarAluno() {
  const nome   = document.getElementById('a-nome').value.trim();
  const email  = document.getElementById('a-email').value.trim();
  const tel    = document.getElementById('a-tel').value.trim();
  const turma  = parseInt(document.getElementById('a-turma').value);
  const status = document.getElementById('a-status').value;
  const nasc   = document.getElementById('a-nasc').value;
  const cpf    = document.getElementById('a-cpf').value.trim();

  if (!nome) { toast('Informe o nome do aluno.', 'error'); return; }
  if (!turma) { toast('Selecione uma turma.', 'error'); return; }

  if (modoAluno === 'editar') {
    const id = parseInt(document.getElementById('a-id').value);
    const a  = DB.alunos.find(x => x.id === id);
    if (a) { a.nome = nome; a.email = email; a.tel = tel; a.turma = turma; a.status = status; a.nasc = nasc; a.cpf = cpf; }
    toast('Aluno atualizado com sucesso!');
  } else {
    DB.alunos.push({ id: nid('alunos'), nome, email, tel, turma, status, nasc, cpf });
    toast('Aluno cadastrado com sucesso!');
  }
  closeModal('modal-aluno');
  renderAlunos();
  updateAlertaCount();
}

// ── RENDER PROFESSORES ────────────────────────────────
function renderProfessores() {
  const tb = document.querySelector('#tbl-professores tbody');
  if (!tb) return;
  const fb = ((document.getElementById('busca-prof') || {}).value || '').toLowerCase();
  let data = DB.professores;
  if (fb) data = data.filter(p => p.nome.toLowerCase().includes(fb));

  tb.innerHTML = data.map(p => {
    const pds    = DB.profDisciplinas.filter(x => x.prof === p.id);
    const turmas = [...new Set(pds.map(x => x.turma))].map(nomeTurma).join(', ') || '—';
    const discs  = [...new Set(pds.map(x => x.disc))].map(nomeDisc).join(', ') || '—';
    return `<tr>
      <td><strong>${p.nome}</strong></td>
      <td style="font-size:12px">${p.email}</td>
      <td>${p.esp}</td>
      <td style="font-size:12px;max-width:160px">${turmas}</td>
      <td style="font-size:12px;max-width:160px">${discs}</td>
      <td>
        <div class="actions-group">
          <button class="btn btn-sm btn-outline" onclick="editarProfessor(${p.id})" title="Editar">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Editar
          </button>
          <button class="btn btn-sm btn-danger" onclick="confirmDel(()=>excluirProfessor(${p.id}))" title="Excluir">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
            Excluir
          </button>
        </div>
      </td>
    </tr>`;
  }).join('') || '<tr><td colspan="6" class="empty">Nenhum professor encontrado</td></tr>';
}

function excluirProfessor(id) {
  DB.professores = DB.professores.filter(p => p.id !== id);
  renderProfessores();
}

function limparFormProf() {
  ['p-id','p-nome','p-email','p-tel','p-esp'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('modal-prof-title').textContent = 'Novo Professor';
}

function editarProfessor(id) {
  const p = DB.professores.find(x => x.id === id);
  if (!p) return;
  modoProf = 'editar';
  document.getElementById('modal-prof-title').textContent = 'Editar Professor';
  document.getElementById('p-id').value    = p.id;
  document.getElementById('p-nome').value  = p.nome;
  document.getElementById('p-email').value = p.email;
  document.getElementById('p-tel').value   = p.tel;
  document.getElementById('p-esp').value   = p.esp;
  openModal('modal-professor');
}

function salvarProfessor() {
  const nome  = document.getElementById('p-nome').value.trim();
  const email = document.getElementById('p-email').value.trim();
  const tel   = document.getElementById('p-tel').value.trim();
  const esp   = document.getElementById('p-esp').value.trim();

  if (!nome)  { toast('Informe o nome do professor.', 'error'); return; }
  if (!email) { toast('Informe o e-mail do professor.', 'error'); return; }

  if (modoProf === 'editar') {
    const id = parseInt(document.getElementById('p-id').value);
    const p  = DB.professores.find(x => x.id === id);
    if (p) { p.nome = nome; p.email = email; p.tel = tel; p.esp = esp; }
    toast('Professor atualizado com sucesso!');
  } else {
    DB.professores.push({ id: nid('professores'), nome, email, tel, esp });
    toast('Professor cadastrado com sucesso!');
  }
  closeModal('modal-professor');
  renderProfessores();
}

// ── RENDER TURMAS ─────────────────────────────────────
function renderTurmas() {
  const tb = document.querySelector('#tbl-turmas tbody');
  if (!tb) return;
  const fturno = (document.getElementById('filtro-turno-turma') || {}).value || '';
  const fano   = (document.getElementById('filtro-ano-turma') || {}).value || '';

  let data = DB.turmas;
  if (fturno) data = data.filter(t => t.turno === fturno);
  if (fano)   data = data.filter(t => t.ano == fano);

  tb.innerHTML = data.map(t => {
    const alunos  = DB.alunos.filter(a => a.turma === t.id);
    const ativos  = alunos.filter(a => a.status === 'Ativo').length;
    const medias  = alunos.map(a => mediaAluno(a.id)).filter(m => m > 0);
    const media   = medias.length ? (medias.reduce((s, v) => s + v, 0) / medias.length).toFixed(1) : '—';
    const freqs   = alunos.map(a => freqAluno(a.id));
    const freq    = freqs.length ? (freqs.reduce((s, v) => s + v, 0) / freqs.length).toFixed(0) + '%' : '—';
    const mc      = parseFloat(media);
    return `<tr>
      <td><strong>${t.nome}</strong></td>
      <td>${t.ano}</td>
      <td><span class="chip chip-blue">${t.turno}</span></td>
      <td>${alunos.length}</td>
      <td>${ativos}</td>
      <td class="${mc > 0 ? notaClass(mc) : ''}">${media}</td>
      <td>${freq}</td>
      <td><button class="btn btn-sm btn-outline" onclick="verDetalheTurma(${t.id})">Detalhes</button></td>
    </tr>`;
  }).join('') || '<tr><td colspan="8" class="empty">Nenhuma turma encontrada</td></tr>';
}

function verDetalheTurma(turmaId) {
  const t       = DB.turmas.find(x => x.id === turmaId);
  const alunos  = DB.alunos.filter(a => a.turma === turmaId);
  const ativos  = alunos.filter(a => a.status === 'Ativo').length;
  const medias  = alunos.map(a => mediaAluno(a.id)).filter(m => m > 0);
  const media   = medias.length ? (medias.reduce((s, v) => s + v, 0) / medias.length).toFixed(1) : '—';
  const freqs   = alunos.map(a => freqAluno(a.id));
  const freq    = freqs.length ? (freqs.reduce((s, v) => s + v, 0) / freqs.length).toFixed(0) : '—';
  const criticos = alunos.filter(a => mediaAluno(a.id) < 6 || freqAluno(a.id) < 75).length;
  const profs   = [...new Set(DB.profDisciplinas.filter(p => p.turma === turmaId).map(p => p.prof))].map(nomeProf).join(', ') || '—';

  document.getElementById('turma-detalhe-title').textContent = `Detalhes — ${t ? t.nome : ''}`;
  document.getElementById('turma-detalhe-body').innerHTML = `
    <div class="turma-detalhe-grid">
      <div class="turma-detalhe-stat"><div class="td-num">${alunos.length}</div><div class="td-lbl">Total de Alunos</div></div>
      <div class="turma-detalhe-stat"><div class="td-num">${ativos}</div><div class="td-lbl">Ativos</div></div>
      <div class="turma-detalhe-stat"><div class="td-num ${parseFloat(media) > 0 ? notaClass(parseFloat(media)) : ''}">${media}</div><div class="td-lbl">Média Geral</div></div>
      <div class="turma-detalhe-stat"><div class="td-num">${freq}%</div><div class="td-lbl">Frequência Média</div></div>
      <div class="turma-detalhe-stat"><div class="td-num nota-baixa">${criticos}</div><div class="td-lbl">Alunos em Risco</div></div>
      <div class="turma-detalhe-stat"><div class="td-num nota-alta">${ativos - criticos}</div><div class="td-lbl">Alunos OK</div></div>
    </div>
    <p style="font-size:12px;color:var(--muted);margin-bottom:16px"><strong>Professores:</strong> ${profs}</p>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Nome</th><th>Status</th><th>Faltas</th><th>Média</th><th>Situação</th></tr></thead>
        <tbody>
          ${alunos.map(a => {
            const m  = mediaAluno(a.id);
            const ms = m > 0 ? m.toFixed(1) : '—';
            const sit = m > 0 ? (m >= 7 ? '<span class="chip chip-green">Regular</span>' : m >= 5 ? '<span class="chip chip-yellow">Atenção</span>' : '<span class="chip chip-red">Crítico</span>') : '<span class="chip chip-grey">Sem dados</span>';
            return `<tr>
              <td>${a.nome}</td>
              <td>${statusChip(a.status)}</td>
              <td>${faltasAluno(a.id)}</td>
              <td class="${m > 0 ? notaClass(m) : ''}">${ms}</td>
              <td>${sit}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  const sec = document.getElementById('turma-detalhe-section');
  sec.style.display = 'block';
  sec.scrollIntoView({ behavior: 'smooth' });
}

// ── RENDER FREQUÊNCIAS ────────────────────────────────
function renderFrequencias() {
  const tb = document.querySelector('#tbl-frequencias tbody');
  if (!tb) return;
  const ft = (document.getElementById('filtro-turma-freq') || {}).value || '';
  const fp = (document.getElementById('filtro-pres-freq') || {}).value;
  const fb = ((document.getElementById('busca-freq') || {}).value || '').toLowerCase();

  let data = DB.frequencias;
  if (ft) data = data.filter(f => turmaDoAluno(f.aluno) == ft);
  if (fp !== '') data = data.filter(f => String(f.pres) === fp);
  if (fb) data = data.filter(f => nomeAluno(f.aluno).toLowerCase().includes(fb));

  tb.innerHTML = data.map(f => `<tr>
    <td>${f.data}</td>
    <td>${nomeAluno(f.aluno)}</td>
    <td>${nomeTurma(turmaDoAluno(f.aluno))}</td>
    <td>${nomeDisc(f.disc)}</td>
    <td>${f.pres
      ? '<span class="chip chip-green">Presente</span>'
      : '<span class="chip chip-red">Ausente</span>'}</td>
  </tr>`).join('') || '<tr><td colspan="5" class="empty">Nenhum registro encontrado</td></tr>';
}

// ── RENDER NOTAS ──────────────────────────────────────
function renderNotasDir() {
  const tb = document.querySelector('#tbl-notas-dir tbody');
  if (!tb) return;
  const ft   = (document.getElementById('filtro-turma-nota') || {}).value || '';
  const fa   = (document.getElementById('filtro-aval-nota') || {}).value || '';
  const fb   = ((document.getElementById('busca-nota') || {}).value || '').toLowerCase();

  let data = DB.notas;
  if (ft) data = data.filter(n => turmaDoAluno(n.aluno) == ft);
  if (fa) data = data.filter(n => n.aval == fa);
  if (fb) data = data.filter(n => nomeAluno(n.aluno).toLowerCase().includes(fb));

  tb.innerHTML = data.map(n => `<tr>
    <td>${nomeAluno(n.aluno)}</td>
    <td>${nomeTurma(turmaDoAluno(n.aluno))}</td>
    <td>Avaliação ${n.aval}</td>
    <td><span class="${notaClass(n.valor)}">${n.valor.toFixed(1)}</span></td>
    <td>${situacaoNota(n.valor)}</td>
    <td style="font-size:12px">${n.obs || '—'}</td>
  </tr>`).join('') || '<tr><td colspan="6" class="empty">Nenhum registro encontrado</td></tr>';
}

// ── RENDER OCORRÊNCIAS ────────────────────────────────
function renderOcorrencias() {
  const tb = document.querySelector('#tbl-ocorrencias tbody');
  if (!tb) return;
  const fn = (document.getElementById('filtro-nivel-oco') || {}).value || '';
  const ft = (document.getElementById('filtro-turma-oco') || {}).value || '';
  const fb = ((document.getElementById('busca-oco') || {}).value || '').toLowerCase();

  let data = DB.comportamentos;
  if (fn) data = data.filter(c => c.nivel === fn);
  if (ft) data = data.filter(c => turmaDoAluno(c.aluno) == ft);
  if (fb) data = data.filter(c => nomeAluno(c.aluno).toLowerCase().includes(fb) || c.desc.toLowerCase().includes(fb));

  tb.innerHTML = data.map(c => `<tr>
    <td>${c.data}</td>
    <td>${nomeAluno(c.aluno)}</td>
    <td>${nomeTurma(turmaDoAluno(c.aluno))}</td>
    <td>${nivelChip(c.nivel)}</td>
    <td style="max-width:260px;font-size:12px">${c.desc}</td>
    <td style="font-size:12px">${nomeProf(c.prof)}</td>
  </tr>`).join('') || '<tr><td colspan="6" class="empty">Nenhuma ocorrência encontrada</td></tr>';
}

// ── RENDER ALERTAS ────────────────────────────────────
function renderAlertas() {
  const tb = document.querySelector('#tbl-alertas tbody');
  if (!tb) return;
  const ft = (document.getElementById('filtro-tipo-alerta') || {}).value || '';
  const fr = (document.getElementById('filtro-risco-alerta') || {}).value || '';
  const fa = (document.getElementById('filtro-turma-alerta') || {}).value || '';

  let data = DB.alertas;
  if (ft) data = data.filter(a => a.tipo === ft);
  if (fr) data = data.filter(a => a.risco === fr);
  if (fa) data = data.filter(a => turmaDoAluno(a.aluno) == fa);

  tb.innerHTML = data.map(a => `<tr>
    <td>${a.data}</td>
    <td>${nomeAluno(a.aluno)}</td>
    <td>${nomeTurma(turmaDoAluno(a.aluno))}</td>
    <td><span class="chip chip-blue">${a.tipo}</span></td>
    <td>${riskChip(a.risco)}</td>
    <td style="max-width:260px;font-size:12px">${a.desc}</td>
  </tr>`).join('') || '<tr><td colspan="6" class="empty">Nenhum alerta encontrado</td></tr>';
}

function updateAlertaCount() {
  const n = DB.alertas.filter(a => a.risco === 'Alto').length;
  const ac = document.getElementById('alerta-count');
  const nb = document.getElementById('nav-badge');
  if (ac) ac.textContent = n;
  if (nb) nb.textContent = n;
}

// ── RENDER RELATÓRIOS ─────────────────────────────────
function renderRelatorios() {
  const tb = document.querySelector('#tbl-relatorio-turmas tbody');
  if (!tb) return;
  tb.innerHTML = DB.turmas.map(t => {
    const alunos   = DB.alunos.filter(a => a.turma === t.id);
    const ativos   = alunos.filter(a => a.status === 'Ativo').length;
    const medias   = alunos.map(a => mediaAluno(a.id)).filter(m => m > 0);
    const media    = medias.length ? (medias.reduce((s, v) => s + v, 0) / medias.length).toFixed(1) : '—';
    const freqs    = alunos.map(a => freqAluno(a.id));
    const freq     = freqs.length ? (freqs.reduce((s, v) => s + v, 0) / freqs.length).toFixed(0) + '%' : '—';
    const risco    = alunos.filter(a => mediaAluno(a.id) < 6 || freqAluno(a.id) < 75).length;
    const ocos     = DB.comportamentos.filter(c => turmaDoAluno(c.aluno) === t.id).length;
    const mc       = parseFloat(media);
    return `<tr>
      <td><strong>${t.nome}</strong><br><small style="color:var(--muted)">${t.turno}</small></td>
      <td>${alunos.length}</td>
      <td>${ativos}</td>
      <td class="${mc > 0 ? notaClass(mc) : ''}">${media}</td>
      <td>${freq}</td>
      <td>${risco > 0 ? `<span style="color:var(--danger);font-weight:700">${risco}</span>` : `<span style="color:var(--ok);font-weight:700">0</span>`}</td>
      <td>${ocos}</td>
    </tr>`;
  }).join('');
}

// ── RENDER ALL ────────────────────────────────────────
function renderAll() {
  renderAlunos();
  renderProfessores();
  renderTurmas();
  renderFrequencias();
  renderNotasDir();
  renderOcorrencias();
  renderAlertas();
  updateAlertaCount();
}

// ── BUSCA GLOBAL ──────────────────────────────────────
const searchInput = document.getElementById('global-search');
if (searchInput) {
  searchInput.addEventListener('input', e => {
    const txt = e.target.value.toLowerCase().trim();
    if (!txt) { renderAll(); return; }
    // Apply search to inline filters where available
    const ba = document.getElementById('busca-aluno');
    const bp = document.getElementById('busca-prof');
    const bf = document.getElementById('busca-freq');
    const bn = document.getElementById('busca-nota');
    const bo = document.getElementById('busca-oco');
    if (ba) { ba.value = txt; renderAlunos(); }
    if (bp) { bp.value = txt; renderProfessores(); }
    if (bf) { bf.value = txt; renderFrequencias(); }
    if (bn) { bn.value = txt; renderNotasDir(); }
    if (bo) { bo.value = txt; renderOcorrencias(); }
  });
}

// ── EXPORTAÇÕES CSV ───────────────────────────────────
function downloadCSV(rows, filename) {
  const csv = rows
    .map(r => r.map(v => `"${String(v == null ? '' : v).replace(/"/g, '""')}"`).join(';'))
    .join('\n');
  const bom  = '\uFEFF';
  const blob = new Blob([bom + csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href  = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportarAlunosCSV() {
  const rows = [['ID','Nome','Turma','Turno','Status','E-mail','Telefone','CPF']];
  DB.alunos.forEach(a => rows.push([a.id, a.nome, nomeTurma(a.turma), turnoTurma(a.turma), a.status, a.email || '', a.tel || '', a.cpf || '']));
  downloadCSV(rows, 'classtrack_alunos.csv');
  toast('Relatório de alunos exportado!');
}

function exportarProfessoresCSV() {
  const rows = [['ID','Nome','E-mail','Telefone','Especialidade','Turmas','Disciplinas']];
  DB.professores.forEach(p => {
    const pds   = DB.profDisciplinas.filter(x => x.prof === p.id);
    const turmas = [...new Set(pds.map(x => x.turma))].map(nomeTurma).join(' | ');
    const discs  = [...new Set(pds.map(x => x.disc))].map(nomeDisc).join(' | ');
    rows.push([p.id, p.nome, p.email, p.tel, p.esp, turmas, discs]);
  });
  downloadCSV(rows, 'classtrack_professores.csv');
  toast('Relatório de professores exportado!');
}

function exportarNotasCSVDir() {
  const rows = [['Aluno','Turma','Avaliação','Nota','Situação','Observação']];
  DB.notas.forEach(n => {
    const sit = n.valor >= 7 ? 'Aprovado' : n.valor >= 5 ? 'Recuperação' : 'Reprovado';
    rows.push([nomeAluno(n.aluno), nomeTurma(turmaDoAluno(n.aluno)), `Avaliação ${n.aval}`, n.valor, sit, n.obs || '']);
  });
  downloadCSV(rows, 'classtrack_notas.csv');
  toast('Relatório de notas exportado!');
}

function exportarFreqCSVDir() {
  const rows = [['Data','Aluno','Turma','Disciplina','Presença']];
  DB.frequencias.forEach(f => rows.push([f.data, nomeAluno(f.aluno), nomeTurma(turmaDoAluno(f.aluno)), nomeDisc(f.disc), f.pres ? 'Presente' : 'Ausente']));
  downloadCSV(rows, 'classtrack_frequencias.csv');
  toast('Relatório de frequências exportado!');
}

function exportarOcorrenciasCSV() {
  const rows = [['Data','Aluno','Turma','Nível','Descrição','Professor']];
  DB.comportamentos.forEach(c => rows.push([c.data, nomeAluno(c.aluno), nomeTurma(turmaDoAluno(c.aluno)), c.nivel, c.desc, nomeProf(c.prof)]));
  downloadCSV(rows, 'classtrack_ocorrencias.csv');
  toast('Relatório de ocorrências exportado!');
}

function exportarAlertasCSV() {
  const rows = [['Data','Aluno','Turma','Tipo','Risco','Descrição']];
  DB.alertas.forEach(a => rows.push([a.data, nomeAluno(a.aluno), nomeTurma(turmaDoAluno(a.aluno)), a.tipo, a.risco, a.desc]));
  downloadCSV(rows, 'classtrack_alertas.csv');
  toast('Relatório de alertas exportado!');
}

// ── LOGOUT ────────────────────────────────────────────
function logout() {
  localStorage.removeItem('loggedUser');
  window.location.href = '../index.html';
}

// ── UPDATE NOME DIREÇÃO ───────────────────────────────
function atualizarNomeDirecao() {
  const el  = document.getElementById('dir-name');
  const av  = document.getElementById('dir-avatar');
  const nome = DIRECAO_LOGADO.nome || 'Administrador';
  if (el) el.textContent = nome;
  if (av) {
    const iniciais = nome.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    av.textContent = iniciais;
  }
}

// ── INIT ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  atualizarNomeDirecao();
  populateSelects();
  renderAll();
  renderDash();
});