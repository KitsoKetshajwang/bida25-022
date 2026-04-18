 const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');
let current  = 0;
let timer;

function goTo(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function next() {
  goTo((current + 1) % slides.length);
}

function startTimer() {
  timer = setInterval(next, 5000);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(timer);
    goTo(parseInt(dot.dataset.index));
    startTimer();
  });
});

startTimer();