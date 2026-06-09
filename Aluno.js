// =====================================================
//  ClassTrack — Visão do Aluno
// =====================================================
 
const ALUNO_LOGADO = window.alunoLogado || { id: 1, nome: 'João Silva' };
const ALUNO_ID = ALUNO_LOGADO.id || 1;
 
const DB = {
  aluno: { id: 1, nome: 'João Silva', turma: 1, status: 'Ativo' },
 
  turmas: [
    { id: 1, nome: 'ADS - 1º Semestre A', ano: 2024, turno: 'Matutino' },
    { id: 2, nome: 'ADS - 1º Semestre B', ano: 2024, turno: 'Noturno' },
  ],
 
  disciplinas: [
    { id: 1, nome: 'Algoritmos e Lógica de Programação', ch: 80 },
    { id: 2, nome: 'Banco de Dados',                    ch: 80 },
    { id: 3, nome: 'Programação Orientada a Objetos',   ch: 80 },
    { id: 4, nome: 'Engenharia de Software',            ch: 60 },
    { id: 5, nome: 'Desenvolvimento Web',               ch: 80 },
  ],
 
  notas: [
    { id: 1,  disc: 1, aval: 1, valor: 7.5, obs: null },
    { id: 2,  disc: 1, aval: 2, valor: 8.0, obs: null },
    { id: 3,  disc: 2, aval: 1, valor: 6.0, obs: 'Abaixo da média' },
    { id: 4,  disc: 2, aval: 2, valor: 7.0, obs: null },
    { id: 5,  disc: 3, aval: 1, valor: 9.0, obs: null },
    { id: 6,  disc: 3, aval: 2, valor: 8.5, obs: null },
    { id: 7,  disc: 4, aval: 1, valor: 4.5, obs: 'Dificuldade no conteúdo' },
    { id: 8,  disc: 4, aval: 2, valor: 5.5, obs: null },
    { id: 9,  disc: 5, aval: 1, valor: 8.0, obs: null },
    { id: 10, disc: 5, aval: 2, valor: 9.5, obs: null },
  ],
 
  frequencias: [
    { id: 1,  data: '2024-03-04', disc: 1, pres: true  },
    { id: 2,  data: '2024-03-11', disc: 1, pres: true  },
    { id: 3,  data: '2024-03-18', disc: 1, pres: false },
    { id: 4,  data: '2024-03-25', disc: 1, pres: true  },
    { id: 5,  data: '2024-04-01', disc: 1, pres: true  },
    { id: 6,  data: '2024-03-04', disc: 2, pres: true  },
    { id: 7,  data: '2024-03-11', disc: 2, pres: false },
    { id: 8,  data: '2024-03-18', disc: 2, pres: false },
    { id: 9,  data: '2024-03-25', disc: 2, pres: true  },
    { id: 10, data: '2024-04-01', disc: 2, pres: true  },
    { id: 11, data: '2024-03-04', disc: 3, pres: true  },
    { id: 12, data: '2024-03-11', disc: 3, pres: true  },
    { id: 13, data: '2024-03-18', disc: 3, pres: true  },
    { id: 14, data: '2024-03-25', disc: 3, pres: true  },
    { id: 15, data: '2024-04-01', disc: 3, pres: false },
    { id: 16, data: '2024-03-04', disc: 4, pres: true  },
    { id: 17, data: '2024-03-11', disc: 4, pres: false },
    { id: 18, data: '2024-03-18', disc: 4, pres: false },
    { id: 19, data: '2024-03-25', disc: 4, pres: false },
    { id: 20, data: '2024-04-01', disc: 4, pres: true  },
    { id: 21, data: '2024-03-04', disc: 5, pres: true  },
    { id: 22, data: '2024-03-11', disc: 5, pres: true  },
    { id: 23, data: '2024-03-18', disc: 5, pres: true  },
    { id: 24, data: '2024-03-25', disc: 5, pres: true  },
    { id: 25, data: '2024-04-01', disc: 5, pres: true  },
  ],
 
  ocorrencias: [
    { id: 1, data: '2024-03-06', nivel: 'Leve',     desc: 'Uso de celular durante a aula.',          prof: 'Carlos Mendes' },
    { id: 2, data: '2024-03-20', nivel: 'Moderado', desc: 'Não entregou atividade no prazo.',         prof: 'Ana Lima' },
  ],
 
  alertas: [
    { id: 1, tipo: 'Frequência', risco: 'Alto',  data: '2024-04-10', desc: 'Frequência abaixo de 75% em Banco de Dados.' },
    { id: 2, tipo: 'Nota',       risco: 'Alto',  data: '2024-04-05', desc: 'Nota abaixo de 5.0 em Engenharia de Software.' },
    { id: 3, tipo: 'Nota',       risco: 'Médio', data: '2024-04-08', desc: 'Média parcial abaixo de 6.0 em Banco de Dados.' },
    { id: 4, tipo: 'Frequência', risco: 'Médio', data: '2024-04-12', desc: 'Frequência em atenção em Engenharia de Software.' },
  ],
};
 
// ── HELPERS ──────────────────────────────────────────
function nomeDisc(id) {
  const d = DB.disciplinas.find(x => x.id == id);
  return d ? d.nome : '—';
}
 
function mediaDisc(discId) {
  const notas = DB.notas.filter(n => n.disc == discId).map(n => n.valor);
  if (!notas.length) return null;
  return notas.reduce((s, v) => s + v, 0) / notas.length;
}
 
function freqDisc(discId) {
  const regs = DB.frequencias.filter(f => f.disc == discId);
  if (!regs.length) return 100;
  return (regs.filter(f => f.pres).length / regs.length) * 100;
}
 
function mediaGeral() {
  const todas = DB.notas.map(n => n.valor);
  if (!todas.length) return 0;
  return todas.reduce((s, v) => s + v, 0) / todas.length;
}
 
function freqGeral() {
  if (!DB.frequencias.length) return 100;
  return (DB.frequencias.filter(f => f.pres).length / DB.frequencias.length) * 100;
}
 
function notaClass(v) {
  return v >= 7 ? 'nota-alta' : v >= 5 ? 'nota-media' : 'nota-baixa';
}
 
function riskChip(r) {
  const m = { Alto: 'chip-red', Médio: 'chip-yellow', Baixo: 'chip-green' };
  return `<span class="chip ${m[r] || 'chip-grey'}">${r}</span>`;
}
 
function nivelChip(n) {
  const m = { Leve: 'chip-blue', Moderado: 'chip-yellow', Grave: 'chip-red' };
  return `<span class="chip ${m[n] || 'chip-grey'}">${n}</span>`;
}
 
function progressColor(val, tipo) {
  if (tipo === 'nota') return val >= 7 ? 'green' : val >= 5 ? 'yellow' : 'red';
  if (tipo === 'freq') return val >= 75 ? 'green' : val >= 60 ? 'yellow' : 'red';
  return 'blue';
}
 
function toast(msg, type = '') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'show ' + type;
  setTimeout(() => t.className = '', 2800);
}
 
// ── NAVIGATION ───────────────────────────────────────
const pageTitles = {
  dashboard:   'Início',
  materias:    'Minhas Matérias',
  notas:       'Notas',
  frequencia:  'Frequência',
  desempenho:  'Desempenho',
  ocorrencias: 'Ocorrências',
  alertas:     'Alertas',
};
 
function go(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#sidebar nav a').forEach(a => a.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  document.querySelectorAll('#sidebar nav a').forEach(a => {
    if (a.getAttribute('onclick') && a.getAttribute('onclick').includes("'" + page + "'"))
      a.classList.add('active');
  });
  const titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = pageTitles[page] || page;
  if (page === 'dashboard')  renderDash();
  if (page === 'notas')      renderNotas();
  if (page === 'frequencia') renderFreq();
  if (page === 'desempenho') renderDesempenho();
  if (page === 'ocorrencias') renderOcorrencias();
  if (page === 'alertas')    renderAlertas();
  if (page === 'materias')   renderMaterias();
}
 
// ── LOGOUT ───────────────────────────────────────────
function logout() {
  localStorage.removeItem('loggedUser');
  window.location.href = 'index.html';
}
 
// ── INIT UI ──────────────────────────────────────────
function initUI() {
  const nome = ALUNO_LOGADO.nome || DB.aluno.nome;
  const nameEl = document.getElementById('aluno-name');
  const avatarEl = document.getElementById('aluno-avatar');
  if (nameEl) nameEl.textContent = nome;
  if (avatarEl) {
    avatarEl.textContent = nome.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  }
 
  const turma = DB.turmas.find(t => t.id === DB.aluno.turma);
  const turmaEl = document.getElementById('topbar-turma');
  if (turmaEl && turma) turmaEl.textContent = turma.nome + ' · ' + turma.turno;
 
  populateDiscFiltros();
  updateAlertaCount();
}
 
function populateDiscFiltros() {
  const opts = DB.disciplinas.map(d => `<option value="${d.id}">${d.nome}</option>`).join('');
  ['filtro-disc-nota', 'filtro-disc-freq'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '<option value="">Todas as matérias</option>' + opts;
  });
}
 
function updateAlertaCount() {
  const n = DB.alertas.filter(a => a.risco === 'Alto').length;
  const countEl = document.getElementById('alerta-count');
  const badgeEl = document.getElementById('nav-badge');
  if (countEl) countEl.textContent = n;
  if (badgeEl) badgeEl.textContent = n;
}
 
// ── DASHBOARD ────────────────────────────────────────
function renderDash() {
  const mg = mediaGeral();
  const fg = freqGeral();
  const alertasAltos = DB.alertas.filter(a => a.risco === 'Alto').length;
  const faltas = DB.frequencias.filter(f => !f.pres).length;
 
  const statsEl = document.getElementById('dash-stats');
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="stat-card"><div class="num">${mg.toFixed(1)}</div><div class="lbl">Média Geral</div></div>
      <div class="stat-card ${fg < 75 ? 'red' : fg < 85 ? 'yellow' : 'green'}">
        <div class="num">${fg.toFixed(0)}%</div><div class="lbl">Frequência Geral</div>
      </div>
      <div class="stat-card yellow"><div class="num">${faltas}</div><div class="lbl">Faltas Registradas</div></div>
      <div class="stat-card ${alertasAltos > 0 ? 'red' : 'green'}">
        <div class="num">${alertasAltos}</div><div class="lbl">Alertas de Risco Alto</div>
      </div>
      <div class="stat-card"><div class="num">${DB.disciplinas.length}</div><div class="lbl">Matérias</div></div>
    `;
  }
 
  // Desempenho por matéria
  const desempEl = document.getElementById('dash-desempenho');
  if (desempEl) {
    desempEl.innerHTML = DB.disciplinas.map(d => {
      const media = mediaDisc(d.id);
      const val = media !== null ? media : 0;
      const pct = (val / 10) * 100;
      const color = progressColor(val, 'nota');
      return `
        <div class="progress-row">
          <div class="progress-label">
            <span>${d.nome}</span>
            <span class="${notaClass(val)}">${media !== null ? val.toFixed(1) : '—'}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill ${color}" style="width:${pct}%"></div>
          </div>
        </div>`;
    }).join('');
  }
 
  // Alertas recentes
  const alertasEl = document.getElementById('dash-alertas');
  if (alertasEl) {
    const recentes = [...DB.alertas].sort((a, b) => b.data.localeCompare(a.data)).slice(0, 4);
    alertasEl.innerHTML = recentes.map(a => {
      const cl = a.risco === 'Alto' ? 'high' : a.risco === 'Médio' ? 'med' : 'low';
      const icon = a.risco === 'Alto'
        ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
      return `<div class="alert-item">
        <div class="alert-icon ${cl}">${icon}</div>
        <div>
          <div class="alert-title">${a.tipo}</div>
          <div class="alert-meta">${riskChip(a.risco)} · ${a.data}</div>
          <div class="alert-desc">${a.desc}</div>
        </div>
      </div>`;
    }).join('') || '<div class="empty">Nenhum alerta</div>';
  }
 
  // Frequência por matéria
  const freqEl = document.getElementById('dash-freq');
  if (freqEl) {
    freqEl.innerHTML = DB.disciplinas.map(d => {
      const pct = freqDisc(d.id);
      const color = progressColor(pct, 'freq');
      return `
        <div class="progress-row">
          <div class="progress-label">
            <span>${d.nome}</span>
            <span class="${pct < 75 ? 'nota-baixa' : pct < 85 ? 'nota-media' : 'nota-alta'}">${pct.toFixed(0)}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill ${color}" style="width:${pct}%"></div>
          </div>
        </div>`;
    }).join('');
  }
 
  // Ocorrências recentes
  const ocEl = document.getElementById('dash-ocorrencias');
  if (ocEl) {
    if (!DB.ocorrencias.length) {
      ocEl.innerHTML = '<div class="empty">Nenhuma ocorrência registrada</div>';
    } else {
      ocEl.innerHTML = DB.ocorrencias.slice(0, 3).map(o => {
        const cl = o.nivel === 'Grave' ? 'high' : o.nivel === 'Moderado' ? 'med' : 'low';
        return `<div class="alert-item">
          <div class="alert-icon ${cl}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <div>
            <div class="alert-title">${nivelChip(o.nivel)} · ${o.prof}</div>
            <div class="alert-meta">${o.data}</div>
            <div class="alert-desc">${o.desc}</div>
          </div>
        </div>`;
      }).join('');
    }
  }
}
 
// ── MATÉRIAS ─────────────────────────────────────────
function renderMaterias() {
  const el = document.getElementById('materias-grid');
  if (!el) return;
  el.innerHTML = DB.disciplinas.map(d => {
    const media = mediaDisc(d.id);
    const freq = freqDisc(d.id);
    const mediaStr = media !== null ? media.toFixed(1) : '—';
    const mediaClass = media !== null ? notaClass(media) : '';
    const freqClass = freq < 75 ? 'nota-baixa' : freq < 85 ? 'nota-media' : 'nota-alta';
    return `
      <div class="materia-card">
        <div class="mc-nome">${d.nome}</div>
        <div class="mc-ch">Carga horária: ${d.ch}h</div>
        <div class="mc-stats">
          <div class="mc-stat">
            <div class="val ${mediaClass}">${mediaStr}</div>
            <div class="key">Média</div>
          </div>
          <div class="mc-stat">
            <div class="val ${freqClass}">${freq.toFixed(0)}%</div>
            <div class="key">Frequência</div>
          </div>
          <div class="mc-stat">
            <div class="val">${DB.notas.filter(n => n.disc === d.id).length}</div>
            <div class="key">Avaliações</div>
          </div>
        </div>
      </div>`;
  }).join('');
}
 
// ── NOTAS ─────────────────────────────────────────────
function renderNotas() {
  const filtro = (document.getElementById('filtro-disc-nota') || {}).value || '';
  let data = DB.notas;
  if (filtro) data = data.filter(n => n.disc == filtro);
 
  const tb = document.querySelector('#tbl-notas tbody');
  if (!tb) return;
  tb.innerHTML = data.map(n => {
    const sit = n.valor >= 7
      ? '<span class="chip chip-green">Aprovado</span>'
      : n.valor >= 5
        ? '<span class="chip chip-yellow">Recuperação</span>'
        : '<span class="chip chip-red">Reprovado</span>';
    return `<tr>
      <td>${nomeDisc(n.disc)}</td>
      <td>Avaliação ${n.aval}</td>
      <td><span class="${notaClass(n.valor)}">${n.valor.toFixed(1)}</span></td>
      <td>${sit}</td>
      <td>${n.obs || '—'}</td>
    </tr>`;
  }).join('') || '<tr><td colspan="5" class="empty">Nenhuma nota registrada</td></tr>';
 
  // Stats
  const statsEl = document.getElementById('notas-stats');
  if (statsEl) {
    const vals = DB.notas.map(n => n.valor);
    const mg = vals.length ? (vals.reduce((s, v) => s + v, 0) / vals.length).toFixed(1) : '—';
    const aprov = DB.notas.filter(n => n.valor >= 7).length;
    const recup = DB.notas.filter(n => n.valor >= 5 && n.valor < 7).length;
    const reprov = DB.notas.filter(n => n.valor < 5).length;
    statsEl.innerHTML = `
      <div class="stat-card"><div class="num">${mg}</div><div class="lbl">Média Geral</div></div>
      <div class="stat-card green"><div class="num">${aprov}</div><div class="lbl">Aprovações</div></div>
      <div class="stat-card yellow"><div class="num">${recup}</div><div class="lbl">Recuperações</div></div>
      <div class="stat-card red"><div class="num">${reprov}</div><div class="lbl">Reprovações</div></div>
    `;
  }
}
 
// ── FREQUÊNCIA ────────────────────────────────────────
function renderFreq() {
  const filtro = (document.getElementById('filtro-disc-freq') || {}).value || '';
  let data = DB.frequencias;
  if (filtro) data = data.filter(f => f.disc == filtro);
  data = [...data].sort((a, b) => b.data.localeCompare(a.data));
 
  const tb = document.querySelector('#tbl-freq tbody');
  if (!tb) return;
  tb.innerHTML = data.map(f => `<tr>
    <td>${f.data}</td>
    <td>${nomeDisc(f.disc)}</td>
    <td>${f.pres
      ? '<span class="chip chip-green">Presente</span>'
      : '<span class="chip chip-red">Ausente</span>'}</td>
  </tr>`).join('') || '<tr><td colspan="3" class="empty">Nenhum registro</td></tr>';
 
  // Stats
  const statsEl = document.getElementById('freq-stats');
  if (statsEl) {
    const total = DB.frequencias.length;
    const pres = DB.frequencias.filter(f => f.pres).length;
    const ausen = total - pres;
    const pct = total ? ((pres / total) * 100).toFixed(0) : 100;
    statsEl.innerHTML = `
      <div class="stat-card"><div class="num">${total}</div><div class="lbl">Total de Aulas</div></div>
      <div class="stat-card green"><div class="num">${pres}</div><div class="lbl">Presenças</div></div>
      <div class="stat-card red"><div class="num">${ausen}</div><div class="lbl">Faltas</div></div>
      <div class="stat-card ${pct < 75 ? 'red' : pct < 85 ? 'yellow' : 'green'}">
        <div class="num">${pct}%</div><div class="lbl">Frequência Geral</div>
      </div>
    `;
  }
}
 
// ── DESEMPENHO ────────────────────────────────────────
function renderDesempenho() {
  // Stats
  const statsEl = document.getElementById('desemp-stats');
  const mg = mediaGeral();
  const fg = freqGeral();
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="stat-card ${mg < 5 ? 'red' : mg < 7 ? 'yellow' : 'green'}">
        <div class="num">${mg.toFixed(1)}</div><div class="lbl">Média Geral</div>
      </div>
      <div class="stat-card ${fg < 75 ? 'red' : fg < 85 ? 'yellow' : 'green'}">
        <div class="num">${fg.toFixed(0)}%</div><div class="lbl">Frequência Geral</div>
      </div>
      <div class="stat-card"><div class="num">${DB.notas.length}</div><div class="lbl">Avaliações</div></div>
      <div class="stat-card"><div class="num">${DB.disciplinas.length}</div><div class="lbl">Matérias</div></div>
    `;
  }
 
  // Médias por matéria
  const mediasEl = document.getElementById('desemp-medias');
  if (mediasEl) {
    mediasEl.innerHTML = DB.disciplinas.map(d => {
      const media = mediaDisc(d.id);
      const val = media !== null ? media : 0;
      const pct = (val / 10) * 100;
      const color = progressColor(val, 'nota');
      return `
        <div class="progress-row">
          <div class="progress-label">
            <span>${d.nome}</span>
            <span class="${notaClass(val)}">${media !== null ? val.toFixed(1) : '—'}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill ${color}" style="width:${pct}%"></div>
          </div>
        </div>`;
    }).join('');
  }
 
  // Frequência por matéria
  const freqEl = document.getElementById('desemp-freq');
  if (freqEl) {
    freqEl.innerHTML = DB.disciplinas.map(d => {
      const pct = freqDisc(d.id);
      const color = progressColor(pct, 'freq');
      const cls = pct < 75 ? 'nota-baixa' : pct < 85 ? 'nota-media' : 'nota-alta';
      return `
        <div class="progress-row">
          <div class="progress-label">
            <span>${d.nome}</span>
            <span class="${cls}">${pct.toFixed(0)}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill ${color}" style="width:${pct}%"></div>
          </div>
        </div>`;
    }).join('');
  }
 
  // Resumo semestre
  const resumoEl = document.getElementById('desemp-resumo');
  if (resumoEl) {
    const aprovadas = DB.disciplinas.filter(d => {
      const m = mediaDisc(d.id);
      const f = freqDisc(d.id);
      return m !== null && m >= 7 && f >= 75;
    }).length;
    const emRisco = DB.disciplinas.filter(d => {
      const m = mediaDisc(d.id);
      const f = freqDisc(d.id);
      return (m !== null && m < 5) || f < 75;
    }).length;
 
    resumoEl.innerHTML = `
      <div class="resumo-grid">
        <div class="resumo-card">
          <div class="rc-val">${mg.toFixed(1)}</div>
          <div class="rc-lbl">Média Geral</div>
          <div class="rc-status">${mg >= 7
            ? '<span class="chip chip-green">Ótimo</span>'
            : mg >= 5
              ? '<span class="chip chip-yellow">Atenção</span>'
              : '<span class="chip chip-red">Crítico</span>'}</div>
        </div>
        <div class="resumo-card">
          <div class="rc-val">${fg.toFixed(0)}%</div>
          <div class="rc-lbl">Frequência Geral</div>
          <div class="rc-status">${fg >= 85
            ? '<span class="chip chip-green">Ótimo</span>'
            : fg >= 75
              ? '<span class="chip chip-yellow">Atenção</span>'
              : '<span class="chip chip-red">Risco de Reprovação</span>'}</div>
        </div>
        <div class="resumo-card">
          <div class="rc-val">${aprovadas}</div>
          <div class="rc-lbl">Matérias Aprovadas</div>
          <div class="rc-status"><span class="chip chip-green">de ${DB.disciplinas.length}</span></div>
        </div>
        <div class="resumo-card">
          <div class="rc-val">${emRisco}</div>
          <div class="rc-lbl">Em Risco</div>
          <div class="rc-status">${emRisco > 0
            ? '<span class="chip chip-red">Requer atenção</span>'
            : '<span class="chip chip-green">Tudo certo</span>'}</div>
        </div>
      </div>`;
  }
}
 
// ── OCORRÊNCIAS ───────────────────────────────────────
function renderOcorrencias() {
  const tb = document.querySelector('#tbl-ocorrencias tbody');
  if (!tb) return;
  if (!DB.ocorrencias.length) {
    tb.innerHTML = '<tr><td colspan="4" class="empty">Nenhuma ocorrência registrada</td></tr>';
    return;
  }
  tb.innerHTML = DB.ocorrencias.map(o => `<tr>
    <td>${o.data}</td>
    <td>${nivelChip(o.nivel)}</td>
    <td style="max-width:300px;font-size:12px">${o.desc}</td>
    <td>${o.prof}</td>
  </tr>`).join('');
}
 
// ── ALERTAS ───────────────────────────────────────────
function renderAlertas() {
  const filtro = (document.getElementById('filtro-risco') || {}).value || '';
  let data = DB.alertas;
  if (filtro) data = data.filter(a => a.risco === filtro);
 
  const tb = document.querySelector('#tbl-alertas tbody');
  if (!tb) return;
  tb.innerHTML = data.map(a => `<tr>
    <td>${a.data}</td>
    <td><span class="chip chip-blue">${a.tipo}</span></td>
    <td>${riskChip(a.risco)}</td>
    <td style="max-width:300px;font-size:12px">${a.desc}</td>
  </tr>`).join('') || '<tr><td colspan="4" class="empty">Nenhum alerta</td></tr>';
}
 
// ── INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initUI();
  renderDash();
});