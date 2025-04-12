// Select all the service cards
const serviceCards = document.querySelectorAll('.service-card');

// Add hover effect and click event listener to each card
serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });

  card.addEventListener('click', () => {
    alert(`You clicked on ${card.querySelector('h3').textContent}!`);
  });
});
