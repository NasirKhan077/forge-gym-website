// Mobile navigation
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => nav.classList.toggle('open'));
}

// Highlight a plan selected from the pricing page.
const params = new URLSearchParams(window.location.search);
const selectedPlan = params.get('plan');
const planSelect = document.getElementById('plan');
if (selectedPlan && planSelect) {
  const option = [...planSelect.options].find(o => o.textContent.startsWith(selectedPlan));
  if (option) planSelect.value = option.value;
}

// Form interaction.
// Google Analytics tracking can be added here later using your real GA4 Measurement ID.
const joinForm = document.getElementById('joinForm');
if (joinForm) {
  joinForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const message = document.getElementById('confirmMsg');
    if (message) message.style.display = 'block';

    // GA4 event placeholder:
    // gtag('event', 'join_form_submit', { form_name: 'forge_join_form' });
  });
}
