import createSnake from "./createSnake.js";
import createGrid from "./createGrid.js";
import removeSnake from "./removeSnake.js";
import generateApples from "./generateApples.js";
import modalFunction from "./modalFunction.js";

const score = document.querySelector("#score");
const leftButton = document.querySelector(".leftButton");
const rightButton = document.querySelector(".rightButton");
const upButton = document.querySelector(".upButton");
const downButton = document.querySelector(".downButton");
const grid = document.querySelector(".grid");
const startBtn = document.querySelector("#start");
let squares = [];
let currentSnake = [3, 2, 1, 0];
let direction = 1;
let snakeSpeed = 350;
const width = 15;
const numOfFields = width * width;
let appleIndex = 0;
const closeModal = document.querySelector(".closeModalWindow");
const modal = document.querySelector("#myModal");

let moving = setInterval(control, snakeSpeed);

createGrid(grid, squares, numOfFields);
createSnake(currentSnake, squares);
appleIndex = generateApples(squares);

function startGame() {
  removeSnake(currentSnake, squares);
  squares[appleIndex].classList.remove("apple");
  clearInterval(moving);
  currentSnake = [3, 2, 1, 0];
  direction = 1;
  snakeSpeed = 350;
  score.textContent = 0;
  createSnake(currentSnake, squares);
  appleIndex = generateApples(squares);
  moving = setInterval(control, snakeSpeed);
  modal.style.display = "none";
}

function move() {
  if (
    (currentSnake[0] + width > numOfFields && direction === width) ||
    (currentSnake[0] - width < 0 && direction === -width) ||
    (currentSnake[0] % width === width - 1 && direction === 1) ||
    (currentSnake[0] % width === 0 && direction === -1) ||
    squares[currentSnake[0] + direction].classList.contains("snake")
  ) {
    modalFunction(score.textContent);
    return clearInterval(moving);
  }

  const tail = currentSnake.pop();
  squares[tail].className = "square";
  currentSnake.unshift(currentSnake[0] + direction);
  createSnake(currentSnake, squares);

  if (squares[currentSnake[0]].classList.contains("apple")) {
    squares[appleIndex].classList.remove("apple");
    squares[tail].classList.add("snake");
    currentSnake.push(tail);
    createSnake(currentSnake, squares);
    appleIndex = generateApples(squares);
    score.textContent = parseInt(score.textContent) + 1;
    clearInterval(moving);
    speedUpSnake();
  }
}

function speedUpSnake() {
  clearInterval(moving);
  snakeSpeed > 150 && (snakeSpeed -= snakeSpeed / 10);
  moving = setInterval(control, snakeSpeed);
}

function control(event) {
  if (event) {
    switch (event.key) {
      case "ArrowRight":
        direction = 1;
        break;
      case "ArrowLeft":
        direction = -1;
        break;
      case "ArrowDown":
        direction = width;
        break;
      case "ArrowUp":
        direction = -width;
        break;
      default:
        return;
    }
  } else {
    move();
  }
}

// For closing modal
closeModal.onclick = function () {
  modal.style.display = "none";
};

startBtn.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

leftButton.onclick = function (event) {
  direction = -1;
};

rightButton.onclick = function (event) {
  direction = 1;
};

upButton.onclick = function (event) {
  direction = -width;
};

downButton.onclick = function (event) {
  direction = width;
};

document.addEventListener("keydown", control);
startBtn.addEventListener("click", startGame);
