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


// change placeholder name
let changeName = () => {
    let userInput = document.getElementById("name-field").value;
    let name = document.getElementById("message").innerHTML = userInput;
    setTimeout(generateLink, 500);
}

let generateLink = () => {
    document.getElementById("seagull-link").style.display = "block";
}

/*

// For fade in picture
let opacity = 0;



// Start picture fade in
let fadeInPicture = () => {
    setInterval(show, 1);
};



let show = () => {
    let seagull = document.getElementById("seagull");
    opacity = Number(window.getComputedStyle(seagull).getPropertyValue("opacity"));

    if (opacity < 1) {
        opacity += 0.5;
        seagull.style.opacity = opacity
    } else {
        clearInterval(0);
    }
}

*/
