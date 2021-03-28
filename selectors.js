function changeHeadOne() {
    document.querySelector("h1").style.color="red";
}

function changeAllHeadingThree() {
    // document.getElementsByQ("h3").style.color="green";
    let allH3 = document.querySelectorAll("h3");
    for(let i = 0; i <= allH3.length; i++) {
        allH3[i].style.color="green"
    }
}

function changeAllH5() {
    let allH5 = document.querySelectorAll("h5");
    for(let i = 0; i <= allH5.length; i++) {
        allH5[i].style.color="blue"
    }
}

function changeToGreen() {
    let allGreen = document.querySelectorAll(".green");
    for(let i = 0; i <= allGreen.length; i++) {
        allGreen[i].style.color="green";
    }
}

function changeToBlue() {
    let allBlue = document.querySelectorAll(".blue");
    for(let i = 0; i <= allBlue.length; i++) {
        allBlue[i].style.color="blue";
    }
}

function changeToRed() {
    let allRed = document.querySelectorAll(".red");
    for(let i = 0; i <= allRed.length; i++) {
        allRed[i].style.color="red";
    }
}

document.getElementById("changeH1").addEventListener("click", changeHeadOne);
document.getElementById("changeH3").addEventListener("click", changeAllHeadingThree);
document.getElementById("changeH5").addEventListener("click", changeAllH5);
document.getElementById("changeGreen").addEventListener("click", changeToGreen)
document.getElementById("changeBlue").addEventListener("click", changeToBlue)
document.getElementById("changeRed").addEventListener("click", changeToRed)