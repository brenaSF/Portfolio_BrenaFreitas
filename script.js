const carrossel = document.querySelector('.carrossel');
  const slides = document.querySelectorAll('.carrossel .secao');

  let index = 0;

  function nextSlide() {
    index++;
    if (index === slides.length) {
      index = 0;
    }
    updateSlide();
  }

  function updateSlide() {
    const translateValue = -index * 30 + '%';
    carrossel.style.transform = 'translateX(' + translateValue + ')';
  }

  setInterval(nextSlide, 3000); 


function switchTab(event, tabId) {
    // Pega o card do projeto mais próximo
    const card = event.currentTarget.closest('.portfolio-card-expanded');
    
    // Remove classe 'active' de todos os botões de aba do card
    const buttons = card.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Esconde todos os conteúdos de aba do card
    const contents = card.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Ativa o botão e a aba selecionados
    event.currentTarget.classList.add('active');
    card.querySelector(`#${tabId}`).classList.add('active');
}