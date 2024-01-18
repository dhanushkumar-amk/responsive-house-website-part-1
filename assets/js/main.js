/*=============== CHANGE BACKGROUND HEADER ===============*/ const scrollHeader =  () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50
      ? header.classList.add('scroll-header')
      : header.classList.remove('scroll-header');
  };
window.addEventListener('scroll', scrollHeader);

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperPopular = new Swiper('.popular__container', {
  spaceBetween: 3,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: 'true',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*=============== NEW SWIPER ===============*/
// let newSwiper = new Swiper('.new-swiper', {
//   spaceBetween: 24,

//   loop: 'true',

//   breakpoints: {
//     576: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//   },
// });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector(
        '.nav__menu a[href*=' + sectionId + ']'
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
// const scrollUp = () => {
//   const scrollUp = document.getElementById('scroll-up');
//   // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
//   this.scrollY >= 350
//     ? scrollUp.classList.add('show-scroll')
//     : scrollUp.classList.remove('show-scroll');
// };
// window.addEventListener('scroll', scrollUp);

/*=============== SHOW CART ===============*/
// const cart = document.getElementById('cart'),
//   cartShop = document.getElementById('cart-shop'),
//   cartClose = document.getElementById('cart-close');

// /*===== CART SHOW =====*/
// /* Validate if constant exists */
// if (cartShop) {
//   cartShop.addEventListener('click', () => {
//     cart.classList.add('show-cart');
//   });
// }

// /*===== CART HIDDEN =====*/
// /* Validate if constant exists */
// if (cartClose) {
//   cartClose.addEventListener('click', () => {
//     cart.classList.remove('show-cart');
//   });
// }

/*=============== DARK LIGHT THEME ===============*/
// const themeButton = document.getElementById('theme-button');
// const darkTheme = 'dark-theme';
// const iconTheme = 'bx-sun';

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme');
// const selectedIcon = localStorage.getItem('selected-icon');

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () =>
//   document.body.classList.contains(darkTheme) ? 'dark' : 'light';
// const getCurrentIcon = () =>
//   themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
//     darkTheme
//   );
//   themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](
//     iconTheme
//   );
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//   // Add or remove the dark / icon theme
//   document.body.classList.toggle(darkTheme);
//   themeButton.classList.toggle(iconTheme);
//   // We save the theme and the current icon that the user chose
//   localStorage.setItem('selected-theme', getCurrentTheme());
//   localStorage.setItem('selected-icon', getCurrentIcon());
// });

const accordianItems = document.querySelectorAll('.value__accordian-item');

accordianItems.forEach((item) => {
  const accordianHeader = item.querySelector('.value__accordian-header');

  accordianHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordian-open');
    toggleItem(item);
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});
const toggleItem = (item) => {
  const accordianContent = item.querySelector('.value__accordian-content');

  if (item.classList.contains('accordian-open')) {
    accordianContent.removeAttribute('style');
    item.classList.remove('accordian-open');
  } else {
    accordianContent.style.height = accordianContent.scrollHeight + 'px';
    item.classList.add('accordian-open');
  }
};
