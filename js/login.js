document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
    if (email && password) {
        alert("Login realizado com sucesso!");
        window.location.href = "/html/agendamento.html";
    } else {
        alert("E-mail ou senha incorretos.");
    }
});
