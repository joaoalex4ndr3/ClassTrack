let selectedRole = "";

const choiceSection = document.getElementById("choice-section");
const formSection = document.getElementById("form-section");
const selectedRoleText = document.getElementById("selected-role");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");

// Banco de dados de usuários (simulado)
const usersDB = {
    professores: [
        { cpf: "000.000.000-00", password: "123456", nome: "Carlos Eduardo Mendes", id: 1 }
    ],
    alunos: [
        { cpf: "111.111.111-11", password: "123456", nome: "João Silva", id: 1 }
    ],
    direcao: [
        { cpf: "222.222.222-22", password: "123456", nome: "Maria Diretora", id: 1 }
    ]
};

function selectRole(role) {
    selectedRole = role;
    choiceSection.classList.add("hidden");
    formSection.classList.remove("hidden");
    selectedRoleText.textContent = `Tipo de acesso: ${selectedRole}`;
}

function clearMessages() {
    loginError.textContent = "";
}

function limparCPF(cpf) {
    return cpf.replace(/\D/g, "");
}

function formatCPF(value) {
    value = value.replace(/\D/g, "");
    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    return value;
}

document.getElementById("login-cpf").addEventListener("input", function () {
    this.value = formatCPF(this.value);
});

function salvarUsuarioLogado(role, userData) {
    const userInfo = {
        role: role,
        ...userData,
        loginTime: new Date().toISOString()
    };
    localStorage.setItem("loggedUser", JSON.stringify(userInfo));
}

function fazerLogin(cpf, password, role) {
    const cpfLimpo = limparCPF(cpf);
    let userFound = null;

    if (role === "Professor") {
        userFound = usersDB.professores.find(u => limparCPF(u.cpf) === cpfLimpo && u.password === password);

        if (userFound) {
            salvarUsuarioLogado("Professor", { id: userFound.id, nome: userFound.nome, cpf: userFound.cpf });
            window.location.href = "../Professor/Professor.html";
            return true;
        }

    } else if (role === "Aluno") {
        userFound = usersDB.alunos.find(u => limparCPF(u.cpf) === cpfLimpo && u.password === password);

        if (userFound) {
            salvarUsuarioLogado("Aluno", { id: userFound.id, nome: userFound.nome, cpf: userFound.cpf });
            window.location.href = "../Aluno/Aluno.html"; 
            return true;
        }

    } else if (role === "Direção") {
        userFound = usersDB.direcao.find(u => limparCPF(u.cpf) === cpfLimpo && u.password === password);

        if (userFound) {
            salvarUsuarioLogado("Direção", { id: userFound.id, nome: userFound.nome, cpf: userFound.cpf });
            window.location.href = "../Direcao/Direcao.html";
            return true;
        }
    }

    return false;
}

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const cpf = document.getElementById("login-cpf").value.trim();
    const password = document.getElementById("login-password").value.trim();

    clearMessages();

    if (!selectedRole) {
        loginError.textContent = "Por favor, selecione um tipo de acesso primeiro.";
        return;
    }

    if (!cpf || !password) {
        loginError.textContent = "Preencha todos os campos.";
        return;
    }

    const loginSuccess = fazerLogin(cpf, password, selectedRole);

    if (!loginSuccess) {
        loginError.textContent = "CPF ou senha inválidos. Tente novamente.";
    }
});