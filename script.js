const particles = document.querySelector(".particles");

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
const hero = document.querySelector(".hero");

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    hero.style.backgroundPosition =
        `${50 + x / 2}% ${50 + y / 2}%`;

});
window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("preloader")
            .classList.add("hide");

    }, 3500);

});
// ===== Lightbox =====

const images = document.querySelectorAll(".gallery .card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function showImage(index) {
    lightboxImg.src = images[index].src;
    currentIndex = index;
}

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        showImage(index);
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") {
        lightbox.classList.remove("active");
    }

    if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }
});
// ===== NAVBAR =====

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});
// ===== Scroll Animation =====

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach(el => observer.observe(el));