
prevBtn.addEventListener("click", () => {
  slideCards(currentCardIdx - 1)
});

nextBtn.addEventListener("click", () => {
  slideCards(currentCardIdx + 1)
});

/**
 * activate a card swipe animation to another card
 * @param newCardIdx index of the new card
 */
function slideCards(newCardIdx) {
  if (newCardIdx < 0 || newCardIdx > cardsJson.length - 1) {
    return;
  }
  const slideDirection = newCardIdx > currentCardIdx ? "is-slided-left" : "is-slided-right";

  fillCard(offCard, currentCardIdx);
  setQueryItem(newCardIdx);

  currentCardIdx = newCardIdx;
  updateButtonState();

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

function updateButtonState() {
  prevBtn.disabled = currentCardIdx === 0;
  nextBtn.disabled = currentCardIdx === cardsJson.length - 1;
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