'use strict';
//이 책을 구매한 분들이 함께 구매한 상품입니다 prev/next button
(function () {
  const otherBookContainer = document.querySelectorAll('.other_book_container')
  const otherPrev = document.querySelector('.other_prev')
  const otherNext = document.querySelector('.other_next')
  let otherIndex = 1
  let otherAdd
  let otherSlide
  let otherLogic

  otherAdd = (num) => {
    otherLogic(otherIndex += num)
  }

  otherSlide = (num) => {
    otherLogic(otherIndex = num)
  }

  otherLogic = (num) => {
    if (num > otherBookContainer.length) {
      otherIndex = 1
    }
    if (num < 1) {
      otherIndex = otherBookContainer.length
    }
    for (let i = 0; i < otherBookContainer.length; i++) {
      const element = otherBookContainer[i];
      console.log(otherBookContainer)
      element.classList.remove('ch_flex')
    }
    otherBookContainer[otherIndex - 1].classList.add('ch_flex')
  }

  otherLogic(otherIndex)

  otherPrev.addEventListener('click', () => {
    otherAdd(-1)
  })

  otherNext.addEventListener('click', () => {
    otherAdd(1)
  })
})();

//정지우의 다른 작품 prev/next btn
(function () {
  const authorOtherWrap = document.querySelectorAll('.author_other_wrap')
  const otherBookPrev = document.querySelector('.otherbook_prev')
  const otherBookNext = document.querySelector('.otherbook_next')
  let otherBookIndex = 1
  let otherBookAdd
  let otherBookSlide
  let otherBookLogic

  otherBookAdd = (num) => {
    otherBookLogic(otherBookIndex += num)
  }

  otherBookSlide = (num) => {
    otherBookLogic(otherBookIndex = num)
  }

  otherBookLogic = (num) => {
    if (num > authorOtherWrap.length) {
      otherBookIndex = 1
    }
    if (num < 1) {
      otherbookIndex = authorOtherWrap.length
    }
    for (let i = 0; i < authorOtherWrap.length; i++) {
      const element = authorOtherWrap[i];
      console.log(authorOtherWrap)
      element.classList.remove('ch_flex')
    }
    authorOtherWrap[otherBookIndex - 1].classList.add('ch_flex')
  }

  otherBookLogic(otherBookIndex)

  otherBookPrev.addEventListener('click', () => {
    otherBookAdd(-1)
  })

  otherBookNext.addEventListener('click', () => {
    otherBookAdd(1)
  })
})();

