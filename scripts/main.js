// Define a Function
function sayOuch() {
    alert('Ouch! Stop poking me!');
}

function sayWoof() {
    alert('Woof!');
}

// Use a CSS selector to identify an element
/*var foxImage = document.querySelector('img'); /*only selects the first image*/
var foxImage = document.querySelector('#foxpic'); 
var dogImage = document.querySelector('#dogpic'); 

// Assign the function to the onclick event on that element
foxImage.onclick = sayOuch;
dogImage.onclick = sayWoof;