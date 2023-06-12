
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", () => {
  if (currentCardIdx <= 0) {
    return;
  }
  swipCard(currentCardIdx - 1)
  nextBtn.disabled = false;
  prevBtn.disabled = currentCardIdx === 0;
});


nextBtn.addEventListener("click", () => {
  if (currentCardIdx >= cardsJson.length - 1) {
    return;
  }
  swipCard(currentCardIdx + 1)
  prevBtn.disabled = false;
  nextBtn.disabled = currentCardIdx === cardsJson.length - 1;
});

/**
 * activate a card swipe animation to another card
 * @param newCardIdx index of the new card
 */
function swipCard(newCardIdx) {
  const direction = newCardIdx > currentCardIdx ? "is-slided-left" : "is-slided-right";
  fillCard(offCard, currentCardIdx);
  fillCard(mainCard, newCardIdx);
  currentCardIdx = newCardIdx;

  mainCard.classList.remove("is-slided-left", "is-slided-right");
  offCard.classList.remove("is-slided-left", "is-slided-right");

  setTimeout(() => {
    mainCard.classList.add(direction);
    offCard.classList.add(direction);
  }, 5);
}

/**
 * trigger previous and next buttons with arrow keys
 */
document.addEventListener("keyup", function(event) {
  if (event.key === "ArrowRight") {
    nextBtn.click();
  }else if (event.key === "ArrowLeft") {
    prevBtn.click();
  } else {
    return;
  }
  event.preventDefault();
});