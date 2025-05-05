document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleHowItWorks');
    const section = document.getElementById('howItWorksSection');
  
    toggleButton.addEventListener('click', () => {
      section.classList.toggle('show');
      toggleButton.textContent = section.classList.contains('show') ? 'Hide How It Works' : 'Show How It Works';
    });
  });
  