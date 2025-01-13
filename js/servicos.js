// Função para exibir informações adicionais ao clicar em "Saiba Mais"
document.querySelectorAll('.saiba-mais').forEach(button => {
    button.addEventListener('click', () => {
        const servico = button.getAttribute('data-servico');
        alert(`Mais informações sobre ${servico.charAt(0).toUpperCase() + servico.slice(1)} serão exibidas em breve!`);
    });
});

// Alteração de cor do menu ao rolar a página
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#002366';
    } else {
        nav.style.backgroundColor = '#111';
    }
});
