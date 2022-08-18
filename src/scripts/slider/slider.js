const slider = document.querySelector('.slider');

let swiper;

function modileSlider() {
  if (window.innerWidth <= 1012 && slider.dataset.slider == 'false') {
    swiper = new Swiper(slider, {
      slidesPerView: 1,
      slideClass: 'list',
      navigation: {
        nextEl: '.pagination__rigth',
        prevEl: '.pagination__left',
        disabledClass: 'disable',
      },
      pagination: {
        el: '.pagination__counter',
        type: 'custom',
        horizontalClass: '.pagination__horizontal',
        renderCustom: function (_, current, total) {
          return `<span class="pagination__current">${current}</span>/<span class="pagination__total">${total}</span>`;
        },
      },
      spaceBetween: 10,
    });
    slider.dataset.slider = 'true';
  }
  if (window.innerWidth > 1012) {
    slider.dataset.slider = 'false';
    if (slider.classList.contains('swiper-initialized')) swiper.destroy();
  }
}

modileSlider();
window.addEventListener('resize', () => modileSlider());
