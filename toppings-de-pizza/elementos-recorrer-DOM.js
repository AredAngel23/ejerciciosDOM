// Referencia al elemento del DOM donde se va agregar el nuevo elemento
const listaDeToppings = document.getElementById('lista-toppings')

// Crear un elemento desde 0 y agregarlo al DOM
const toppingNuevo = document.createElement('li');

// Agregar clase para estilizar y agregar texto al nuevo elemento
toppingNuevo.classList.add('topping', 'fondo-marron');
toppingNuevo.innerText = 'Queso extra';

// Agregar un elemento 
// listaDeToppings.append(toppingNuevo);
listaDeToppings.appendChild(toppingNuevo); // Para elementos HTML 

// Eliminar un elemento del DOM
// toppingNuevo.remove();


//-----------------------------Rrecorrer el DOM (traversal)---------------------------//
// Elementos padre
// console.log(listaDeToppings.parentElement); // Elemento padre = etiqueta HTML arriba en la jerarquía
console.log(listaDeToppings.parentNode); // Nodo padre engloba todas las propiedades del nodo padre
// Encadenar para referenciar a más de una jerarquia
// console.log(listaDeToppings.parentElement.parentElement); 

// Elementos hijos 
console.log(listaDeToppings.children); // Muestra los elementos hijos en una HTMLCollection
console.log(listaDeToppings.firstChild); // Muestra el primer NODO hijo
console.log(listaDeToppings.firstElementChild); // Muestra el primer ELEMENTO  hijo
console.log(listaDeToppings.lastElementChild); // Muestra el ultimo ELEMENTO  hijo

// Elementos hermanos 
console.log(listaDeToppings.previousElementSibling); // Muestra el elemento hermano anterior
console.log(listaDeToppings.nextElementSibling); // Muestra el elemento hermano siguiente

