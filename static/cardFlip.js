let cards = document.querySelectorAll('.flip-card-inner');
let isDrag;

[...cards].forEach((card)=>{
  card.addEventListener('mousedown', function() {
    isDrag = true;
  });
  card.addEventListener('mousemove', function() {
    isDrag = false;
  });
  card.addEventListener('mouseup', function() {
    if (isDrag) {
      card.classList.toggle('is-flipped');
    }
  });
});