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
// Calabza (Circulo)
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.arc(290, 200, 120, 0, Math.PI * 2, true);
ctx.fill();

// Líneas de la calabaza (Ovalos)
ctx.strokeStyle = 'grey';
ctx.beginPath();
ctx.ellipse(290, 200, 10, 120, 0, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(290, 200, 50, 120, 0, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(290, 200, 90, 120, 0, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(290, 200, 120, 120, 0, 0, Math.PI * 2);
ctx.stroke();

// OJOS (Triangulos)
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(245, 132);
ctx.lineTo(270, 172);
ctx.lineTo(220, 172);
ctx.fill();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(345, 132);
ctx.lineTo(370, 172);
ctx.lineTo(320, 172);
ctx.fill();

// NARIZ (Triangulo)
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(265, 188);
ctx.lineTo(315, 188);
ctx.lineTo(290, 228);
ctx.fill();

// BOCA (Cuadrados)
ctx.fillRect(255, 248, 70, 30);

ctx.fillRect(226, 230, 30, 30);
ctx.fillRect(324, 230, 30, 30); 

ctx.fillRect(196, 210, 30, 30);
ctx.fillRect(354, 210, 30, 30);

// TOP (Cuadrados)
ctx.fillStyle = 'green';
ctx.fillRect(255, 83, 70, 35);
ctx.fillRect(268, 70, 45, 30);

// Telarañas (Líneas)
ctx.strokeStyle = 'grey';
ctx.beginPath();
ctx.moveTo(70, 0);
ctx.lineTo(70, 130);

ctx.moveTo(0, 60);
ctx.lineTo(150, 60);

ctx.moveTo(5, 5);
ctx.lineTo(135, 115);

ctx.moveTo(145, 5);
ctx.lineTo(0, 115);

ctx.lineWidth = 3;
ctx.stroke();