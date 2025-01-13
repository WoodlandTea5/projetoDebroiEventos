// Adiciona interatividade nas imagens da galeria
document.querySelectorAll('.thumbnails img').forEach(thumbnail => {
    thumbnail.addEventListener('click', (event) => {
        const mainImage = document.querySelector('.gallery img');
        mainImage.src = event.target.src;
    });
});

// Botões com alertas
document.querySelector('.agendar').addEventListener('click', () => {
    alert('Você será redirecionado para a página de agendamento.');
    window.location.href = "agendamento.html";
});

document.querySelector('.orcamento').addEventListener('click', () => {
    alert('Você será redirecionado para solicitar orçamento.');
    window.location.href = "orcamento.html";
});
