document.addEventListener("DOMContentLoaded", () => {

const slider = document.querySelector(".hero-slider");

if (!slider) return;

const images = [
    "images/banner.png",
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
    "images/17.jpg",
    "images/18.jpg"
];
images.forEach(src => {
    const img = new Image();
    img.src = src;
});
// Автоматическая адаптация
const isMobile = window.innerWidth <= 768;

const COLS = isMobile ? 6 : 12;
const ROWS = isMobile ? 4 : 7;

const CHANGE_TIME = 5000;
const TILE_DELAY = isMobile ? 25 : 35;
const ANIMATION = isMobile ? 500 : 700;

let current = 0;
let busy = false;

slider.style.backgroundImage = `url(${images[current]})`;
slider.style.backgroundSize = "cover";
slider.style.backgroundPosition = "center";

function buildTiles(){

    slider.querySelectorAll(".tile").forEach(tile => tile.remove());

    const width = slider.clientWidth;
    const height = slider.clientHeight;

    const tileWidth = width / COLS;
    const tileHeight = height / ROWS;

    const tiles = [];

    for(let y = 0; y < ROWS; y++){

        for(let x = 0; x < COLS; x++){

            const tile = document.createElement("div");

            tile.className = "tile";

            tile.style.left = `${x * tileWidth}px`;
            tile.style.top = `${y * tileHeight}px`;

            tile.style.width = `${Math.ceil(tileWidth)}px`;
            tile.style.height = `${Math.ceil(tileHeight)}px`;

            tile.style.backgroundImage = `url(${images[current]})`;

            tile.style.backgroundSize =
                `${width}px ${height}px`;

            tile.style.backgroundPosition =
                `-${x * tileWidth}px -${y * tileHeight}px`;

            slider.appendChild(tile);

            tiles.push({ tile, x, y });

        }

    }

    return tiles;
}
function changeSlide(){

    if(busy) return;

    busy = true;

    const next = (current + 1) % images.length;

    const tiles = buildTiles();

    slider.style.backgroundImage = `url(${images[next]})`;
    slider.style.backgroundSize = "cover";
    slider.style.backgroundPosition = "center";

    tiles.forEach(({ tile, x, y }) => {

        const delay = (x + y) * TILE_DELAY;

        setTimeout(() => {

            tile.style.transition =
                `transform ${ANIMATION}ms ease,
                 opacity ${ANIMATION}ms ease`;

            tile.style.transform =
                "rotateY(90deg) scale(.8)";

            tile.style.opacity = "0";

        }, delay);

    });

    const total =
        (COLS + ROWS - 2) * TILE_DELAY +
        ANIMATION + 100;

    setTimeout(() => {

        tiles.forEach(({ tile }) => tile.remove());

        current = next;

        busy = false;

    }, total);

}setInterval(changeSlide, CHANGE_TIME);

// Перестраиваем плитки при изменении размера окна
window.addEventListener("resize", () => {

    slider.querySelectorAll(".tile").forEach(tile => tile.remove());

    slider.style.backgroundImage = `url(${images[current]})`;
    slider.style.backgroundSize = "cover";
    slider.style.backgroundPosition = "center";

});

});