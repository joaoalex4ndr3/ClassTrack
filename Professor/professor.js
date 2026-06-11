// =====================================================
//  ClassTrack — Visão do Professor
//  Professor logado via sistema de login
// =====================================================

// Obter dados do professor logado
const PROFESSOR_LOGADO = window.professorLogado || { id: 1, nome: 'Carlos Eduardo Mendes' };
const PROF_ID = PROFESSOR_LOGADO.id || 1;

const DB = {
  professor: { id: 1, nome: 'Carlos Eduardo Mendes', email: 'carlos.mendes@ads.edu.br', tel: '(11) 98234-5671', esp: 'Algoritmos e Lógica' },

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
    { id: 7, nome: 'Estrutura de Dados', ch: 60 },
    { id: 8, nome: 'Matemática Discreta', ch: 60 },
  ],

  profDisciplinas: [
    { prof: 1, disc: 1, turma: 1 },
    { prof: 1, disc: 1, turma: 2 },
    { prof: 1, disc: 1, turma: 3 },
    { prof: 1, disc: 1, turma: 4 },
  ],

  alunos: [
    { id: 1, nome: 'Gabriel Henrique Souza', status: 'Ativo', turma: 1 },
    { id: 2, nome: 'Larissa Beatriz Mendes', status: 'Ativo', turma: 1 },
    { id: 3, nome: 'Lucas Vinícius Almeida', status: 'Ativo', turma: 1 },
    { id: 19, nome: 'Eduardo Campos Dias', status: 'Ativo', turma: 1 },
    { id: 25, nome: 'Patrick Nunes Monteiro', status: 'Trancado', turma: 1 },
    { id: 4, nome: 'Isabela Cristina Rocha', status: 'Ativo', turma: 2 },
    { id: 5, nome: 'Rafael Torres Carvalho', status: 'Ativo', turma: 2 },
    { id: 6, nome: 'Camila Fernanda Lopes', status: 'Ativo', turma: 2 },
    { id: 20, nome: 'Letícia Pereira Gonçalves', status: 'Ativo', turma: 2 },
    { id: 7, nome: 'Thiago Augusto Ferreira', status: 'Ativo', turma: 3 },
    { id: 8, nome: 'Mariana Oliveira Costa', status: 'Ativo', turma: 3 },
    { id: 9, nome: 'Felipe Andrade Barbosa', status: 'Ativo', turma: 3 },
    { id: 21, nome: 'Mateus Rodrigues Silva', status: 'Ativo', turma: 3 },
    { id: 10, nome: 'Natália Regina Lima', status: 'Ativo', turma: 4 },
    { id: 11, nome: 'Bruno César Gomes', status: 'Ativo', turma: 4 },
    { id: 12, nome: 'Amanda Vitória Pinto', status: 'Ativo', turma: 4 },
    { id: 22, nome: 'Vanessa Alves Cardoso', status: 'Inativo', turma: 4 },
  ],

  notas: [
    { id: 1, valor: 7.5, obs: null, aluno: 1, aval: 1 },
    { id: 2, valor: 6.0, obs: 'Abaixo da média', aluno: 2, aval: 1 },
    { id: 3, valor: 8.0, obs: null, aluno: 3, aval: 1 },
    { id: 4, valor: 9.5, obs: null, aluno: 4, aval: 1 },
    { id: 5, valor: 4.5, obs: 'Dificuldade em lógica', aluno: 5, aval: 1 },
    { id: 6, valor: 8.5, obs: null, aluno: 6, aval: 1 },
    { id: 7, valor: 7.0, obs: null, aluno: 7, aval: 1 },
    { id: 8, valor: 8.0, obs: null, aluno: 8, aval: 1 },
    { id: 9, valor: 5.5, obs: 'Dificuldade em lógica', aluno: 9, aval: 1 },
    { id: 10, valor: 9.0, obs: null, aluno: 10, aval: 1 },
    { id: 11, valor: 6.0, obs: null, aluno: 11, aval: 1 },
    { id: 12, valor: 7.5, obs: null, aluno: 12, aval: 1 },
    { id: 13, valor: 8.8, obs: null, aluno: 19, aval: 1 },
    { id: 14, valor: 3.5, obs: 'Entregou trabalho incompleto', aluno: 20, aval: 1 },
    { id: 15, valor: 9.5, obs: null, aluno: 21, aval: 1 },
  ],

  frequencias: [
    { id: 1, data: '2024-03-04', pres: true, aluno: 1, disc: 1 },
    { id: 2, data: '2024-03-04', pres: true, aluno: 2, disc: 1 },
    { id: 3, data: '2024-03-04', pres: false, aluno: 3, disc: 1 },
    { id: 4, data: '2024-03-04', pres: true, aluno: 4, disc: 1 },
    { id: 5, data: '2024-03-04', pres: true, aluno: 5, disc: 1 },
    { id: 6, data: '2024-03-11', pres: true, aluno: 1, disc: 1 },
    { id: 7, data: '2024-03-11', pres: false, aluno: 2, disc: 1 },
    { id: 8, data: '2024-03-11', pres: true, aluno: 3, disc: 1 },
    { id: 9, data: '2024-03-11', pres: true, aluno: 6, disc: 1 },
    { id: 10, data: '2024-03-11', pres: false, aluno: 7, disc: 1 },
    { id: 11, data: '2024-03-18', pres: true, aluno: 1, disc: 1 },
    { id: 12, data: '2024-03-18', pres: true, aluno: 8, disc: 1 },
    { id: 13, data: '2024-03-18', pres: false, aluno: 9, disc: 1 },
    { id: 14, data: '2024-03-18', pres: true, aluno: 10, disc: 1 },
    { id: 15, data: '2024-03-18', pres: true, aluno: 11, disc: 1 },
    { id: 16, data: '2024-03-25', pres: false, aluno: 1, disc: 1 },
    { id: 17, data: '2024-03-25', pres: true, aluno: 12, disc: 1 },
    { id: 18, data: '2024-03-25', pres: true, aluno: 19, disc: 1 },
    { id: 19, data: '2024-03-25', pres: false, aluno: 20, disc: 1 },
    { id: 20, data: '2024-03-25', pres: true, aluno: 21, disc: 1 },
  ],

  comportamentos: [
    { id: 1, data: '2024-03-06', desc: 'Uso de celular durante a aula sem autorização.', nivel: 'Leve', aluno: 3, prof: 1 },
    { id: 2, data: '2024-03-13', desc: 'Não entregou atividade pelo terceiro período consecutivo.', nivel: 'Moderado', aluno: 9, prof: 1 },
    { id: 3, data: '2024-04-11', desc: 'Chegou atrasado pela quinta vez no mês.', nivel: 'Leve', aluno: 4, prof: 1 },
  ],

  alertas: [
    { id: 1, tipo: 'Frequência', desc: 'Aluno com mais de 25% de faltas em Algoritmos.', risco: 'Alto', data: '2024-04-10', aluno: 3 },
    { id: 2, tipo: 'Frequência', desc: 'Frequência abaixo do mínimo em Banco de Dados.', risco: 'Alto', data: '2024-04-10', aluno: 6 },
    { id: 3, tipo: 'Nota', desc: 'Nota abaixo de 5.0 em Algoritmos — risco de reprovação.', risco: 'Alto', data: '2024-04-05', aluno: 5 },
    { id: 4, tipo: 'Nota', desc: 'Desempenho abaixo da média em Algoritmos.', risco: 'Médio', data: '2024-04-08', aluno: 9 },
    { id: 5, tipo: 'Comportamento', desc: 'Terceira ocorrência de comportamento no semestre.', risco: 'Médio', data: '2024-04-18', aluno: 3 },
    { id: 6, tipo: 'Nota', desc: 'Média parcial abaixo de 6.0 — monitoramento recomendado.', risco: 'Baixo', data: '2024-04-28', aluno: 2 },
    { id: 7, tipo: 'Frequência', desc: 'Aluno ausente nas últimas 3 aulas.', risco: 'Médio', data: '2024-04-15', aluno: 20 },
  ],

  _next: { notas: 16, frequencias: 21, comportamentos: 4 }
};

// Atualizar nome do professor na interface
function atualizarNomeProfessor() {
  const profNameElement = document.getElementById('prof-name');
  const profAvatarElement = document.getElementById('prof-avatar');

  if (profNameElement && PROFESSOR_LOGADO.nome) {
    profNameElement.textContent = PROFESSOR_LOGADO.nome;
  }

  if (profAvatarElement && PROFESSOR_LOGADO.nome) {
    const iniciais = PROFESSOR_LOGADO.nome.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    profAvatarElement.textContent = iniciais;
  }
}

// ── LOGOUT ──────────────────────────────────────────
function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "../Index/index.html";
}

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
function turmaDoAluno(id) {
  const a = DB.alunos.find(x => x.id == id);
  return a ? a.turma : null;
}

function minhasTurmas() {
  const ids = [...new Set(DB.profDisciplinas.filter(p => p.prof === PROF_ID).map(p => p.turma))];
  return DB.turmas.filter(t => ids.includes(t.id));
}

function meusAlunos() {
  const tids = minhasTurmas().map(t => t.id);
  return DB.alunos.filter(a => tids.includes(a.turma));
}

function alunosDaTurma(tid) {
  return DB.alunos.filter(a => a.turma == tid);
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

function toast(msg, type = '') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'show ' + type;
  setTimeout(() => t.className = '', 2800);
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
  const today = new Date().toISOString().split('T')[0];
  ['f-data', 'c-data'].forEach(fid => {
    const el = document.getElementById(fid);
    if (el && !el.value) el.value = today;
  });
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

document.querySelectorAll('.modal-bg').forEach(bg => {
  bg.addEventListener('click', e => { if (e.target === bg) bg.classList.remove('open'); });
});

let _delCb = null;
function confirmDel(cb) { _delCb = cb; openModal('modal-confirm'); }

const confirmBtn = document.getElementById('btn-confirm-del');
if (confirmBtn) {
  confirmBtn.onclick = () => {
    if (_delCb) { _delCb(); _delCb = null; }
    closeModal('modal-confirm');
    toast('Registro excluído.', 'error');
    renderAll();
  };
}

// ── NAVIGATION ───────────────────────────────────────
const pageTitles = {
  dashboard: 'Início', turmas: 'Minhas Turmas',
  frequencias: 'Frequências', notas: 'Notas',
  comportamentos: 'Ocorrências', alertas: 'Alertas'
};

function go(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#sidebar nav a').forEach(a => a.classList.remove('active'));
  const targetPage = document.getElementById('page-' + page);
  if (targetPage) targetPage.classList.add('active');
  document.querySelectorAll('#sidebar nav a').forEach(a => {
    if (a.getAttribute('onclick') && a.getAttribute('onclick').includes("'" + page + "'"))
      a.classList.add('active');
  });
  const titleElem = document.getElementById('page-title');
  if (titleElem) titleElem.textContent = pageTitles[page] || page;
  if (page === 'dashboard') renderDash();
}

// ── POPULATE SELECTS ─────────────────────────────────
function populateSelects() {
  const mt = minhasTurmas();
  const turmaOpts = mt.map(t => `<option value="${t.id}">${t.nome}</option>`).join('');

  ['filtro-turma-freq', 'filtro-turma-nota', 'filtro-turma-comp'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '<option value="">Todas as turmas</option>' + turmaOpts;
  });

  const discIds = [...new Set(DB.profDisciplinas.filter(p => p.prof === PROF_ID).map(p => p.disc))];
  const minhasDisc = DB.disciplinas.filter(d => discIds.includes(d.id));
  const discOpts = minhasDisc.map(d => `<option value="${d.id}">${d.nome}</option>`).join('');

  const filtroDisc = document.getElementById('filtro-disc-freq');
  if (filtroDisc) filtroDisc.innerHTML = '<option value="">Todas disciplinas</option>' + discOpts;

  const ft = document.getElementById('f-turma');
  if (ft) { ft.innerHTML = turmaOpts; onTurmaFreqChange(); }

  const ct = document.getElementById('ch-turma');
  if (ct) { ct.innerHTML = turmaOpts; }
  const cd = document.getElementById('ch-disc');
  if (cd) { cd.innerHTML = discOpts; }

  const nt = document.getElementById('n-turma');
  if (nt) { nt.innerHTML = turmaOpts; onTurmaNotaChange(); }

  const cmt = document.getElementById('c-turma');
  if (cmt) { cmt.innerHTML = turmaOpts; onTurmaCompChange(); }

  const fan = document.getElementById('filtro-aluno-nota');
  if (fan) {
    fan.innerHTML = '<option value="">Todos os alunos</option>' +
      meusAlunos().map(a => `<option value="${a.id}">${a.nome}</option>`).join('');
  }

  updateAlertaCount();
}

function onTurmaFreqChange() {
  const tid = document.getElementById('f-turma').value;
  const alunos = alunosDaTurma(tid);
  const alunoSelect = document.getElementById('f-aluno');
  if (alunoSelect) {
    alunoSelect.innerHTML = alunos.map(a => `<option value="${a.id}">${a.nome}</option>`).join('');
  }

  const discIds = DB.profDisciplinas
    .filter(p => p.prof === PROF_ID && p.turma == tid)
    .map(p => p.disc);
  const discSelect = document.getElementById('f-disc');
  if (discSelect) {
    discSelect.innerHTML = DB.disciplinas.filter(d => discIds.includes(d.id))
      .map(d => `<option value="${d.id}">${d.nome}</option>`).join('');
  }
}

function onTurmaNotaChange() {
  const tid = document.getElementById('n-turma').value;
  const alunos = alunosDaTurma(tid);
  const alunoSelect = document.getElementById('n-aluno');
  if (alunoSelect) {
    alunoSelect.innerHTML = alunos.map(a => `<option value="${a.id}">${a.nome}</option>`).join('');
  }
}

function onTurmaCompChange() {
  const tid = document.getElementById('c-turma').value;
  const alunos = alunosDaTurma(tid);
  const alunoSelect = document.getElementById('c-aluno');
  if (alunoSelect) {
    alunoSelect.innerHTML = alunos.map(a => `<option value="${a.id}">${a.nome}</option>`).join('');
  }
}

// ── CHAMADA EM LOTE ──────────────────────────────────
function carregarChamada() {
  const tid = document.getElementById('ch-turma').value;
  const alunos = alunosDaTurma(tid).filter(a => a.status !== 'Inativo');
  const container = document.getElementById('chamada-lista');

  if (!alunos.length) {
    container.innerHTML = '<p style="color:var(--muted);font-size:13px">Nenhum aluno nesta turma.</p>';
    return;
  }

  container.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <span style="font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase">
        ${alunos.length} alunos — marque a presença
      </span>
      <div style="display:flex;gap:8px">
        <button class="btn btn-sm btn-outline" onclick="marcarTodos(true)">Todos Presentes</button>
        <button class="btn btn-sm btn-outline" onclick="marcarTodos(false)">Todos Ausentes</button>
      </div>
    </div>
    ${alunos.map(a => `
      <div class="chamada-row" data-id="${a.id}">
        <span class="chamada-name">${a.nome}</span>
        <div class="chamada-toggle">
          <button class="toggle-btn presente active" onclick="toggleChamada(${a.id},'true',this)">✓ Presente</button>
          <button class="toggle-btn ausente" onclick="toggleChamada(${a.id},'false',this)">✗ Ausente</button>
        </div>
      </div>
    `).join('')}
  `;
}

function toggleChamada(id, val, btn) {
  const row = btn.closest('.chamada-row');
  row.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  btn.closest('.chamada-row').dataset.pres = val;
}

function marcarTodos(presente) {
  document.querySelectorAll('.chamada-row').forEach(row => {
    const btns = row.querySelectorAll('.toggle-btn');
    btns.forEach(b => b.classList.remove('active'));
    btns[presente ? 0 : 1].classList.add('active');
    row.dataset.pres = String(presente);
  });
}

function salvarChamada() {
  const tid = document.getElementById('ch-turma').value;
  const did = parseInt(document.getElementById('ch-disc').value);
  const data = document.getElementById('ch-data').value;
  if (!tid || !did || !data) { toast('Preencha turma, disciplina e data.', 'error'); return; }

  const rows = document.querySelectorAll('.chamada-row');
  if (!rows.length) { toast('Nenhum aluno carregado.', 'error'); return; }

  rows.forEach(row => {
    const alunoId = parseInt(row.dataset.id);
    const pres = (row.dataset.pres || 'true') === 'true';
    DB.frequencias.push({ id: nid('frequencias'), data, pres, aluno: alunoId, disc: did });
  });

  closeModal('modal-chamada');
  const chData = document.getElementById('ch-data');
  if (chData) chData.value = '';
  const chamadaLista = document.getElementById('chamada-lista');
  if (chamadaLista) chamadaLista.innerHTML = '';
  renderFreq();
  toast(`Chamada salva — ${rows.length} registros!`);
}

// ── RENDER DASHBOARD ─────────────────────────────────
function renderDash() {
  const ma = meusAlunos();
  const totalFreq = DB.frequencias.length;
  const ausencias = DB.frequencias.filter(f => !f.pres).length;
  const alertosAltos = DB.alertas.filter(a => a.risco === 'Alto').length;

  const dashStats = document.getElementById('dash-stats');
  if (dashStats) {
    dashStats.innerHTML = `
      <div class="stat-card"><div class="num">${ma.length}</div><div class="lbl">Meus Alunos</div></div>
      <div class="stat-card"><div class="num">${minhasTurmas().length}</div><div class="lbl">Minhas Turmas</div></div>
      <div class="stat-card yellow"><div class="num">${ausencias}</div><div class="lbl">Faltas Registradas</div></div>
      <div class="stat-card red"><div class="num">${alertosAltos}</div><div class="lbl">Alertas de Risco Alto</div></div>
      <div class="stat-card green"><div class="num">${DB.notas.length}</div><div class="lbl">Notas Lançadas</div></div>
    `;
  }

  const pds = DB.profDisciplinas.filter(p => p.prof === PROF_ID);
  const dashDisc = document.getElementById('dash-disc');
  if (dashDisc) {
    dashDisc.innerHTML = pds.map(pd => {
      const t = DB.turmas.find(x => x.id === pd.turma);
      const d = DB.disciplinas.find(x => x.id === pd.disc);
      const cnt = alunosDaTurma(pd.turma).length;
      return `<div class="alert-item">
        <div class="alert-icon low">📘</div>
        <div>
          <div class="alert-title">${d ? d.nome : '—'}</div>
          <div class="alert-meta">${t ? t.nome : '—'} · ${t ? t.turno : ''} · ${cnt} alunos</div>
        </div>
      </div>`;
    }).join('') || '<div class="empty">Nenhuma disciplina atribuída</div>';
  }

  const recAl = [...DB.alertas].sort((a, b) => b.data.localeCompare(a.data)).slice(0, 5);
  const dashAlertas = document.getElementById('dash-alertas');
  if (dashAlertas) {
    dashAlertas.innerHTML = recAl.map(a => {
      const cl = a.risco === 'Alto' ? 'high' : a.risco === 'Médio' ? 'med' : 'low';
      return `<div class="alert-item">
        <div class="alert-icon ${cl}">⚠</div>
        <div>
          <div class="alert-title">${nomeAluno(a.aluno)}</div>
          <div class="alert-meta">${a.tipo} · ${riskChip(a.risco)} · ${a.data}</div>
          <div class="alert-desc">${a.desc}</div>
        </div>
      </div>`;
    }).join('') || '<div class="empty">Nenhum alerta</div>';
  }

  const recComp = [...DB.comportamentos].sort((a, b) => b.data.localeCompare(a.data)).slice(0, 5);
  const dashComp = document.getElementById('dash-comp');
  if (dashComp) {
    dashComp.innerHTML = recComp.map(c => {
      const cl = c.nivel === 'Grave' ? 'high' : c.nivel === 'Moderado' ? 'med' : 'low';
      return `<div class="alert-item">
        <div class="alert-icon ${cl}">${c.nivel === 'Grave' ? '🚨' : c.nivel === 'Moderado' ? '⚡' : 'ℹ'}</div>
        <div>
          <div class="alert-title">${nomeAluno(c.aluno)}</div>
          <div class="alert-meta">${nivelChip(c.nivel)} · ${c.data}</div>
          <div class="alert-desc">${c.desc}</div>
        </div>
      </div>`;
    }).join('') || '<div class="empty">Nenhuma ocorrência</div>';
  }

  renderDashAdvanced();
}

// ── RENDER TURMAS ────────────────────────────────────
function renderTurmas() {
  const tb = document.querySelector('#tbl-turmas tbody');
  if (!tb) return;
  const pds = DB.profDisciplinas.filter(p => p.prof === PROF_ID);
  tb.innerHTML = pds.map(pd => {
    const t = DB.turmas.find(x => x.id === pd.turma);
    const d = DB.disciplinas.find(x => x.id === pd.disc);
    const cnt = alunosDaTurma(pd.turma).length;
    return `<tr>
      <td><span class="tbl-link" onclick="verAlunos(${pd.turma})">${t ? t.nome : '—'}</span></td>
      <td>${t ? t.ano : '—'}</td>
      <td>${t ? t.turno : '—'}</td>
      <td>${d ? d.nome : '—'}</td>
      <td>${cnt}</td>
    </tr>`;
  }).join('') || '<tr><td colspan="5" class="empty">Nenhuma turma atribuída</td></tr>';
}

function verAlunos(turmaId) {
  const t = DB.turmas.find(x => x.id === turmaId);
  const alunos = alunosDaTurma(turmaId);
  const titleElem = document.getElementById('turma-alunos-title');
  if (titleElem) titleElem.textContent = `Alunos — ${t ? t.nome : ''}`;
  const tb = document.querySelector('#tbl-alunos-turma tbody');

  tb.innerHTML = alunos.map(a => {
    const faltas = DB.frequencias.filter(f => f.aluno === a.id && !f.pres).length;
    const notas = DB.notas.filter(n => n.aluno === a.id).map(n => n.valor);
    const media = notas.length ? (notas.reduce((s, v) => s + v, 0) / notas.length).toFixed(1) : '—';
    const mediaClass = notas.length ? notaClass(parseFloat(media)) : '';
    return `<tr>
      <td>${a.id}</td>
      <td>${a.nome}</td>
      <td>${statusChip(a.status)}</td>
      <td>${faltas > 3 ? `<b style="color:var(--danger)">${faltas}</b>` : faltas}</td>
      <td class="${mediaClass}">${media}</td>
    </tr>`;
  }).join('') || '<tr><td colspan="5" class="empty">Nenhum aluno</td></tr>';

  const section = document.getElementById('turma-alunos-section');
  if (section) {
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// ── RENDER FREQUÊNCIAS ───────────────────────────────
function renderFreq() {
  const tb = document.querySelector('#tbl-freq tbody');
  if (!tb) return;
  const ft = (document.getElementById('filtro-turma-freq') || {}).value || '';
  const fd = (document.getElementById('filtro-disc-freq') || {}).value || '';
  const fp = (document.getElementById('filtro-pres') || {}).value;

  let data = DB.frequencias;
  if (ft) data = data.filter(f => turmaDoAluno(f.aluno) == ft);
  if (fd) data = data.filter(f => f.disc == fd);
  if (fp !== '') data = data.filter(f => String(f.pres) === fp);

  tb.innerHTML = data.map(f => `<tr>
    <td>${f.data}</td>
    <td>${nomeAluno(f.aluno)}</td>
    <td>${nomeTurma(turmaDoAluno(f.aluno))}</td>
    <td>${nomeDisc(f.disc)}</td>
    <td>${f.pres
      ? '<span class="chip chip-green">Presente</span>'
      : '<span class="chip chip-red">Ausente</span>'}</td>
    <td><button class="btn btn-sm btn-danger"
      onclick="confirmDel(()=>{DB.frequencias=DB.frequencias.filter(x=>x.id!==${f.id});renderFreq();})">
      Excluir</button></td>
  </tr>`).join('') || '<tr><td colspan="6" class="empty">Nenhum registro</td></tr>';
}

// ── RENDER NOTAS ─────────────────────────────────────
function renderNotas() {
  const tb = document.querySelector('#tbl-notas tbody');
  if (!tb) return;
  const ft = (document.getElementById('filtro-turma-nota') || {}).value || '';
  const fa = (document.getElementById('filtro-aluno-nota') || {}).value || '';

  let data = DB.notas;
  if (ft) data = data.filter(n => turmaDoAluno(n.aluno) == ft);
  if (fa) data = data.filter(n => n.aluno == fa);

  tb.innerHTML = data.map(n => `<tr>
    <td>${nomeAluno(n.aluno)}</td>
    <td>${nomeTurma(turmaDoAluno(n.aluno))}</td>
    <td>Avaliação ${n.aval}</td>
    <td><span class="${notaClass(n.valor)}">${n.valor.toFixed(1)}</span></td>
    <td>${n.obs || '—'}</td>
    <td><button class="btn btn-sm btn-danger"
      onclick="confirmDel(()=>{DB.notas=DB.notas.filter(x=>x.id!==${n.id});renderNotas();})">
      Excluir</button></td>
  </tr>`).join('') || '<tr><td colspan="6" class="empty">Nenhum registro</td></tr>';
}

// ── RENDER COMPORTAMENTOS ────────────────────────────
function renderComp() {
  const tb = document.querySelector('#tbl-comp tbody');
  if (!tb) return;
  const fn = (document.getElementById('filtro-nivel-comp') || {}).value || '';
  const ft = (document.getElementById('filtro-turma-comp') || {}).value || '';

  let data = DB.comportamentos;
  if (fn) data = data.filter(c => c.nivel === fn);
  if (ft) data = data.filter(c => turmaDoAluno(c.aluno) == ft);

  tb.innerHTML = data.map(c => `<tr>
    <td>${c.data}</td>
    <td>${nomeAluno(c.aluno)}</td>
    <td>${nomeTurma(turmaDoAluno(c.aluno))}</td>
    <td>${nivelChip(c.nivel)}</td>
    <td style="max-width:260px;font-size:12px">${c.desc}</td>
    <td><button class="btn btn-sm btn-danger"
      onclick="confirmDel(()=>{DB.comportamentos=DB.comportamentos.filter(x=>x.id!==${c.id});renderComp();})">
      Excluir</button></td>
  </tr>`).join('') || '<tr><td colspan="6" class="empty">Nenhum registro</td></tr>';
}

// ── RENDER ALERTAS ───────────────────────────────────
function renderAlertas() {
  const tb = document.querySelector('#tbl-alertas tbody');
  if (!tb) return;
  const ft = (document.getElementById('filtro-tipo-alerta') || {}).value || '';
  const fr = (document.getElementById('filtro-risco') || {}).value || '';

  let data = DB.alertas;
  if (ft) data = data.filter(a => a.tipo === ft);
  if (fr) data = data.filter(a => a.risco === fr);

  tb.innerHTML = data.map(a => `<tr>
    <td>${a.data}</td>
    <td>${nomeAluno(a.aluno)}</td>
    <td>${nomeTurma(turmaDoAluno(a.aluno))}</td>
    <td><span class="chip chip-blue">${a.tipo}</span></td>
    <td>${riskChip(a.risco)}</td>
    <td style="max-width:260px;font-size:12px">${a.desc}</td>
  </tr>`).join('') || '<tr><td colspan="6" class="empty">Nenhum alerta</td></tr>';
}

function updateAlertaCount() {
  const n = DB.alertas.filter(a => a.risco === 'Alto').length;
  const alertaCount = document.getElementById('alerta-count');
  const navBadge = document.getElementById('nav-badge');
  if (alertaCount) alertaCount.textContent = n;
  if (navBadge) navBadge.textContent = n;
}

// ── SAVE FUNCTIONS ───────────────────────────────────
function salvarFreq() {
  const alunoId = parseInt(document.getElementById('f-aluno').value);
  const discId = parseInt(document.getElementById('f-disc').value);
  const data = document.getElementById('f-data').value;
  const pres = document.getElementById('f-pres-val').value === 'true';
  if (!alunoId || !discId || !data) { toast('Preencha todos os campos.', 'error'); return; }
  DB.frequencias.push({ id: nid('frequencias'), data, pres, aluno: alunoId, disc: discId });
  closeModal('modal-freq');
  renderFreq();
  toast('Frequência registrada!');
}

function salvarNota() {
  const alunoId = parseInt(document.getElementById('n-aluno').value);
  const aval = parseInt(document.getElementById('n-aval').value);
  const valor = parseFloat(document.getElementById('n-val').value);
  const obs = document.getElementById('n-obs').value.trim();
  if (!alunoId || isNaN(valor) || isNaN(aval)) { toast('Preencha todos os campos.', 'error'); return; }
  if (valor < 0 || valor > 10) { toast('Nota deve ser entre 0 e 10.', 'error'); return; }
  DB.notas.push({ id: nid('notas'), valor, obs: obs || null, aluno: alunoId, aval });
  closeModal('modal-nota');
  const nAval = document.getElementById('n-aval');
  const nVal = document.getElementById('n-val');
  const nObs = document.getElementById('n-obs');
  if (nAval) nAval.value = '';
  if (nVal) nVal.value = '';
  if (nObs) nObs.value = '';
  renderNotas();
  toast('Nota lançada com sucesso!');
}

function salvarComp() {
  const alunoId = parseInt(document.getElementById('c-aluno').value);
  const data = document.getElementById('c-data').value;
  const nivel = document.getElementById('c-nivel').value;
  const desc = document.getElementById('c-desc').value.trim();
  if (!alunoId || !data || !desc) { toast('Preencha todos os campos.', 'error'); return; }
  DB.comportamentos.push({ id: nid('comportamentos'), data, desc, nivel, aluno: alunoId, prof: PROF_ID });
  closeModal('modal-comp');
  const cDesc = document.getElementById('c-desc');
  if (cDesc) cDesc.value = '';
  renderComp();
  toast('Ocorrência registrada!', 'warn');
}

// ── RENDER ALL ───────────────────────────────────────
function renderAll() {
  renderTurmas();
  renderFreq();
  renderNotas();
  renderComp();
  renderAlertas();
  updateAlertaCount();
}

// ── RELATÓRIOS E MÉTRICAS ────────────────────────────
function mediaAluno(alunoId) {
  const notas = DB.notas
    .filter(n => n.aluno === alunoId)
    .map(n => n.valor);

  if (!notas.length) return 0;

  return notas.reduce((s, v) => s + v, 0) / notas.length;
}

function percentualFreqAluno(alunoId) {
  const regs = DB.frequencias.filter(f => f.aluno === alunoId);

  if (!regs.length) return 100;

  const pres = regs.filter(f => f.pres).length;
  return (pres / regs.length) * 100;
}

function alunosRisco() {
  return meusAlunos().filter(a => {
    const media = mediaAluno(a.id);
    const freq = percentualFreqAluno(a.id);

    return media < 6 || freq < 75;
  });
}

function topAlunos(limit = 5) {
  return [...meusAlunos()]
    .map(a => ({
      ...a,
      media: mediaAluno(a.id)
    }))
    .sort((a, b) => b.media - a.media)
    .slice(0, limit);
}

function alunosCriticos(limit = 5) {
  return [...meusAlunos()]
    .map(a => ({
      ...a,
      media: mediaAluno(a.id),
      freq: percentualFreqAluno(a.id)
    }))
    .sort((a, b) => {
      if (a.media !== b.media) return a.media - b.media;
      return a.freq - b.freq;
    })
    .slice(0, limit);
}

// ── BUSCA GLOBAL ─────────────────────────────────────
function buscarGlobal(txt) {
  txt = txt.toLowerCase().trim();

  if (!txt) {
    renderAll();
    return;
  }

  const notas = DB.notas.filter(n =>
    nomeAluno(n.aluno).toLowerCase().includes(txt)
  );

  const freq = DB.frequencias.filter(f =>
    nomeAluno(f.aluno).toLowerCase().includes(txt)
  );

  const comps = DB.comportamentos.filter(c =>
    nomeAluno(c.aluno).toLowerCase().includes(txt) ||
    c.desc.toLowerCase().includes(txt)
  );

  const alerts = DB.alertas.filter(a =>
    nomeAluno(a.aluno).toLowerCase().includes(txt) ||
    a.desc.toLowerCase().includes(txt)
  );

  renderBuscaNotas(notas);
  renderBuscaFreq(freq);
  renderBuscaComp(comps);
  renderBuscaAlertas(alerts);
}

function renderBuscaNotas(data) {
  const tb = document.querySelector('#tbl-notas tbody');
  if (!tb) return;

  tb.innerHTML = data.map(n => `
    <tr>
      <td>${nomeAluno(n.aluno)}</td>
      <td>${nomeTurma(turmaDoAluno(n.aluno))}</td>
      <td>Avaliação ${n.aval}</td>
      <td><span class="${notaClass(n.valor)}">${n.valor.toFixed(1)}</span></td>
      <td>${n.obs || '—'}</td>
      <td>—</td>
    </tr>
`).join('');
}

function renderBuscaFreq(data) {
  const tb = document.querySelector('#tbl-freq tbody');
  if (!tb) return;

  tb.innerHTML = data.map(f => `
    <tr>
      <td>${f.data}</td>
      <td>${nomeAluno(f.aluno)}</td>
      <td>${nomeTurma(turmaDoAluno(f.aluno))}</td>
      <td>${nomeDisc(f.disc)}</td>
      <td>
        ${f.pres
      ? '<span class="chip chip-green">Presente</span>'
      : '<span class="chip chip-red">Ausente</span>'}
      </td>
      <td>—</td>
    </tr>
  `).join('');
}

function renderBuscaComp(data) {
  const tb = document.querySelector('#tbl-comp tbody');
  if (!tb) return;

  tb.innerHTML = data.map(c => `
    <tr>
      <td>${c.data}</td>
      <td>${nomeAluno(c.aluno)}</td>
      <td>${nomeTurma(turmaDoAluno(c.aluno))}</td>
      <td>${nivelChip(c.nivel)}</td>
      <td>${c.desc}</td>
      <td>—</td>
    </tr>
  `).join('');
}

function renderBuscaAlertas(data) {
  const tb = document.querySelector('#tbl-alertas tbody');
  if (!tb) return;

  tb.innerHTML = data.map(a => `
    <tr>
      <td>${a.data}</td>
      <td>${nomeAluno(a.aluno)}</td>
      <td>${nomeTurma(turmaDoAluno(a.aluno))}</td>
      <td><span class="chip chip-blue">${a.tipo}</span></td>
      <td>${riskChip(a.risco)}</td>
      <td>${a.desc}</td>
    </tr>
  `).join('');
}

// ── DASHBOARD AVANÇADO ───────────────────────────────
function renderDashAdvanced() {
  const top = topAlunos();
  const criticos = alunosCriticos();

  const topBox = document.getElementById('dash-top-alunos');
  if (topBox) {
    topBox.innerHTML = top.map(a => `
      <div class="ranking-item">
        <div>
          <div class="ranking-name">${a.nome}</div>
          <div class="ranking-meta">${nomeTurma(a.turma)}</div>
        </div>
        <div class="ranking-score nota-alta">${a.media.toFixed(1)}</div>
      </div>
    `).join('');
  }

  const critBox = document.getElementById('dash-criticos');
  if (critBox) {
    critBox.innerHTML = criticos.map(a => `
      <div class="ranking-item">
        <div>
          <div class="ranking-name">${a.nome}</div>
          <div class="ranking-meta">
            Média ${a.media.toFixed(1)} · Frequência ${a.freq.toFixed(0)}%
          </div>
        </div>
        <div>
          ${a.media < 5
        ? '<span class="chip chip-red">Crítico</span>'
        : '<span class="chip chip-yellow">Atenção</span>'}
        </div>
      </div>
    `).join('');
  }
}

// ── AUTO ALERTAS ─────────────────────────────────────
function gerarAlertasAutomaticos() {
  let alertasCriados = 0;

  meusAlunos().forEach(aluno => {
    const media = mediaAluno(aluno.id);
    const freq = percentualFreqAluno(aluno.id);

    const jaExisteNota = DB.alertas.some(a =>
      a.aluno === aluno.id &&
      a.tipo === 'Nota'
    );

    const jaExisteFreq = DB.alertas.some(a =>
      a.aluno === aluno.id &&
      a.tipo === 'Frequência'
    );

    if (media < 5 && !jaExisteNota) {
      DB.alertas.push({
        id: DB.alertas.length + 1,
        tipo: 'Nota',
        desc: `Média ${media.toFixed(1)} - Abaixo de 5.0. Risco de reprovação.`,
        risco: 'Alto',
        data: new Date().toISOString().split('T')[0],
        aluno: aluno.id
      });
      alertasCriados++;
    }

    if (freq < 75 && !jaExisteFreq) {
      DB.alertas.push({
        id: DB.alertas.length + 1,
        tipo: 'Frequência',
        desc: `Frequência ${freq.toFixed(0)}% - Abaixo do mínimo de 75%.`,
        risco: 'Alto',
        data: new Date().toISOString().split('T')[0],
        aluno: aluno.id
      });
      alertasCriados++;
    }
  });

  renderAlertas();
  updateAlertaCount();

  if (alertasCriados > 0) {
    toast(`${alertasCriados} alerta(s) automático(s) gerado(s)!`, 'warn');
  } else {
    toast('Nenhum novo alerta necessário. Todos os alunos estão dentro dos parâmetros.', 'success');
  }
}

// ── EXPORTAÇÃO ───────────────────────────────────────
function exportarNotasCSV() {
  const linhas = [
    ['Aluno', 'Turma', 'Avaliação', 'Nota', 'Observação']
  ];

  DB.notas.forEach(n => {
    linhas.push([
      nomeAluno(n.aluno),
      nomeTurma(turmaDoAluno(n.aluno)),
      `Avaliação ${n.aval}`,
      n.valor,
      n.obs || ''
    ]);
  });

  downloadCSV(linhas, 'notas.csv');
  toast('CSV de notas exportado!');
}

function exportarFreqCSV() {
  const linhas = [
    ['Data', 'Aluno', 'Turma', 'Disciplina', 'Presença']
  ];

  DB.frequencias.forEach(f => {
    linhas.push([
      f.data,
      nomeAluno(f.aluno),
      nomeTurma(turmaDoAluno(f.aluno)),
      nomeDisc(f.disc),
      f.pres ? 'Presente' : 'Ausente'
    ]);
  });

  downloadCSV(linhas, 'frequencias.csv');
  toast('CSV de frequências exportado!');
}

function downloadCSV(rows, filename) {
  const csv = rows
    .map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(';'))
    .join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ── EVENTOS ──────────────────────────────────────────
const searchInput = document.getElementById('global-search');
if (searchInput) {
  searchInput.addEventListener('keyup', e => {
    buscarGlobal(e.target.value);
  });
}

const autoAlertaBtn = document.getElementById('btn-auto-alerta');
if (autoAlertaBtn) {
  autoAlertaBtn.addEventListener('click', () => {
    gerarAlertasAutomaticos();
  });
}

// ── INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  atualizarNomeProfessor();
  populateSelects();
  renderAll();
  renderDash();
  renderDashAdvanced();
});