function removeSpace() {
    let input = document.getElementById("text").value.split("");
    for(let i = 0; i <= input.length - 1; i++) {
        if(input[i] === " ") {
            input.splice(i, 1);
        }
    }
    let displayCase = document.getElementById("displayCase");
    displayCase.innerHTML = `After removing space: ${input.join("")}`
}

function camelCase() {
    let input = document.getElementById("text").value.split("");
    for(let i = 0; i <= input.length - 1; i++) {
        if(input[i] === " ") {
            input.splice(i, 1);
            input[i] = input[i].toUpperCase()
        }
    }
    let displayCase = document.getElementById("displayCase");
    displayCase.innerHTML = `After using camel case: ${input.join("")}`
}

function snakeCase() {
    let input = document.getElementById("text").value.split("");
    for(let i = 0; i <= input.length - 1; i++) {
        if(input[i] === " ") {
            // input.splice(i, 1);
            input[i] = "_"
        }
    }
    let displayCase = document.getElementById("displayCase");
    displayCase.innerHTML = `After using snake case: ${input.join("")}`
}

function hyphenCase() {
    let input = document.getElementById("text").value.split("");
    for(let i = 0; i <= input.length - 1; i++) {
        if(input[i] === " ") {
            // input.splice(i, 1);
            input[i] = "-"
        }
    }
    let displayCase = document.getElementById("displayCase");
    displayCase.innerHTML = `After using snake case: ${input.join("")}`
}

document.getElementById("removeSpace").addEventListener("click", removeSpace);

document.getElementById("camelCase").addEventListener("click", camelCase);

document.getElementById("snakeCase").addEventListener("click", snakeCase);

document.getElementById("hyphenCase").addEventListener("click", hyphenCase);
