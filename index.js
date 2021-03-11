function calculate() {
    let min = Number(document.getElementById("min").innerHTML);
    let max = Number(document.getElementById("max").innerHTML);
    let score = Number(document.getElementById("scoreMonitor").innerHTML);
    if(score < min) {
        document.getElementById("min").innerHTML = score
        document.getElementById("scoreMonitor").innerHTML = "";
    } else if(score > max) {
        document.getElementById("max").innerHTML = score;
        document.getElementById("scoreMonitor").innerHTML = "";
    } else {
        document.getElementById("scoreMonitor").innerHTML = "";
    }
}

function one() {
    let score = document.getElementById("scoreMonitor");
    score.innerText += 1
}

function two() {
    let score = document.getElementById("scoreMonitor");
    score.innerText += 2
}

function three() {
    let score = document.getElementById("scoreMonitor");
    score.innerText += 3
}

function four() {
    let score = document.getElementById("scoreMonitor");
    score.innerText += 4
}

function five() {
    let score = document.getElementById("scoreMonitor");
    score.innerText += 5
}

function six() {
    let score = document.getElementById("scoreMonitor");
    score.innerText += 6
}

function seven() {
    let score = document.getElementById("scoreMonitor");
    score.innerText += 7
}

function eight() {
    let score = document.getElementById("scoreMonitor");
    score.innerText += 8
}

function nine() {
    let score = document.getElementById("scoreMonitor");
    score.innerText += 9
}

function zero() {
    let score = document.getElementById("scoreMonitor");
    score.innerText += 0
}

document.getElementById("one").addEventListener("click", one);

document.getElementById("two").addEventListener("click", two)

document.getElementById("three").addEventListener("click", three);

document.getElementById("four").addEventListener("click", four)

document.getElementById("five").addEventListener("click", five);

document.getElementById("six").addEventListener("click", six)

document.getElementById("seven").addEventListener("click", seven);

document.getElementById("eight").addEventListener("click", eight)

document.getElementById("nine").addEventListener("click", nine);

document.getElementById("zero").addEventListener("click", zero)

document.getElementById("enter").addEventListener("click", calculate)