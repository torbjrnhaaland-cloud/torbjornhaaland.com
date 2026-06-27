document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Takk! Meldingen er klar til å sendes. Du kan implementere et backend-skjema her.');
      form.reset();
    });
  }
});
