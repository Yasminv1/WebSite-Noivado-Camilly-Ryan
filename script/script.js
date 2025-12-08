document.addEventListener('DOMContentLoaded', () => {
  // =========================
  // MENU RESPONSIVO
  // =========================
  const toggle = document.getElementById('menu-toggle');
  const navLeft = document.querySelector('.nav-left');
  const navRight = document.querySelector('.nav-right');

  // Alternar menu ao clicar no botão ☰
  toggle.addEventListener('click', () => {
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
  });

  // Fecha o menu ao clicar em qualquer link (ótimo para mobile)
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLeft.classList.remove('active');
      navRight.classList.remove('active');
    });
  });

  // =========================
  // CARROSSEL AUTOMÁTICO
  // =========================
  const container = document.querySelector('.cards-container');
  const cards = container?.children;
  const totalCards = cards?.length || 0;
  let currentIndex = 0;

  function getCardsPerView() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  function updateCarousel() {
    if (!cards || totalCards === 0) return;

    const cardWidth = cards[0].offsetWidth;
    const cardsPerView = getCardsPerView();

    if (currentIndex > totalCards - cardsPerView) {
      currentIndex = 0; // reinicia o carrossel
    }

    container.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
    currentIndex++;
  }

  // Inicia carrossel automático a cada 3s
  setInterval(updateCarousel, 3000);

  // Reset ao redimensionar janela
  window.addEventListener('resize', () => {
    currentIndex = 0;
    updateCarousel();
  });

  updateCarousel(); // Iniciar ao carregar a página
});

// =========================
// CONTAGEM REGRESSIVA
// =========================
const countdown = () => {
  const endDate = new Date('2026-01-24T00:00:00'); // Data do noivado
  const now = new Date();
  const diff = endDate - now;

  const countdownEl = document.querySelector('.countdown');

  if (diff <= 0) {
    countdownEl.innerHTML = "<p>É hoje! 💍</p>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
};

// Atualizar contagem a cada 1 segundo
setInterval(countdown, 1000);
countdown(); // Iniciar imediatamente

