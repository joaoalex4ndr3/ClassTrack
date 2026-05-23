let selectedRole = "";
 
const choiceSection = document.getElementById("choice-section");
const formSection = document.getElementById("form-section");
const selectedRoleText = document.getElementById("selected-role");
 
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
 
const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");
 
const loginError = document.getElementById("login-error");
const registerError = document.getElementById("register-error");
const registerSuccess = document.getElementById("register-success");
 
function selectRole(role) {
  selectedRole = role;
 
  choiceSection.classList.add("hidden");
  formSection.classList.remove("hidden");
 
  selectedRoleText.textContent = `Tipo de acesso escolhido: ${selectedRole}`;
}
 
function showLogin() {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
 
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
 
  clearMessages();
}
 
function showRegister() {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
 
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
 
  clearMessages();
}
 
function clearMessages() {
  loginError.textContent = "";
  registerError.textContent = "";
  registerSuccess.textContent = "";
}
 
function isValidGmail(email) {
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return gmailRegex.test(email);
}
 
function cleanCPF(cpf) {
  return cpf.replace(/\D/g, "");
}
 
function isValidCPF(cpf) {
  cpf = cleanCPF(cpf);
 
  if (cpf.length !== 11) return false;
  if (/^(\d)\1+$/.test(cpf)) return false;
 
  let sum = 0;
 
  for (let i = 0; i < 9; i++) {
    sum += Number(cpf[i]) * (10 - i);
  }
 
  let firstDigit = (sum * 10) % 11;
  if (firstDigit === 10) firstDigit = 0;
 
  if (firstDigit !== Number(cpf[9])) return false;
 
  sum = 0;
 
  for (let i = 0; i < 10; i++) {
    sum += Number(cpf[i]) * (11 - i);
  }
 
  let secondDigit = (sum * 10) % 11;
  if (secondDigit === 10) secondDigit = 0;
 
  return secondDigit === Number(cpf[10]);
}
 
function formatCPF(value) {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return value;
}

function formatPhone(value) {
  value = value.replace(/\D/g, "");

  if (value.length > 11) {
    value = value.slice(0, 11);
  }

  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else if (value.length > 6) {
    value = value.replace(/^(\d{2})(\d{4,5})(\d{0,4})$/, "($1) $2-$3");
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
  } else if (value.length > 0) {
    value = value.replace(/^(\d{0,2})$/, "($1");
  }

  return value;
}
 
document.getElementById("cpf").addEventListener("input", function () {
  this.value = formatCPF(this.value);
});

document.getElementById("phone").addEventListener("input", function () {
  this.value = formatPhone(this.value);
});
 
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
 
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();
 
  clearMessages();
 
  if (!email || !password) {
    loginError.textContent = "Preencha todos os campos.";
    return;
  }
 
  if (!isValidGmail(email)) {
    loginError.textContent = "O e-mail precisa ser um Gmail válido.";
    return;
  }
 
  alert(`Login realizado como ${selectedRole}!`);
});
 
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
 
  const cpf = document.getElementById("cpf").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();
 
  clearMessages();
 
  if (!cpf || !phone || !fullname || !email || !password || !confirmPassword) {
    registerError.textContent = "Preencha todos os campos.";
    return;
  }
 
  if (!isValidCPF(cpf)) {
    registerError.textContent = "CPF inválido. Informe um CPF real.";
    return;
  }
 
  if (!isValidGmail(email)) {
    registerError.textContent = "O e-mail precisa estar no formato Gmail: exemplo@gmail.com.";
    return;
  }
 
  if (password !== confirmPassword) {
    registerError.textContent = "As senhas não são iguais.";
    return;
  }
 
  registerSuccess.textContent = `Cadastro realizado com sucesso como ${selectedRole}!`;
 
  registerForm.reset();
});