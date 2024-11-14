//--------------------------------Asignar ESTILOS con JavaScript--------------------------------//
const primerTopping = document.querySelector('.topping');
// Agregar estilos en línea con JS
primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = '#6dff00';
primerTopping.style.textTransform = 'uppercase';

console.log(primerTopping.style); // Devuelve una CSSStyleDclaration con todas las propiedades que se pueden modificar


//--------------------------------Acceder al TEXTO con JavaScript--------------------------------//
const listaDeToppings = document.getElementById('lista-toppings');
console.log(listaDeToppings.innerText); // Retorna cadena de carácteres (string)
console.log(listaDeToppings.textContent); // Retorna cadena de caracteres con la identación del archivo HTML
console.log(listaDeToppings.innerHTML); // Retorna la estructura HTML interna del elemento como una cadena de caracteres

//--------------------------------Modificar el TEXTO con JavaScript--------------------------------//
// titulo.innerText = 'Mis Toppings Favoritos';

const textoEnlace = document.getElementsByTagName('a');
textoEnlace[0].innerText = 'freeCodeCamp';


//--------------------------------ATRIBUTOS con JS--------------------------------//
const enlace = document.getElementsByTagName('a');
// console.log(enlace[0].removeAttribute('href')); // Eliminar el etributo de un elemento de forma dinámica
console.log(enlace[0].getAttribute('href')); // Obtener el atributo de un elemento seleccionado
console.log(enlace[0].setAttribute('href', 'https://www.freecodecamp.org')); // Actualizar el atributo de un elemento seleccionado


//--------------------------------CLASES con JS--------------------------------//
const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
// Asignar clase a un elemento 
primerToppingNoMarron.classList.add('clase-agregada');
// Verificar si existe una clase 
console.log(primerTopping.classList.contains('fondo-marron')); // Retorna un valor booleano
// Eliminar una clase
primerToppingNoMarron.classList.remove('topping');
// Devuelve un DOMTokenList para Ver las diferentes clases de unelemento
console.log(primerToppingNoMarron.classList);