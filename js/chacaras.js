document.querySelectorAll('.visita').forEach((button) => {
    button.addEventListener('click', () => {
        alert('Você será redirecionado para a página de agendamento!');
        window.location.href = "agendamento.html";
    });
});

document.querySelectorAll('.sobre').forEach((button) => {
    button.addEventListener('click', () => {
        alert('Aqui você encontrará mais informações sobre a chácara.');
    });
});
