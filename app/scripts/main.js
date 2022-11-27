$(".customer-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow: `<button type='button' class='slick-prev pull-left'><img src="../images/arrow-left.svg" /></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><img src="../images/arrow-right.svg" /></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
  ],
});

// Toggle menu

const toggleMenu = document.querySelector(".toggle-menu");
const headerMenu = document.querySelector(".header-menu");

toggleMenu.addEventListener("click", handleMenu);

function handleMenu(e) {
  console.log(e.target);
  headerMenu.classList.add("is-show");
}
document.addEventListener("click", function (e) {
  if (!headerMenu.contains(e.target) && !e.target.matches(".toggle-menu")) {
    headerMenu.classList.remove("is-show");
  }
});
