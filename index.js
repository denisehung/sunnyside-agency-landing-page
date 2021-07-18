const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navigation__items");
    const navLink = document.querySelectorAll(".navigation__link");


    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    hamburger.addEventListener("click", mobileMenu);
    window.addEventListener("scroll", closeMenu);
    navLink.forEach(link => link.addEventListener("click", closeMenu));

    /* Smooth scrolling */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });