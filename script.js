document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');

  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function(e) {
    if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
});