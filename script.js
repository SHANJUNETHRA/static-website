/*==================================================
PORTFOLIO SCRIPT
Part 1
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
    Loader
    ==========================================*/

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.transition = "0.6s";

        }, 1200);

    });

    /*==========================================
    Typing Animation
    ==========================================*/

    const typingElement = document.getElementById("typing");

    const words = [

        "AI Engineer",
        "AWS Cloud Enthusiast",
        "Full Stack Developer",
        "Machine Learning Enthusiast",
        "Problem Solver"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect(){

        const currentWord = words[wordIndex];

        if(!deleting){

            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if(charIndex === currentWord.length){

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;

            }

        }else{

            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if(charIndex === 0){

                deleting = false;

                wordIndex++;

                if(wordIndex >= words.length){

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeEffect, deleting ? 60 : 120);

    }

    typeEffect();

    /*==========================================
    Scroll Progress Bar
    ==========================================*/

    const progressBar =
        document.getElementById("progress-bar");

    window.addEventListener("scroll", () => {

        const scrollTop =
            document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";

    });

    /*==========================================
    Navbar Background
    ==========================================*/

    const header =
        document.querySelector("header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 80){

            header.style.background =
            "rgba(5,8,22,.95)";

            header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.3)";

        }

        else{

            header.style.background =
            "rgba(10,15,35,.45)";

            header.style.boxShadow =
            "none";

        }

    });

    /*==========================================
    Mobile Menu
    ==========================================*/

    const menuBtn =
        document.querySelector(".menu-btn");

    const nav =
        document.querySelector("nav");

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        const icon =
            menuBtn.querySelector("i");

        if(nav.classList.contains("active")){

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        }

        else{

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

});
/*==================================================
PORTFOLIO SCRIPT
Part 2
==================================================*/

/*==========================================
Scroll Reveal Animation
==========================================*/

const revealElements = document.querySelectorAll(

    "section,.project-card,.skill-card,.certificate-card,.stat-card,.timeline-item,.info-card"

);

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.classList.add("show");
            element.classList.add("fade-up");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*==========================================
Active Navigation
==========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==========================================
Smooth Scroll
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*==========================================
Close Mobile Menu
==========================================*/

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});

/*==========================================
Button Hover Animation
==========================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

/*==========================================
Parallax Background
==========================================*/

const circles = document.querySelectorAll(".bg-circle");

window.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    circles.forEach((circle, index) => {

        const speed = (index + 1) * 15;

        circle.style.transform =

            `translate(${x * speed}px, ${y * speed}px)`;

    });

});

/*==========================================
Current Year
==========================================*/

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

console.log(
"%c🚀 Portfolio Loaded Successfully",
"color:#4F8CFF;font-size:16px;font-weight:bold;"
);
