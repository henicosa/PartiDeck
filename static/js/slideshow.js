
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
prevBtn.addEventListener("click", () => {
  if (currentCardIdx <= 0) {
    return;
  }
  const newIdx = currentCardIdx - 1;
  fillCard(offCard, currentCardIdx);
  fillCard(mainCard, newIdx);
  currentCardIdx = newIdx;
  nextBtn.disabled = false;

  if (newIdx === 0) {
    prevBtn.disabled = true;
  }
  mainCard.classList.remove("is-slided-left", "is-slided-right");
  offCard.classList.remove("is-slided-left", "is-slided-right");

  setTimeout(() => {
    mainCard.classList.add("is-slided-right");
    offCard.classList.add("is-slided-right");
  }, 20);
});


nextBtn.addEventListener("click", () => {
  if (currentCardIdx >= cardsJson.length) {
    return;
  }
  const newIdx = currentCardIdx + 1;
  fillCard(offCard, currentCardIdx);
  fillCard(mainCard, newIdx);
  currentCardIdx = newIdx;
  prevBtn.disabled = false;

  if (newIdx === cardsJson.length) {
    nextBtn.disabled = true;
  }
  mainCard.classList.remove("is-slided-left", "is-slided-right");
  offCard.classList.remove("is-slided-left", "is-slided-right");

  setTimeout(() => {
    mainCard.classList.add("is-slided-left");
    offCard.classList.add("is-slided-left");
  }, 10);
});