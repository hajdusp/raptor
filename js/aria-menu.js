const toggleButton = document.querySelector("#toggle-button");
const toggleTarget = document.querySelector("#toggle-target");

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
    ariaControl(); //check the ARIA attributes
}
);