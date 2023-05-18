let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');


burger.addEventListener('click',

function() {

burger.classList.toggle('burger--active');

menu.classList.toggle('header__nav--active');

document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function(){

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
});

// const btnMore = document.querySelector('.articles-more');
// const articlesItems = document.querySelectorAll('.articles-item');

// btnMore.addEventListener('click', () => {
//   articlesItems.forEach(el => { el.classList.add('articles-item--visible') });
//   btnMore.closest('#articles-center').classList.add('articles-center--hidden');
// });

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let tabBtn = document.querySelectorAll('.tab-nav__btn');
let tabStep = document.querySelectorAll('.tab__step');

tabBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabBtn.forEach(function(btn){ btn.classList.remove('tab-nav__btn--active')});
    e.currentTarget.classList.add('tab-nav__btn--active');

    tabStep.forEach(function(element){ element.classList.remove('tab__step--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tab__step--active');
  });
});

document.querySelectorAll('.questions__marker').forEach(function(element){
  element.addEventListener('click',
  function() {

    element.classList.toggle('questions__marker--active');

  })
})


let btnSearh = document.querySelector(".search");
let fieldSearch = document.querySelector(".header__search");
let btnCloseSearch = document.querySelector(".header__close-search");

btnSearh.addEventListener("click", function () {
  fieldSearch.classList.add("header__search--active");
});

btnCloseSearch.addEventListener("click", function () {
  fieldSearch.classList.remove("header__search--active");
});



