const revealedElements = document.querySelectorAll("[data-revealed]");

function scrollReveal() {
    for (let i = 0; i < revealedElements.length; i++) {
        const isElementOnScreen = revealedElements[i].getBoundingClientRect().top < window.innerHeight;
        // console.log(isElementOnScreen);
        if(isElementOnScreen) {
            revealedElements[i].classList.add("reveal");
        } else {
            revealedElements[i].classList.remove("reveal");
        }

    }

}


window.addEventListener("scroll" , scrollReveal);
window.addEventListener("load" , scrollReveal);