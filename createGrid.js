export default function createGrid(grid, squares, numOfFields) {
  for (let i = 0; i < numOfFields; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
    squares.push(square);
  }
}
