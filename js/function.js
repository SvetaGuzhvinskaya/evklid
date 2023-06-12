document.addEventListener('DOMContentLoaded', function () {
  // Btn menu
  document.querySelector(".btn-menu").addEventListener('click', function(){
    this.classList.toggle("btn-menu--is-open")
    document.querySelector(".nav__list").classList.toggle("nav__list--is-open")
  });
  // Tabs
  const tabBtn = document.querySelectorAll(".tabs__nav-btn");
  const tabContent = document.querySelectorAll(".tabs__content");

  for (var i = 0; i < tabBtn.length; i++) {

    tabBtn[i].addEventListener("click", function (e) {
      e.preventDefault();
      const activeBtnAttr = e.target.getAttribute("data-path");

      for (var j = 0; j < tabBtn.length; j++) {
        const contentAttr = tabContent[j].getAttribute("data-target");

        if (activeBtnAttr === contentAttr) {
          tabBtn[j].classList.add("tabs__nav-btn--is-active");
          tabContent[j].classList.add("tabs__content--is-active");
        } else {
          tabBtn[j].classList.remove("tabs__nav-btn--is-active");
          tabContent[j].classList.remove("tabs__content--is-active");
        }
      };
    });
  }

  // Slider
  const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.section-top__nav',
      bulletClass: 'section-top__nav-link',
      bulletActiveClass: 'section-top__nav-link--is-active',
      clickableClass: 'section-top__nav-link--is-active',
      currentClass: 'section-top__nav-link--is-active',
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  // Accordion
  $(".accordion").accordion({
    heightStyle: "content",
    active: false,
    collapsible: true
  });
});
