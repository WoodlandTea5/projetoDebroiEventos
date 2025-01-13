document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@debroi.com" && password === "123456") {
        alert("Login realizado com sucesso!");
        window.location.href = "/html/agendamento.html";
    } else {
        alert("E-mail ou senha incorretos.");
    }
});
