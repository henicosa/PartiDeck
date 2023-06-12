
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", () => {
  if (currentCardIdx <= 0) {
    return;
  }
  slideCards(currentCardIdx - 1)
  nextBtn.disabled = false;
  prevBtn.disabled = currentCardIdx === 0;
});


nextBtn.addEventListener("click", () => {
  if (currentCardIdx >= cardsJson.length - 1) {
    return;
  }
  slideCards(currentCardIdx + 1)
  prevBtn.disabled = false;
  nextBtn.disabled = currentCardIdx === cardsJson.length - 1;
});

/**
 * activate a card swipe animation to another card
 * @param newCardIdx index of the new card
 */
function slideCards(newCardIdx) {
  const slideDirection = newCardIdx > currentCardIdx ? "is-slided-left" : "is-slided-right";

  fillCard(offCard, currentCardIdx);
  currentCardIdx = newCardIdx;

  mainCard.classList.remove("is-slided-left", "is-slided-right");
  offCard.classList.remove("is-slided-left", "is-slided-right");

  if (mainCardInner.classList.contains("is-flipped") !== offCardInner.classList.contains("is-flipped")) {
    offCardInner.classList.toggle("is-flipped");
  }
  mainCardInner.classList.remove("is-flipped");

  setTimeout(() => {
    mainCard.classList.add(slideDirection);
    offCard.classList.add(slideDirection);
    fillCard(mainCard, newCardIdx);
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