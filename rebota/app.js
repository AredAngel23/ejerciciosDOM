const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x: 0,
    y: 0,
    show: function(){
        ctx.fillStyle = 'orange';
        ctx.beginPath();
        // ctx.fillStyle = `hsl(${10},50%,50%)`;
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
        ctx.fill();
    }
}

let x = 10;
let y = 10;
let right = true;
let down = true;

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    ball.x = x;
    ball.y = y;
    ball.show();
    // Validar right para x
    if(right) x += 2;
    else x -= 2;
    // Validar down para y 
    if(down) y++;
    else y--;
    // Validar x para cambiar right
    right = x > 600? !right: right;
    right = x < 1? !right: right;
    // Validar y para cambiar down
    down = x > 400? !down: down;
    down = x < 1? !down: down;
}, 0);