//main preference - ask the user
const changingfont = prompt("Please select a font, small, normal, big.");

//process of the prompt
if (changingfont === "small") {
    //changing font size - small
    document.getElementById("text").style.fontSize = "12px";
    document.getElementById("heading").style.fontSize = "12px";
}

else if (changingfont === "normal") {
    //changing font size - normal
    document.getElementById("text").style.fontSize = "25px";
    document.getElementById("heading").style.fontSize = "25px";
}

else if (changingfont === "big") {
    //changing font size - big
    document.getElementById("text").style.fontSize = "50px";
    document.getElementById("heading").style.fontSize = "50px";
}

//if the user didn't pick one of the three choices.

else {
    alert("Invalid, Please select small, normal or big.")
}