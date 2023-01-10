const menuButton = document.querySelector('.nav__icon');
const menuList = document.querySelector('.nav');
const sliderContainer = document.querySelector('.slider__container');
const sliderLRightBtn = document.querySelector('.slider__button_right');
const sliderLeftBtn = document.querySelector('.slider__button_left');

menuButton.addEventListener('click', () => {
  menuList.classList.toggle('active');
})

const scrollCards = (offset) => {
  sliderContainer.scrollLeft += offset;
}

sliderLRightBtn.addEventListener('mousedown', () => {
  scrollCards(416);
});

sliderLeftBtn.addEventListener('mousedown', () => {
  scrollCards(-416);
});