// captura de elementos:
let title = document.getElementById("text"); // texto principal

let treeLeft = document.getElementById("tree-left");
let treeRight = document.getElementById("tree-right");

let gateLeft = document.getElementById("gate-left");
let gateRight = document.getElementById("gate-right");

// función que detecta el scroll hacia abajo:
window.addEventListener("scroll", ()=>{
    let value = window.scrollY;

    title.style.marginTop = value * 2.5 + "px";

    treeLeft.style.left = value * -1.5 + "px";
    treeRight.style.left = value * 1.5 + "px";

    gateLeft.style.left = value * 0.5 + "px";
    gateRight.style.left = value * -0.5 + "px";

});