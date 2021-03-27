// export default function populateSnake(currentSnake, squares, width) {
//   const head = currentSnake[0];
//   const byHead = currentSnake[1];
//   const tail = currentSnake[currentSnake.length - 1];
//   const byTail = currentSnake[currentSnake.length - 2];
//   let isApple = false;

//   if (squares[head].classList.contains("apple")) isApple = true;

//   // Body logic
//   for (let i = 1; i < currentSnake.length - 1; i++) {
//     let currentBody = currentSnake[i];
//     let nextBody = currentSnake[i - 1];
//     let prevBody = currentSnake[i + 1];
//     squares[currentBody].classList.add("snake");
//     if (
//       (currentBody - prevBody === -1 && currentBody - nextBody === -width) ||
//       (currentBody - nextBody === -1 && currentBody - prevBody === -width)
//     ) {
//       squares[currentBody].className = "square";
//       squares[currentBody].classList.add("snake");
//       squares[currentBody].classList.add("bodytwisted0");
//       continue;
//     }
//     if (
//       (currentBody - prevBody === -width && currentBody - nextBody === 1) ||
//       (currentBody - nextBody === -width && currentBody - prevBody === 1)
//     ) {
//       squares[currentBody].className = "square";
//       squares[currentBody].classList.add("snake");
//       squares[currentBody].classList.add("bodytwisted90");
//       continue;
//     }
//     if (
//       (currentBody - prevBody === width && currentBody - nextBody === 1) ||
//       (currentBody - nextBody === width && currentBody - prevBody === 1)
//     ) {
//       squares[currentBody].className = "square";
//       squares[currentBody].classList.add("snake");
//       squares[currentBody].classList.add("bodytwisted180");
//       continue;
//     }
//     if (
//       (currentBody - prevBody === width && currentBody - nextBody === -1) ||
//       (currentBody - nextBody === width && currentBody - prevBody === -1)
//     ) {
//       squares[currentBody].className = "square";
//       squares[currentBody].classList.add("snake");
//       squares[currentBody].classList.add("bodytwisted270");
//       continue;
//     }

//     if (
//       (currentBody - prevBody === width && currentBody - nextBody === -width) ||
//       (currentBody - nextBody === width && currentBody - prevBody === -width)
//     ) {
//       squares[currentBody].className = "square";
//       squares[currentBody].classList.add("snake");
//       squares[currentBody].classList.add("body90");
//       continue;
//     }
//     if (
//       (currentBody - prevBody === 1 && currentBody - nextBody === -1) ||
//       (currentBody - nextBody === 1 && currentBody - prevBody === -1)
//     ) {
//       squares[currentBody].className = "square";
//       squares[currentBody].classList.add("snake");
//       squares[currentBody].classList.add("body0");
//       continue;
//     }
//   }

//   // Head logic
//   if (head - byHead === 1) {
//     squares[head].className = isApple ? "square apple" : "square";
//     squares[head].classList.add("snake");
//     squares[head].classList.add("head90");
//   }
//   if (head - byHead === -width) {
//     squares[head].className = isApple ? "square apple" : "square";
//     squares[head].classList.add("snake");
//     squares[head].classList.add("head0");
//   }
//   if (head - byHead === -1) {
//     squares[head].className = isApple ? "square apple" : "square";
//     squares[head].classList.add("snake");
//     squares[head].classList.add("head270");
//   }
//   if (head - byHead === width) {
//     squares[head].className = isApple ? "square apple" : "square";
//     squares[head].classList.add("snake");
//     squares[head].classList.add("head180");
//   }
//   // Tail logic
//   if (tail - byTail === 1) {
//     squares[tail].className = "square";
//     squares[tail].classList.add("snake");
//     squares[tail].classList.add("tail0");
//   }
//   if (tail - byTail === -width) {
//     squares[tail].className = "square";
//     squares[tail].classList.add("snake");
//     squares[tail].classList.add("tail270");
//   }
//   if (tail - byTail === -1) {
//     squares[tail].className = "square";
//     squares[tail].classList.add("snake");
//     squares[tail].classList.add("tail180");
//   }
//   if (tail - byTail === width) {
//     squares[tail].className = "square";
//     squares[tail].classList.add("snake");
//     squares[tail].classList.add("tail90");
//   }
// }

export default function populateSnake(currentSnake, squares) {
  currentSnake.forEach((body) => {
    squares[body].classList.add("snake");
    squares[body].classList.remove("snakeHead");
  });
  squares[currentSnake[0]].classList.add("snakeHead");
}
