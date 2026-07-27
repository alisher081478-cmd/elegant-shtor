const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicToggle");

musicButton.addEventListener("click", async () => {
    try {
        if (bgMusic.paused) {
            await bgMusic.play();
            musicButton.textContent = "🔊";
        } else {
            bgMusic.pause();
            musicButton.textContent = "🎵";
        }
    } catch (e) {
        console.error(e);
    }
});