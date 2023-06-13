const swipeGestureDist = 50;

let touchstartX;
let touchstartY;
let touchendX;
let isScroll;

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
  touchstartY = e.changedTouches[0].screenY;
  isScroll = false;
});

/**
 * prevent swiping cards after scrolling
 */
document.addEventListener('touchmove', e => {
  const dy = e.changedTouches[0].screenY - touchstartY;

  if (Math.abs(dy) > swipeGestureDist) {
    isScroll = true;
  }
});

document.addEventListener('touchend', e => {
  if (isScroll) {
    return;
  }
  touchendX = e.changedTouches[0].screenX;
  const swipeGesture = getSwipeDirection();

  if (swipeGesture !== 0) {
    slideCards(currentCardIdx - swipeGesture);
  }
});

function getSwipeDirection() {
  const dx = touchendX - touchstartX;

  if (Math.abs(dx) < swipeGestureDist) {
    return 0;
  }
  return dx > 0 ? 1 : -1;
}
