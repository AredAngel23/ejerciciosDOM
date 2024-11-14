// Usar constantes para elementos del DOM 
//--------------------------------Seleccionar los elementos del DOM--------------------------------//
// Seleccionar los elementos por el id, este debe de ser unico por documento HTML
const contenedor = document.getElementById("contenedor"); 
const titulo = document.getElementById('titulo');
// innerHTML es una propiedad que nos da acceso al contenido html dentro del elemento accedido
// typeof para mostrar el tipo de dato
console.log(contenedor.innerHTML);
console.log(titulo.innerText);
console.log(titulo.tagName); // Propiedad para implementar lógica en base al tipo de etiqueta HTML
console.log(typeof titulo); // Retorna un objeto 

// Seleccionar los elementos por clase, se pueden seleccionar varios elementos de la misma clase
const toppings = document.getElementsByClassName('topping');
console.log(toppings); // Retorna una HTMLCollection
console.log(toppings[2]); // Para acceder a un elemento unicamente, hay que indicar el indice 

// Seleccionar los elementos por etiqueta html, similar a seleccionar elementnos por clase, aplica para una busqueda general
const misToppingsLi = document.getElementsByTagName('li');
console.log(misToppingsLi.length); // Retorna una HTMLCollection 

// Limitación: Los métodos getElementsBy... devuelven un HTMLCollection, 
// que no es un arreglo real y no permite métodos de arreglo como forEach sin convertirlo primero.

// Seleccionar el primer elemento que cumpla el criterio, del argumento enviado como un selector CSS
const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)'); 
// Siempre retorna objetos
console.log(primerToppingNoMarron);

// Seleccionar los elementos que cumpla el criterio, del argumento enviado como un selector CSS
const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
// Nos retorna una Lista de Nodos (NodeList), esta lista se considera un objeto 
console.log(toppingsNaranja); 