const toggleButton = document.querySelector(".toggle-nav-button");
const toggleTarget = document.querySelector(".toggle-nav-links");
const toggleMenu = document.querySelector(".icon-menu");
const toggleClose = document.querySelector(".icon-close");

//check and set the ARIA attributes when the visiblity changes
function ariaControl() {
    if (toggleTarget.classList.contains("show")) {
        toggleButton.setAttribute("aria-expanded", "true");
    }
    else {
        toggleButton.setAttribute("aria-expanded", "false");
    }
}
//toggle class on click event
toggleButton.addEventListener("click", function () {
    toggleTarget.classList.toggle("show");
    toggleMenu.classList.toggle("hide");
    toggleClose.classList.toggle("hide");
    ariaControl(); //check the ARIA attributes
}
);