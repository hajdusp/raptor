const toggleButton = document.querySelector(".toggle-menu-button");
const toggleTarget = document.querySelector(".toggle-menu-links");
const toggleBurger = document.querySelector(".icon-burger");
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
    toggleBurger.classList.toggle("hide");
    toggleClose.classList.toggle("hide");
    ariaControl(); //check the ARIA attributes
}
);