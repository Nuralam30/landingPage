
function toggleNav(){
    const navbar = document.querySelectorAll('#navbarNav');
    navbar.forEach(nav => {
        nav.classList.toggle('show');
    });
}