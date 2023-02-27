const dot = document.querySelector("[data-dot]");
const outline = document.querySelector("[data-outline]");

window.addEventListener("mousemove", (e) => {
    posX = e.clientX;
    posY = e.clientY;

    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;

    // outline.style.left = `${posX}px`;
    // outline.style.top = `${posY}px`;
    outline.animate({
        top: `${posY}px`,
        left: `${posX}px`
    } , {
        duration: 300,
        fill: "forwards"
    })
});
