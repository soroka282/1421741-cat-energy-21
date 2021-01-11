'use strict'

// Menu

const siteList = document.querySelector('.site-list');
const toggleMenu = document.querySelector('.page-header__toggle');

siteList.classList.remove('site-list--no-js');
toggleMenu.classList.remove('page-header__toggle--hidden');

toggleMenu.addEventListener('click', function() {
  siteList.classList.toggle('site-list--close');
  toggleMenu.classList.toggle('page-header__toggle--closed');
})

// Slider

const SliderToggleNext = document.querySelector('.example__toggle-next');
const SliderTogglePrev = document.querySelector('.example__toggle-prev ');
const SliderRangeShow = document.querySelector('.example__slider-toggle');
const SliderImageCatSlim = document.querySelector('.example__cat-slim');
const SliderImageCatFat = document.querySelector('.example__cat-fat');

SliderToggleNext.addEventListener('click', function() {
  SliderRangeShow.classList.add('example__slider-toggle--next-active');
  SliderRangeShow.classList.remove('example__slider-toggle--prev-active');
  SliderImageCatSlim.classList.remove('example__cat--hidden');
  SliderImageCatFat.classList.add('example__cat--hidden');
})

SliderTogglePrev.addEventListener('click', function() {
  SliderRangeShow.classList.remove('example__slider-toggle--next-active');
  SliderRangeShow.classList.add('example__slider-toggle--prev-active');
  SliderImageCatSlim.classList.add('example__cat--hidden');
  SliderImageCatFat.classList.remove('example__cat--hidden');
})
