const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

/**
 * fillRect(x, y, width, height)
 * strokeRect(x, y, width, height)
 * arc(x, y,, radio, ini, fin, sentidohorario)


ctx.strokeRect(0, 0, 200, 200);
ctx.fillRect(20, 20, 160, 160);

ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.arc(100, 100, 60, 0, Math.PI * 2, true);
ctx.fill();

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(80, 90);
ctx.lineTo(130, 90);
ctx.lineTo(105, 130);
ctx.fill();

*/

ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.arc(290, 200, 120, 0, Math.PI * 2, true);
ctx.fill();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(220, 140);
ctx.lineTo(270, 140);
ctx.lineTo(245, 180);
ctx.fill();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(310, 140);
ctx.lineTo(360, 140);
ctx.lineTo(335, 180);
ctx.fill();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(265, 200);
ctx.lineTo(315, 200);
ctx.lineTo(290, 240);
ctx.fill();

