console.log("gallery.js loaded");

const images = [
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
    "images/17.jpg",
    "images/18.jpg"
];

let current = 0;

const gallery = document.querySelector(".curtain-gallery");

const nextPhoto = document.getElementById("nextPhoto");
const leftPhoto = document.getElementById("leftPhoto");
const rightPhoto = document.getElementById("rightPhoto");

function changeGallery(){

    const next = (current + 1) % images.length;

    nextPhoto.src = images[next];

    gallery.classList.add("open");

    setTimeout(() => {

        leftPhoto.src = images[next];
        rightPhoto.src = images[next];

        gallery.classList.remove("open");

        current = next;

    },1200);

}

setInterval(changeGallery,5000);