// For typewriter function
let message = inputName;

let i = 0;
let speed = 100;

let typewriter = () => {
    if (i < message.length) {
        document.getElementById("message").innerHTML += message.charAt(i);
        i++;
        setTimeout(typewriter, speed);
        console.log(i);
    } else {
        setTimeout(fadeInSeagull, 1600);
    }
};

// Delays typewriter function on load
let typewriterDelay = () => {
    setTimeout(typewriter, 2000);
};

// Executes typewriter functions on load
window.addEventListener('load', typewriterDelay);

let fadeInSeagull = () => {
    document.getElementById("seagull").style.opacity = 1;
}