const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
const score = document.querySelector('#score');
const highScoreDisplay = document.querySelector('#highScore');
ctx.font = '25px serif';

let counter = 0;
score.innerHTML = counter;

// Obtener el highScore del localStorage (si existe)
let highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;
highScoreDisplay.innerHTML = highScore; // Mostrar el highScore actual

let snake = [];
function initializeSnake() {
    snake = [];
    snake.push({
        x: 2,
        y: 1,
        nextX: 0,
        nextY: 0,
        show: function () {
            ctx.fillText('🐖', this.x * 20, this.y * 20);
        }
    });
    snake.push({
        x: 1,
        y: 1,
        nextX: snake[0].x,
        nextY: snake[0].y,
        show: function () {
            ctx.fillText('🐖', this.x * 20, this.y * 20);
        }
    });
    snake.push({
        x: 0,
        y: 0,
        nextX: snake[1].x,
        nextY: snake[1].y,
        show: function () {
            ctx.fillText('🐖', this.x * 20, this.y * 20);
        }
    });
}

const food = {
    x: 0,
    y: 0,
    fadeIn: function () {
        this.x = Math.floor(Math.random() * 29);
        this.y = Math.ceil(Math.random() * 19) + 1;
    },
    show: function () {
        ctx.fillText('🍑', this.x * 20, this.y * 20);
    }
}

let stPosX = 2;
let stPosY = 1;
let direction = 1; // 1: Derecha, 2: Abajo, 3: Izquierda, 4: Arriba
let intervalId;

function nextMove() {
    snake.forEach((square, index) => {
        if (index == 0) {
            square.x = stPosX;
            square.y = stPosY;
        } else {
            square.x = square.nextX;
            square.y = square.nextY;
            square.nextX = snake[index - 1].x;
            square.nextY = snake[index - 1].y;
        }
    });
}

// Función para verificar si la snake chocó consigo misma
function checkChoque() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            return true; // Colisión detectada
        }
    }
    return false;
}

// Función para reiniciar el juego
function resetGame() {
    clearInterval(intervalId);
    stPosX = 2;
    stPosY = 1;
    direction = 1;
    // Verificar si el puntaje actual es mayor que el highScore guardado
    if (counter > highScore) {
        highScore = counter;
        localStorage.setItem('highScore', highScore); // Guardar el nuevo highScore en localStorage
        highScoreDisplay.innerHTML = highScore; // Actualizar el score en la página
    }
    counter = 0;
    score.innerHTML = counter;
    food.fadeIn();
    initializeSnake();
    startGame();
}

// Función para iniciar el juego
function startGame() {
    intervalId = setInterval(() => {
        ctx.clearRect(0, 0, 600, 400);
        snake.forEach(square => square.show());

        if (snake[0].x === food.x && snake[0].y === food.y) {
            food.fadeIn();
            const newSquare = { ...snake[0] };
            newSquare.x = food.x;
            newSquare.y = food.y;
            snake.push(newSquare);
            counter++;
            score.innerHTML = counter;
        }

        food.show();

        // Mover la snake en función de la dirección
        if (direction === 1) stPosX++;
        else if (direction === 2) stPosY++;
        else if (direction === 3) stPosX--;
        else stPosY--;

        // Validar Límites de x & y 
        if (stPosX > 29) stPosX = 0;
        if (stPosX < 0) stPosX = 29;
        if (stPosY > 20) stPosY = 1;
        if (stPosY < 1) stPosY = 20;

        nextMove();

        // Verificar si la snake chocó consigo misma
        if (checkChoque()) {
            alert('Perdiste, Presiona aceptar volver a jugar!');
            resetGame();
        }
    }, 150);
}

// Detectar las teclas presionadas
document.querySelector('body')
    .addEventListener('keydown', e => {
        if (e.key === "ArrowRight" && direction !== 3) direction = 1; // Derecha
        else if (e.key === "ArrowDown" && direction !== 4) direction = 2; // Abajo
        else if (e.key === "ArrowLeft" && direction !== 1) direction = 3; // Izquierda
        else if (e.key === "ArrowUp" && direction !== 2) direction = 4; // Arriba
    });

// Inicializar juego
initializeSnake();
food.fadeIn();
startGame();