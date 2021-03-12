let inputMonitor = document.getElementById("inputMonitor");
let shiftColor = document.getElementById("shift");
let capsColor = document.getElementById("caps");
let passwordColor = document.getElementById("password");
let reverseColor = document.getElementById("rev");

// Number functions

function one() {
    if (shiftColor.style.color == "green") {
        inputMonitor.innerHTML += "!"
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "1"
    }
}

function two() {
    if (shiftColor.style.color == "green") {
        inputMonitor.innerHTML += "@"
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "2"
    }
}

function three() {
    if (shiftColor.style.color == "green") {
        inputMonitor.innerHTML += "#"
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "3"
    }
}

function four() {
    if (shiftColor.style.color == "green") {
        inputMonitor.innerHTML += "$"
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "4"
    }
}

function five() {
    if (shiftColor.style.color == "green") {
        inputMonitor.innerHTML += "%"
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "5"
    }
}

function six() {
    if (shiftColor.style.color == "green") {
        inputMonitor.innerHTML += "^"
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "6"
    }
}

function seven() {
    if (shiftColor.style.color == "green") {
        inputMonitor.innerHTML += "&"
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "7"
    }
}

function eight() {
    if (shiftColor.style.color == "green") {
        inputMonitor.innerHTML += "*"
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "8"
    }
}

function nine() {
    if (shiftColor.style.color == "green") {
        inputMonitor.innerHTML += "("
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "9"
    }
}

function zero() {
    if (shiftColor.style.color == "green") {
        inputMonitor.innerHTML += ")"
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "0"
    }
}

// Alphabets functions

function a() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "A";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "a"
    }
}

function b() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "B";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "b"
    }
}

function c() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "C";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "c"
    }
}

function d() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "D";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "d"
    }
}

function e() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "E";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "e"
    }
}

function f() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "F";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "f"
    }
}

function g() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "G";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "g"
    }
}

function h() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "H";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "h"
    }
}

function i() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "I";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "i"
    }
}

function j() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "J";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "j"
    }
}

function k() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "K";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "k"
    }
}

function l() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "L";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "l"
    }
}

function m() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "M";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "m"
    }
}

function n() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "N";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "n"
    }
}

function o() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "O";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "o"
    }
}

function p() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "P";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "p"
    }
}

function q() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "Q";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "q"
    }
}

function r() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "R";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "r"
    }
}

function s() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "S";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "s"
    }
}

function t() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "T";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "t"
    }
}

function u() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "U";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "u"
    }
}

function v() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "V";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "v"
    }
}

function w() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "W";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "w"
    }
}

function x() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "X";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "x"
    }
}

function y() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "Y";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "y"
    }
}

function z() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += "Z";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += "z"
    }
}

// Spacebar key 

function space() {
    if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += " "
    }
}

// .com key

function com() {
    if (capsColor.style.color == "red") {
        inputMonitor.innerHTML += ".COM";
    } else if (passwordColor.style.color == "maroon") {
        inputMonitor.innerHTML += "*"
    } else {
        inputMonitor.innerHTML += ".com"
    }
}

// Special keys

function shift() {
    if (shiftColor.style.color == "") {
        shiftColor.style.color = "green"
    } else {
        shiftColor.style.color = ""
    }
}

function caps() {
    if (capsColor.style.color == "") {
        capsColor.style.color = "red"
    } else {
        capsColor.style.color = ""
    }
}

function password() {
    if (passwordColor.style.color == "") {
        passwordColor.style.color = "maroon"
    } else {
        passwordColor.style.color = ""
    }
}

function del() {
    let input = inputMonitor.textContent;
    input = input.slice(0, -1);
    inputMonitor.innerHTML = input
}

function reverse() {
    let input = inputMonitor.innerText.split("");
    if(reverseColor.style.color == "") {
        reverseColor.style.color = "red";
        let arr = []
        for(let i = input.length - 1; i >= 0; i--) {
            arr.push(input[i])
        }
        inputMonitor.innerHTML = arr.join("")
    } else if(reverseColor.style.color == "red") {
        inputMonitor.innerHTML = input.join("")
        reverseColor.style.color = ""
    }
}

document.getElementById("one").addEventListener("click", one)

document.getElementById("two").addEventListener("click", two)

document.getElementById("three").addEventListener("click", three)

document.getElementById("four").addEventListener("click", four)

document.getElementById("five").addEventListener("click", five)

document.getElementById("six").addEventListener("click", six)

document.getElementById("seven").addEventListener("click", seven)

document.getElementById("eight").addEventListener("click", eight)

document.getElementById("nine").addEventListener("click", nine)

document.getElementById("zero").addEventListener("click", zero)

document.getElementById("a").addEventListener("click", a);

document.getElementById("b").addEventListener("click", b);

document.getElementById("c").addEventListener("click", c);

document.getElementById("d").addEventListener("click", d);

document.getElementById("e").addEventListener("click", e);

document.getElementById("f").addEventListener("click", f);

document.getElementById("g").addEventListener("click", g);

document.getElementById("h").addEventListener("click", h);

document.getElementById("i").addEventListener("click", i);

document.getElementById("j").addEventListener("click", j);

document.getElementById("k").addEventListener("click", k);

document.getElementById("l").addEventListener("click", l);

document.getElementById("m").addEventListener("click", m);

document.getElementById("n").addEventListener("click", n);

document.getElementById("o").addEventListener("click", o);

document.getElementById("p").addEventListener("click", p);

document.getElementById("q").addEventListener("click", q);

document.getElementById("r").addEventListener("click", r);

document.getElementById("s").addEventListener("click", s);

document.getElementById("t").addEventListener("click", t);

document.getElementById("u").addEventListener("click", u);

document.getElementById("v").addEventListener("click", v);

document.getElementById("w").addEventListener("click", w);

document.getElementById("x").addEventListener("click", x);

document.getElementById("y").addEventListener("click", y);

document.getElementById("z").addEventListener("click", z);

document.getElementById("spaceBar").addEventListener("click", space);

document.getElementById("com").addEventListener("click", com)

document.getElementById("shift").addEventListener("click", shift)

document.getElementById("caps").addEventListener("click", caps);

document.getElementById("password").addEventListener("click", password);

document.getElementById("delete").addEventListener("click", del);

document.getElementById("rev").addEventListener("click", reverse);