
let previousBtn = document.querySelector(".left-icon");
let nextBtn = document.querySelector(".right-icon");
let galleryContainer = document.querySelector(".gallery");

document.addEventListener('DOMContentLoaded', () => {
    
    // preventing the default action of mouse wheel
    galleryContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        galleryContainer.style.scrollBehavior = "auto";
        galleryContainer.scrollLeft += evt.deltaY;
    }, {passive: false})
    
    // when user click on the next button the next three images will be shown
    nextBtn.addEventListener('click', (e) => {
        galleryContainer.style.scrollBehavior = "smooth";
        galleryContainer.scrollLeft += 731.2;     // 731.2
    })
    
    // when user click on the previous button the previous three images will be shown
    previousBtn.addEventListener('click', (e) => {
        galleryContainer.style.scrollBehavior = "smooth";
        galleryContainer.scrollLeft -= 731.2;
    })

})