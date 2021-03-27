const modal = document.getElementById("myModal");

export default function modalFunction(text) {
  modal.style.display = "block";
  const score = document.querySelector("#scoreModal");
  score.innerText = text;
}
