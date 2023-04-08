

// for changing placeholder name
let name = "";

// change placeholder name
let changeName = () => {
    let userInput = document.getElementById("name-field").value;
    // let name = document.getElementById("message").innerHTML = userInput;
    let inputName = userInput;
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
