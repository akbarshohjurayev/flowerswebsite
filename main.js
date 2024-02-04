const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper img");
const firstCarWidth = carousel.querySelector(".carnet").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;
//Get the number of cardscan fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCarWidth);

/// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

/// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

//Add event listeners for the arrow buttons to scroll the carousel let and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft = btn.id === "left" ? -firstCarWidth : firstCarWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    ///Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;///if isDragging is false return from here
    //Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const autoPLay = () => {
    if (window.innerWidth < 800) return;//Return if window is smaller than 800
    //Autoplay the carousel after every 2500ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCarWidth, 2500);
}
autoPLay();
const infiniteScroll = () => {
    //If the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        console.log("You've reached to the left end");
        carousel.classList.remove("no-transition");
        // carousel.scrollLeft = carousel.scrollWidth - ( 2 *  carousel.offsetWidth);
    }
    /// If the carousel is at the end,scroll to the beginning
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        console.log("You've reached to the right end");
        carousel.classList.remove("no-transition");
        // carousel.scrollLeft = carousel.offsetWidth;
    }
    ///Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPLay();
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPLay)



const navLinkEls = document.querySelectorAll('')