const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 5;
let y = 5;
let right = true;
let down = true;

function ball(x,y){
    // ctx.fillStyle = 'orange';
    ctx.fillStyle = `hsl(${valHs1++},55%,55%)`;
    ctx.beginPath();
    ctx.arc(x, y, 45, 0, Math.PI * 2);
    ctx.fill();
}

let valHs1 = 0;
setInterval(() => {
    // ctx.clearRect(0, 0, 650, 400);
    ball(x, y);
    // Validar right para x
    if(right) x += 5;
    else x -= 5;
    // Validar down para y 
    if(down) y+=5;
    else y-=5;
    // Validar x para cambiar right
    right = x > 600? !right: right;
    right = x < 5? !right: right;
    // Validar y para cambiar down
    down = y > 350? !down: down;
    down = y < 5? !down: down;
}, 15);