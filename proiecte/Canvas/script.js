//---< Variabile > ---
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let booldraw = false; //--< daca inca este mousedown >--
let X = 0;
let Y = 0;
let S = 5; //--< Marime(Size) >--
let C = "#000"; //--< Culoare >--
//---< Variabile > ---

//---< Inceput > ---
canvas.width = 1305;
canvas.height = 800;
canvas.addEventListener('mousedown',SDraw);
canvas.addEventListener('mouseup',EDraw);
canvas.addEventListener('mousemove',WDraw);
//---< Inceput > ---

//---< functii > ---
function SDraw(ev) {
    booldraw = true;
    X = ev.offsetX;
    Y = ev.offsetY;
}

function EDraw() {
    booldraw = false;
}

function WDraw(ev) {
    if (!booldraw) return;
    //---< Setam Style-ul >---
    ctx.strokeStyle = C;
    ctx.lineWidth = S;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    //---< Setam Style-ul >---

    drawline(ev.offsetX,ev.offsetY);

    //---< Actualizeaza X-ul & Y-ul >---
    X = ev.offsetX;
    Y = ev.offsetY;
    //---< Actualizeaza X-ul & Y-ul >---
}
function drawline(_x,_y) {
    ctx.beginPath();
    ctx.moveTo(_x,_y);
    ctx.lineTo(_x,_y);
    ctx.stroke();
}   

function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}
//---< functii > ---