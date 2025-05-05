document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleFiltersBtn');
    const filterForm = document.getElementById('filterForm');
  
    toggleBtn.addEventListener('click', () => {
      filterForm.classList.toggle('show');
      toggleBtn.textContent = filterForm.classList.contains('show') ? 'Hide Filters' : 'Show Filters';
    });
  });
  