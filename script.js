document.getElementById("menu-btn").addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 80, // Adjust 80px to match your header height
            behavior: 'smooth'
        });
    });
});