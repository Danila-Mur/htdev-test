'use strict'

document.addEventListener('DOMContentLoaded', () => {
  // SLIDER ADVANTAGES
  const sliderAdvantages = document.querySelector('.swiper.advantages__slider')
  let mySwiper

  if (sliderAdvantages) {
    sliderAdvantages.dataset.mobile = sliderAdvantages.dataset.mobile || 'false'

    function mobileSliderAdvantages() {
      const isMobile = window.innerWidth <= 929
      const isInitialized = sliderAdvantages.classList.contains('swiper-initialized')

      if (isMobile && sliderAdvantages.dataset.mobile === 'false') {
        mySwiper = new Swiper(sliderAdvantages, {
          loop: true,
          pagination: {
            el: '.swiper-pagination.swiper-pagination--advantages',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next.swiper-button-next--advantages',
            prevEl: '.swiper-button-prev.swiper-button-prev--advantages',
          },
          breakpoints: {
            300: { slidesPerView: 1, spaceBetween: 25 },
            610: { slidesPerView: 2, spaceBetween: 25 },
          },
        })
        sliderAdvantages.dataset.mobile = 'true'
      }

      if (!isMobile && isInitialized) {
        mySwiper.destroy()
        sliderAdvantages.dataset.mobile = 'false'
      }
    }

    mobileSliderAdvantages()
    window.addEventListener('resize', mobileSliderAdvantages)
  }

  // SLIDER PRESENTATION
  const sliderPresentation = document.querySelector('.swiper--presentation')
  if (sliderPresentation) {
    new Swiper(sliderPresentation, {
      loop: true,
      pagination: {
        el: '.swiper-pagination.swiper-pagination--presentation',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next.swiper-button-next--presentation',
        prevEl: '.swiper-button-prev.swiper-button-prev--presentation',
      },
      breakpoints: {
        300: { slidesPerView: 1, spaceBetween: 25 },
        610: { slidesPerView: 2, spaceBetween: 25 },
      },
    })
  }

  // ADVANTAGES MORE
  document.querySelectorAll('.advantages__item-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const moreElement = document.querySelectorAll('.advantages__more')[index]
      if (moreElement) {
        btn.classList.toggle('advantages__item-btn--active')
        moreElement.classList.toggle('advantages__more--active')
      }
    })
  })
})
