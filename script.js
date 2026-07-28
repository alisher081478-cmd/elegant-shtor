// ===============================
// ELEGANT SHTOR PARDALARI
// Main Script
// ===============================

// ---------- PRELOADER ----------

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(() => {

            preloader.classList.add("hide");

        }, 5000);

    }

});


// ---------- HERO PARALLAX ----------

const hero = document.querySelector(".hero");

if (hero) {

    document.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;

        hero.style.backgroundPosition =
            `${50 + x}% ${50 + y}%`;

    });

}

// ---------- PARTICLES ----------

const particles = document.querySelector(".particles");

if (particles) {

    for (let i = 0; i < 45; i++) {

        const particle = document.createElement("span");

        const size = Math.random() * 6 + 2;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (6 + Math.random() * 8) + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        particles.appendChild(particle);

    }

}
// ---------- NAVBAR ----------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ---------- SMOOTH SCROLL ----------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ---------- SCROLL ANIMATION ----------

const hiddenElements = document.querySelectorAll(".hidden");

if (hiddenElements.length) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    hiddenElements.forEach(el => observer.observe(el));

}
// ---------- BUTTON HOVER ----------

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mousemove", e => {

        const rect = btn.getBoundingClientRect();

        btn.style.setProperty(
            "--x",
            `${e.clientX - rect.left}px`
        );

        btn.style.setProperty(
            "--y",
            `${e.clientY - rect.top}px`
        );

    });

});

// ---------- HEADER ANIMATION ----------

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    heroTitle.animate(
        [
            {
                opacity: 0,
                transform: "translateY(40px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 1200,
            easing: "ease-out",
            fill: "forwards"
        }
    );

}

console.log("✔ Script.js loaded successfully");
const video = document.getElementById("promoVideo");
const playButton = document.getElementById("playVideo");
const videoBox = document.querySelector(".video-box");

if (video && playButton && videoBox) {

    video.controls = false;

    playButton.addEventListener("click", () => {

        video.controls = true;

        videoBox.classList.add("playing");

        playButton.style.display = "none";

        video.play();

    });

}
