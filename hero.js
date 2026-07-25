document.addEventListener("DOMContentLoaded", () => {

const slider = document.querySelector(".hero-slider");

if (!slider) return;

const images = [
    "images/banner.png",
    "images/hero2.jpg",
    "images/hero3.jpg",
    "images/hero4.jpg",
    "images/hero5.jpg"
];

const COLS = 12;
const ROWS = 7;

const CHANGE_TIME = 5000;
const TILE_DELAY = 35;
const ANIMATION = 700;

let current = 0;
let busy = false;

slider.innerHTML = "";

slider.style.backgroundImage = `url(${images[current]})`;
slider.style.backgroundSize = "cover";
slider.style.backgroundPosition = "center";

function buildTiles(){

    slider.querySelectorAll(".tile").forEach(t=>t.remove());

    const w = slider.clientWidth;
    const h = slider.clientHeight;

    const tw = w / COLS;
    const th = h / ROWS;

    const tiles = [];

    for(let y=0;y<ROWS;y++){

        for(let x=0;x<COLS;x++){

            const tile = document.createElement("div");

            tile.className="tile";

            tile.style.left = `${x*tw}px`;
            tile.style.top = `${y*th}px`;

            tile.style.width = `${Math.ceil(tw)}px`;
            tile.style.height = `${Math.ceil(th)}px`;

            tile.style.backgroundImage =
            `url(${images[current]})`;

            tile.style.backgroundSize =
            `${w}px ${h}px`;

            tile.style.backgroundPosition =
            `-${x*tw}px -${y*th}px`;

            slider.appendChild(tile);

            tiles.push({
                el:tile,
                x,
                y
            });

        }

    }

    return tiles;

}
function changeSlide(){

    if(busy) return;

    busy = true;

    const next = (current + 1) % images.length;

    const tiles = buildTiles();

    slider.style.backgroundImage =
    `url(${images[next]})`;

    slider.style.backgroundSize = "cover";
    slider.style.backgroundPosition = "center";

    tiles.forEach(({el,x,y})=>{

        const delay = (x + y) * TILE_DELAY;

        setTimeout(()=>{

            el.style.transition =
            `transform ${ANIMATION}ms ease,
             opacity ${ANIMATION}ms ease`;

            el.style.transform =
            "rotateY(90deg) scale(.8)";

            el.style.opacity = "0";

        },delay);

    });

    const total =
    (COLS + ROWS - 2) * TILE_DELAY +
    ANIMATION + 50;

    setTimeout(()=>{

        tiles.forEach(t=>t.el.remove());

        current = next;

        busy = false;

    },total);

}

setInterval(changeSlide, CHANGE_TIME);
});