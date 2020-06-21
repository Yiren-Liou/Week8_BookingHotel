//carousel
var swiper = new Swiper('.swiper-container', {
  speed: 600,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(document).ready(function(){
  
  $(".addCart").click(function(){
    $(".addCartDesc").toggleClass("open");
  });

  $(".dropdown-btn").click(function(){
    event.preventDefault();
    $(".dropdownIcon").toggleClass("change");
  });
});
