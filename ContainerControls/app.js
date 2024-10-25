// Obtener las referencias a los elementos del DOM
const div = document.getElementById('miDiv');
const inputWidth = document.getElementById('width');
const inputHeight = document.getElementById('height');
const inputBorderRadius = document.getElementById('borderRadius');
const inputSombra = document.getElementById('sombra');

// Asignar los valores iniciales del div a los inputs
inputWidth.value = getComputedStyle(div).width.replace('px', '');
inputHeight.value = getComputedStyle(div).height.replace('px', '');

// Función para cambiar el estilo del div
function cambiarDiv() {
    div.style.width = inputWidth.value + 'px';
    div.style.height = inputHeight.value + 'px';
    div.style.borderRadius = inputBorderRadius.value + 'px';
};

// Hacer los cambios en los inputs
inputWidth.addEventListener('input', cambiarDiv);
inputHeight.addEventListener('input', cambiarDiv);
inputBorderRadius.addEventListener('input', cambiarDiv);

// Función para agregar sombra en el div y aplicarlo a su input
inputSombra.addEventListener('input', function() {
    const sombra = inputSombra.value; 
    div.style.boxShadow = '0 0 ' + sombra + 'px rgba(110, 2, 255, 0.8)';
}); 
