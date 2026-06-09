// ==================== DADOS ====================
let materias = [];
let professores = [];
let alunos = [];

// ==================== INICIALIZAÇÃO ====================
function inicializar() {
    // Carregar do localStorage ou dados padrão
    materias = JSON.parse(localStorage.getItem('materias') || JSON.stringify([
        { id: 1, nome: 'Matemática', descricao: 'Cálculo e Álgebra', carga: 80 },
        { id: 2, nome: 'Português', descricao: 'Língua Portuguesa', carga: 80 },
        { id: 3, nome: 'História', descricao: 'História Geral', carga: 60 }
    ]));
    
    professores = JSON.parse(localStorage.getItem('professores') || JSON.stringify([
        { id: 1, nome: 'Carlos Mendes', email: 'carlos@email.com', telefone: '(11) 98765-4321', materiasIds: [1] }
    ]));
    
    alunos = JSON.parse(localStorage.getItem('alunos') || JSON.stringify([
        { id: 1, nome: 'João Silva', email: 'joao@email.com', telefone: '(11) 99999-8888', turma: '1A', dataMatricula: '2024-01-15' }
    ]));
    
    // Salvar e renderizar
    salvarTodos();
    atualizarDashboard();
    renderizarMaterias();
    renderizarProfessores();
    renderizarAlunos();
    
    // Dados do usuário logado
    const userData = JSON.parse(localStorage.getItem('loggedUser') || '{}');
    const avatar = document.getElementById('direcao-avatar');
    const nome = document.getElementById('direcao-name');
    if (avatar) avatar.textContent = (userData.nome || 'DR').substring(0, 2).toUpperCase();
    if (nome) nome.textContent = userData.nome || 'Direção';
}

function salvarTodos() {
    localStorage.setItem('materias', JSON.stringify(materias));
    localStorage.setItem('professores', JSON.stringify(professores));
    localStorage.setItem('alunos', JSON.stringify(alunos));
}

// ==================== NAVEGAÇÃO ====================
function carregarPagina(pagina) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${pagina}`).classList.add('active');
    
    document.querySelectorAll('#sidebar nav a').forEach(a => a.classList.remove('active'));
    if (event && event.target) {
        const link = event.target.closest('a');
        if (link) link.classList.add('active');
    }
    
    const titulos = { dashboard: 'Início', materias: 'Matérias', professores: 'Professores', alunos: 'Alunos' };
    document.getElementById('page-title').innerText = titulos[pagina];
}

// ==================== DASHBOARD ====================
function atualizarDashboard() {
    document.getElementById('dash-stats').innerHTML = `
        <div class="stat-card"><div class="num">${materias.length}</div><div class="lbl">Matérias</div></div>
        <div class="stat-card"><div class="num">${professores.length}</div><div class="lbl">Professores</div></div>
        <div class="stat-card"><div class="num">${alunos.length}</div><div class="lbl">Alunos</div></div>
    `;
    
    document.getElementById('dash-materias').innerHTML = materias.slice(0, 3).map(m => 
        `<div style="padding:8px 0; border-bottom:1px solid #eee;"><strong>${m.nome}</strong><br><small>${m.carga}h</small></div>`
    ).join('') || '<div>Nenhuma matéria</div>';
    
    document.getElementById('dash-professores').innerHTML = professores.slice(0, 3).map(p => 
        `<div style="padding:8px 0; border-bottom:1px solid #eee;"><strong>${p.nome}</strong><br><small>${p.email}</small></div>`
    ).join('') || '<div>Nenhum professor</div>';
    
    document.getElementById('dash-alunos').innerHTML = alunos.slice(0, 3).map(a => 
        `<div style="padding:8px 0; border-bottom:1px solid #eee;"><strong>${a.nome}</strong><br><small>Turma ${a.turma}</small></div>`
    ).join('') || '<div>Nenhum aluno</div>';
}

// ==================== CRUD MATÉRIAS ====================
function renderizarMaterias() {
    const tbody = document.getElementById('lista-materias');
    if (!tbody) return;
    tbody.innerHTML = materias.map(m => `
        <tr>
            <td><strong>${m.nome}</strong></td>
            <td>${m.descricao || '-'}</td>
            <td>${m.carga}h</td>
            <td>
                <button class="btn-edit" onclick="editarMateria(${m.id})">Editar</button>
                <button class="btn-delete" onclick="apagarMateria(${m.id})">Excluir</button>
            </td>
        </tr>
    `).join('');
}

function abrirModalMateria() {
    document.getElementById('form-materia').reset();
    document.getElementById('materia-id').value = '';
    document.getElementById('modal-materia').classList.add('ativo');
}

function fecharModalMateria() {
    document.getElementById('modal-materia').classList.remove('ativo');
}

function editarMateria(id) {
    const m = materias.find(x => x.id === id);
    if (!m) return;
    document.getElementById('materia-id').value = id;
    document.getElementById('materia-nome').value = m.nome;
    document.getElementById('materia-descricao').value = m.descricao || '';
    document.getElementById('materia-carga').value = m.carga;
    document.getElementById('modal-materia').classList.add('ativo');
}

function salvarMateria(event) {
    event.preventDefault();
    const id = document.getElementById('materia-id').value;
    const nome = document.getElementById('materia-nome').value.trim();
    const descricao = document.getElementById('materia-descricao').value.trim();
    const carga = parseInt(document.getElementById('materia-carga').value);
    
    if (!nome || !carga) { alert('Preencha nome e carga horária!'); return; }
    
    if (id) {
        const idx = materias.findIndex(x => x.id === parseInt(id));
        if (idx !== -1) materias[idx] = { ...materias[idx], nome, descricao, carga };
    } else {
        const novoId = Math.max(...materias.map(x => x.id), 0) + 1;
        materias.push({ id: novoId, nome, descricao, carga });
    }
    
    salvarTodos();
    renderizarMaterias();
    atualizarDashboard();
    fecharModalMateria();
    alert('Matéria salva com sucesso!');
}

function apagarMateria(id) {
    if (!confirm('Remover esta matéria?')) return;
    materias = materias.filter(x => x.id !== id);
    salvarTodos();
    renderizarMaterias();
    atualizarDashboard();
    alert('Matéria removida!');
}

// ==================== CRUD PROFESSORES ====================
function renderizarProfessores() {
    const tbody = document.getElementById('lista-professores');
    if (!tbody) return;
    tbody.innerHTML = professores.map(p => {
        const nomesMaterias = p.materiasIds.map(id => materias.find(m => m.id === id)?.nome).filter(n => n).join(', ');
        return `
            <tr>
                <td><strong>${p.nome}</strong></td>
                <td>${p.email}</td>
                <td>${p.telefone || '-'}</td>
                <td>${nomesMaterias || '-'}</td>
                <td>
                    <button class="btn-edit" onclick="editarProfessor(${p.id})">Editar</button>
                    <button class="btn-delete" onclick="apagarProfessor(${p.id})">Excluir</button>
                </td>
            </tr>
        `;
    }).join('');
}

function carregarSelectMaterias() {
    const select = document.getElementById('professor-materias-select');
    if (!select) return;
    select.innerHTML = materias.map(m => `<option value="${m.id}">${m.nome}</option>`).join('');
}

function abrirModalProfessor() {
    carregarSelectMaterias();
    document.getElementById('form-professor').reset();
    document.getElementById('professor-id').value = '';
    document.getElementById('modal-professor').classList.add('ativo');
}

function fecharModalProfessor() {
    document.getElementById('modal-professor').classList.remove('ativo');
}

function editarProfessor(id) {
    const p = professores.find(x => x.id === id);
    if (!p) return;
    carregarSelectMaterias();
    document.getElementById('professor-id').value = id;
    document.getElementById('professor-nome').value = p.nome;
    document.getElementById('professor-email').value = p.email;
    document.getElementById('professor-telefone').value = p.telefone || '';
    
    const select = document.getElementById('professor-materias-select');
    Array.from(select.options).forEach(opt => {
        opt.selected = p.materiasIds.includes(parseInt(opt.value));
    });
    document.getElementById('modal-professor').classList.add('ativo');
}

function salvarProfessor(event) {
    event.preventDefault();
    const id = document.getElementById('professor-id').value;
    const nome = document.getElementById('professor-nome').value.trim();
    const email = document.getElementById('professor-email').value.trim();
    const telefone = document.getElementById('professor-telefone').value.trim();
    const select = document.getElementById('professor-materias-select');
    const materiasSelecionadas = Array.from(select.selectedOptions).map(o => parseInt(o.value));
    
    if (!nome || !email || materiasSelecionadas.length === 0) { alert('Preencha nome, email e pelo menos uma matéria!'); return; }
    
    if (id) {
        const idx = professores.findIndex(x => x.id === parseInt(id));
        if (idx !== -1) professores[idx] = { ...professores[idx], nome, email, telefone, materiasIds: materiasSelecionadas };
    } else {
        const novoId = Math.max(...professores.map(x => x.id), 0) + 1;
        professores.push({ id: novoId, nome, email, telefone, materiasIds: materiasSelecionadas });
    }
    
    salvarTodos();
    renderizarProfessores();
    atualizarDashboard();
    fecharModalProfessor();
    alert('Professor salvo com sucesso!');
}

function apagarProfessor(id) {
    if (!confirm('Remover este professor?')) return;
    professores = professores.filter(x => x.id !== id);
    salvarTodos();
    renderizarProfessores();
    atualizarDashboard();
    alert('Professor removido!');
}

// ==================== CRUD ALUNOS ====================
function renderizarAlunos() {
    const tbody = document.getElementById('lista-alunos');
    if (!tbody) return;
    tbody.innerHTML = alunos.map(a => `
        <tr>
            <td><strong>${a.nome}</strong></td>
            <td>${a.email}</td>
            <td>${a.turma}</td>
            <td>${a.telefone || '-'}</td>
            <td>${new Date(a.dataMatricula).toLocaleDateString('pt-BR')}</td>
            <td>
                <button class="btn-edit" onclick="editarAluno(${a.id})">Editar</button>
                <button class="btn-delete" onclick="apagarAluno(${a.id})">Excluir</button>
            </td>
        </tr>
    `).join('');
}

function abrirModalAluno() {
    document.getElementById('form-aluno').reset();
    document.getElementById('aluno-id').value = '';
    document.getElementById('modal-aluno').classList.add('ativo');
}

function fecharModalAluno() {
    document.getElementById('modal-aluno').classList.remove('ativo');
}

function editarAluno(id) {
    const a = alunos.find(x => x.id === id);
    if (!a) return;
    document.getElementById('aluno-id').value = id;
    document.getElementById('aluno-nome').value = a.nome;
    document.getElementById('aluno-email').value = a.email;
    document.getElementById('aluno-telefone').value = a.telefone || '';
    document.getElementById('aluno-turma').value = a.turma;
    document.getElementById('aluno-data').value = a.dataMatricula;
    document.getElementById('modal-aluno').classList.add('ativo');
}

function salvarAluno(event) {
    event.preventDefault();
    const id = document.getElementById('aluno-id').value;
    const nome = document.getElementById('aluno-nome').value.trim();
    const email = document.getElementById('aluno-email').value.trim();
    const telefone = document.getElementById('aluno-telefone').value.trim();
    const turma = document.getElementById('aluno-turma').value.trim();
    const dataMatricula = document.getElementById('aluno-data').value;
    
    if (!nome || !email || !turma || !dataMatricula) { alert('Preencha todos os campos obrigatórios!'); return; }
    
    if (id) {
        const idx = alunos.findIndex(x => x.id === parseInt(id));
        if (idx !== -1) alunos[idx] = { ...alunos[idx], nome, email, telefone, turma, dataMatricula };
    } else {
        const novoId = Math.max(...alunos.map(x => x.id), 0) + 1;
        alunos.push({ id: novoId, nome, email, telefone, turma, dataMatricula });
    }
    
    salvarTodos();
    renderizarAlunos();
    atualizarDashboard();
    fecharModalAluno();
    alert('Aluno salvo com sucesso!');
}

function apagarAluno(id) {
    if (!confirm('Remover este aluno?')) return;
    alunos = alunos.filter(x => x.id !== id);
    salvarTodos();
    renderizarAlunos();
    atualizarDashboard();
    alert('Aluno removido!');
}

// ==================== LOGOUT ====================
function logout() {
    if (confirm('Deseja sair do sistema?')) {
        localStorage.removeItem('loggedUser');
        window.location.href = '/index.html';
    }
}

// ==================== INICIAR ====================
document.addEventListener('DOMContentLoaded', function() {
    // Verificar login
    const loggedUser = localStorage.getItem('loggedUser');
    if (!loggedUser) { window.location.href = '/index.html'; return; }
    
    const userData = JSON.parse(loggedUser);
    if (userData.role !== 'Direção') {
        window.location.href = '/index.html';
        return;
    }
    
    inicializar();
});