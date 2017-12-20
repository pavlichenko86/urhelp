$(document).ready(function() {
  var swiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: 2,
    loop: true,
    breakpoints: {
      // when window width is <= 640px
      990: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
  });

  var wow = new WOW({
    boxClass: "wow1",
    callback: function(box) {
      $(".about-exp__count1").animateNumber({ number: 20 }, 2000);
      $(".about-exp__count2").animateNumber({ number: 5580 }, 3000);
      $(".about-exp__count3").animateNumber({ number: 760 }, 3000);
    },
    scrollContainer: null
  });
  wow.init();

  var wow = new WOW({
    boxClass: "wow2",
    callback: function(box) {
      $(".services-img").addClass("services-img-run");
    },
    scrollContainer: null
  });
  wow.init();
});
