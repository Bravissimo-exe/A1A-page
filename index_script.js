
document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    dropdownBtn.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    dropdownBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        }
    });

    document.addEventListener('click', function(e) {
        if (!dropdownBtn.contains(e.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Añadimos un event listener al botón de menú
menuToggle.addEventListener("click", () => {
    // Alterna la clase "active" para mostrar/ocultar el menú
    menu.classList.toggle("active");
});