//swiper//
document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.querySelector(".mySwiper");

  if (swiperContainer) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 50,
        },
      },
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelector(".header2-menus");

  if (menu && menuItems) {
    menu.addEventListener("click", function () {
      // Toggle .show on .header2-menus
      menuItems.classList.toggle("show");

      // Toggle .ph-list and .ph-x inside .menu
      const icon = menu.querySelector(".ph-list, .ph-x");
      if (icon) {
        icon.classList.toggle("ph-list");
        icon.classList.toggle("ph-x");
      }
    });
  }
});

// form //
const btnDetails = document.getElementById("btn-details");
const btnPayment = document.getElementById("btn-payment");
const detailsForm = document.getElementById("details-form");
const paymentSummary = document.getElementById("payment-summary");

btnDetails.addEventListener("click", function () {
  btnDetails.classList.add("active");
  btnPayment.classList.remove("active");
  detailsForm.classList.remove("d-none");
  paymentSummary.classList.add("d-none");
});

btnPayment.addEventListener("click", function () {
  btnPayment.classList.add("active");
  btnDetails.classList.remove("active");
  detailsForm.classList.add("d-none");
  paymentSummary.classList.remove("d-none");
});
