export default function removeSnake(currentSnake, squares) {
  currentSnake.forEach((index) => {
    squares[index].className = "square";
  });
}
