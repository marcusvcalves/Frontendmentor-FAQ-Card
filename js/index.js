let arrows = document.querySelectorAll(".arrow");
let hidden = document.querySelectorAll(".hidden");
let cardItem = document.querySelectorAll(".FAQCardItem");

for (let i = 0; i <= arrows.length; i++) {
  arrows[i].addEventListener("click", function () {
    arrows[i].classList.toggle("arrowFlip");
    hidden[i].classList.toggle("hidden");
    hidden[i].classList.toggle("border");
    cardItem[i].classList.toggle("border");
  });
}
