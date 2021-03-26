export default function generateApples(squares) {
  let appleIndex;
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains("snake"));
  squares[appleIndex].classList.add("apple");
  return appleIndex;
}
