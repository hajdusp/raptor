//https://codepen.io/nathanlong/pen/KzmvBe
// querySelector returns the first element it finds with the correct selector
// so it needs a unique class name or you're only grabbing one element
document.querySelector('.toggle-button').addEventListener('click', function(e) {
// from https://www.jamestease.co.uk/blether/add-remove-or-toggle-classes-using-vanilla-javascript
// querySelectorAll returns a nodeList, so map to to an array and BOOM
// if there's only one element to toggle, you can skip the array
// and grab it with a simple querySelector
[].map.call(document.querySelectorAll('.toggle-target'), function(el) {
// classList supports 'contains', 'add', 'remove', and 'toggle'
el.classList.toggle('toggled');
});
});

