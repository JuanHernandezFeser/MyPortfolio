function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Función para desplazarse suavemente al principio de la página
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Mostrar u ocultar el botón al desplazarse
window.addEventListener('scroll', function() {
  var scrollTopBtn = document.getElementById('scrollTopBtn');
  if (window.scrollY > 300) { // Muestra el botón cuando el usuario ha desplazado 300px hacia abajo
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});