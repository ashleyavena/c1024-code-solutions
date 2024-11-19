const $slides = document.querySelectorAll('.slides img');
if (!$slides) throw new Error('Slides not found');

const $prevButton = document.querySelector('.prev');
if (!$prevButton) throw new Error('Previous button not found');

const $nextButton = document.querySelector('.next');
if (!$nextButton) throw new Error('Next button not found');

const $dots = document.querySelectorAll('.selector-dots .dots');
if (!$dots) throw new Error('Dots not found');

let currentSlide = 0;
let intervalID: any = null;

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  intervalID = setInterval(nextSlide, 3000);

  if ($prevButton && $nextButton) {
    $prevButton.addEventListener('click', () => {
      clearInterval(intervalID);
      prevSlide();
      setTimeout(() => {
        intervalID = setInterval(nextSlide, 3000);
      }, 3000);
    });
    $nextButton.addEventListener('click', () => {
      clearInterval(intervalID);
      nextSlide();
      setTimeout(() => {
        intervalID = setInterval(nextSlide, 3000);
      }, 3000);
    });
  }

  for (let i = 0; i < $dots.length; i++) {
    $dots[i].addEventListener('click', () => {
      const dot = $dots[i] as HTMLElement;
      const index = Number(dot.dataset.slide);
      showSlide(index);
      setTimeout(() => {
        intervalID = setInterval(nextSlide, 3000);
      }, 3000);
    });
  }
});

function showSlide(index: number): void {
  if (index >= $slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = $slides.length - 1;
  } else {
    currentSlide = index;
  }

  for (let i = 0; i < $slides.length; i++) {
    $slides[i].classList.remove('displaySlide');
  }

  $slides[currentSlide].classList.add('displaySlide');

  for (let i = 0; i < $dots.length; i++) {
    $dots[i].classList.remove('active');
  }

  $dots[currentSlide].classList.add('active');
}

function prevSlide(): void {
  clearInterval(intervalID);
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = $slides.length - 1;
  }
  showSlide(currentSlide);
  intervalID = setInterval(nextSlide, 3000);
}

function nextSlide(): void {
  currentSlide++;
  if (currentSlide >= $slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setTimeout(() => {
  clearInterval(intervalID);
}, 15000);
