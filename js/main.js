// For typewriter function
let message = "Test Name...";

let i = 0;
let speed = 100;

let typewriter = () => {
    if (i < message.length) {
        document.getElementById("message").innerHTML += message.charAt(i);
        i++;
        setTimeout(typewriter, speed);
        console.log(i);
    } else {
        fadeInPicture();
    }
};

// Delays typewriter function on load
let typewriterDelay = () => {
    setTimeout(typewriter, 1000);
};

// Executes typewriter functions on load
window.addEventListener('load', typewriterDelay);

// Start picture fade in
let fadeInPicture = () => {
    document.getElementById("seagull").style.display = "block";
    document.getElementById("seagull").style.opacity = 1;
};

