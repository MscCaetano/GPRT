document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    
    learnMoreBtn.addEventListener('click', () => {
        window.location.href = '#conteudo';
    });

    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Obrigado por entrar em contato! Sua mensagem foi recebida.');
        contactForm.reset();
    });
});
