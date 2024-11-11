//--------------------------------Asignar estilo con JavaScript--------------------------------//
const primerTopping = document.querySelector('.topping');
// Agregar estilos en línea con JS
// primerTopping.style.backgroundColor = 'blue';
// primerTopping.style.color = '#6dff00';
primerTopping.style.textTransform = 'uppercase';

console.log(primerTopping.style);

//--------------------------------Acceder al texto con JavaScript--------------------------------//
const listaDeToppings = document.getElementById('lista-toppings');
console.log(listaDeToppings.innerText); // Retorna cadena de carácteres (string)
console.log(listaDeToppings.textContent); // Retorna cadena de caracteres con la identación del archivo HTML
console.log(listaDeToppings.innerHTML); // Retorna la estructura HTML interna del elemento como una cadena de caracteres

//--------------------------------Modificar el texto con JavaScript--------------------------------//
// titulo.innerText = 'Mis Toppings Favoritos';

const textoEnlace = document.getElementsByTagName('a');
textoEnlace[0].innerText = 'freeCodeCamp';

//--------------------------------Atributos con JS--------------------------------//
const enlace = document.getElementsByTagName('a');
// console.log(enlace[0].removeAttribute('href')); // Eliminar el etributo del elemento de forma dinámica
console.log(enlace[0].getAttribute('href')); // Obtener el atributo del elemento seleccionado
console.log(enlace[0].setAttribute('href', 'https://www.freecodecamp.org')); // Actualizar el atributo del elemento seleccionado
