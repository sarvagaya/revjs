function h1() {
    const div = document.getElementById("headings")
    const h1 = document.createElement("h1");
    h1.innerText = "Masai"
    div.append(h1);
}

function h3() {
    const div = document.getElementById("headings");
    const firstH3 = document.createElement("h3").innerText="A Transformation in education!"
    const secondH3 = document.createElement("h3").innerText="Learn to earn, pay when you get."
    const br = document.createElement("br");
    div.append(firstH3);
    div.append(br);
    div.append(secondH3);
    div.append(br);
}

function divs() {
    const div = document.getElementById("headings");
    // const br = document.createElement("br");
    for(let i = 1; i <= 10; i++) {
        let newDivs = document.createElement("div").innerText = `Content ${i}`;
        let br = document.createElement("br");
        div.append(br)
        div.append(newDivs);
        
    }
}

document.getElementById("createH1").addEventListener("click", h1)
document.getElementById("createH3").addEventListener("click", h3)
document.getElementById("createDivs").addEventListener("click", divs);