//slide
(function () {
  const thisHappenSlide = document.querySelectorAll('.this_slide_box')
  const thisBookPrev = document.querySelector('.this_prev')
  const thisBookNext = document.querySelector('.this_next')
  let thisHappenIndex = 1

  thisHappenAdd = (num) => {
    thisHappenLogic(thisHappenIndex += num)
  }

  thisShowSlide = (num) => {
    thisHappenLogic(thisHappenIndex = num)
  }

  thisHappenLogic = (num) => {
    if (num > thisHappenSlide.length) {
      thisHappenIndex = 1
    }
    if (num < 1) {
      thisHappenIndex = thisHappenSlide.length
    }
    for (let i = 0; i < thisHappenSlide.length; i++) {
      const element = thisHappenSlide[i];
      console.log(thisHappenSlide)
      element.classList.remove('ch_flex')
    }
    thisHappenSlide[thisHappenIndex - 1].classList.add('ch_flex')
  }

  thisHappenLogic(thisHappenIndex)

  thisBookPrev.addEventListener('click', () => {
    thisHappenAdd(-1)
  })

  thisBookNext.addEventListener('click', () => {
    thisHappenAdd(1)
  })
})();
//화제의 신간
//국내도서 slide
(function () {
  const newCountrySlide = document.querySelectorAll('.new_country_slide')
  const bookCountryPrev = document.querySelector('.new_book_country .book_prev')
  const bookCountryNext = document.querySelector('.new_book_country .book_next')
  let countryIndex = 1

  countryAdd = (num) => {
    countryLogic(countryIndex += num)
  }

  countrySlide = (num) => {
    countryLogic(countryIndex = num)
  }

  countryLogic = (num) => {
    if (num > newCountrySlide.length) {
      countryIndex = 1
    }
    if (num < 1) {
      countryIndex = newCountrySlide.length
    }
    for (let i = 0; i < newCountrySlide.length; i++) {
      const element = newCountrySlide[i];
      console.log(newCountrySlide)
      element.classList.remove('ch_flex')
    }
    newCountrySlide[countryIndex - 1].classList.add('ch_flex')
  }

  countryLogic(countryIndex)

  bookCountryPrev.addEventListener('click', () => {
    countryAdd(-1)
  })

  bookCountryNext.addEventListener('click', () => {
    countryAdd(1)
  })
})();
//외국도서 slide
(function () {
  const newForeignSlide = document.querySelectorAll('.new_foreign_slide')
  const bookForeignPrev = document.querySelector('.new_book_foreign .book_prev')
  const bookForeignNext = document.querySelector('.new_book_foreign .book_next')
  let foreignIndex = 1

  foreignAdd = (num) => {
    foreignLogic(foreignIndex += num)
  }

  foreignSlide = (num) => {
    foreignLogic(foreignIndex = num)
  }

  foreignLogic = (num) => {
    if (num > newForeignSlide.length) {
      foreignIndex = 1
    }
    if (num < 1) {
      foreignIndex = newForeignSlide.length
    }
    for (let i = 0; i < newForeignSlide.length; i++) {
      const element = newForeignSlide[i];
      console.log(newForeignSlide)
      element.classList.remove('ch_flex')
    }
    newForeignSlide[foreignIndex - 1].classList.add('ch_flex')
  }

  foreignLogic(foreignIndex)

  bookForeignPrev.addEventListener('click', () => {
    foreignAdd(-1)
  })

  bookForeignNext.addEventListener('click', () => {
    foreignAdd(1)
  })
})();
//eBook slide
(function () {
  const newEbookSlide = document.querySelectorAll('.new_ebook_slide')
  const bookEbookPrev = document.querySelector('.new_book_ebook .book_prev')
  const bookEbookNext = document.querySelector('.new_book_ebook .book_next')
  let ebookIndex = 1

  ebookAdd = (num) => {
    ebookLogic(ebookIndex += num)
  }

  ebookSlide = (num) => {
    ebookLogic(ebookIndex = num)
  }

  ebookLogic = (num) => {
    if (num > newEbookSlide.length) {
      ebookIndex = 1
    }
    if (num < 1) {
      ebookIndex = newEbookSlide.length
    }
    for (let i = 0; i < newEbookSlide.length; i++) {
      const element = newEbookSlide[i];
      console.log(newEbookSlide)
      element.classList.remove('ch_flex')
    }
    newEbookSlide[ebookIndex - 1].classList.add('ch_flex')
  }

  ebookLogic(ebookIndex)

  bookEbookPrev.addEventListener('click', () => {
    ebookAdd(-1)
  })

  bookEbookNext.addEventListener('click', () => {
    ebookAdd(1)
  })
})();
//sam slide
(function () {
  const newSamSlide = document.querySelectorAll('.new_sam_slide')
  const bookSamPrev = document.querySelector('.new_book_sam .book_prev')
  const bookSamNext = document.querySelector('.new_book_sam .book_next')
  let samIndex = 1

  samAdd = (num) => {
    samLogic(samIndex += num)
  }

  samSlide = (num) => {
    samLogic(samIndex = num)
  }

  samLogic = (num) => {
    if (num > newSamSlide.length) {
      samIndex = 1
    }
    if (num < 1) {
      samIndex = newSamSlide.length
    }
    for (let i = 0; i < newSamSlide.length; i++) {
      const element = newSamSlide[i];
      console.log(newSamSlide)
      element.classList.remove('ch_flex')
    }
    newSamSlide[samIndex - 1].classList.add('ch_flex')
  }

  samLogic(samIndex)

  bookSamPrev.addEventListener('click', () => {
    samAdd(-1)
  })

  bookSamNext.addEventListener('click', () => {
    samAdd(1)
  })
})();
//음반/기프트 slide
(function () {
  const newAlbumSlide = document.querySelectorAll('.new_album_slide')
  const bookAlbumPrev = document.querySelector('.new_book_album .book_prev')
  const bookAlbumNext = document.querySelector('.new_book_album .book_next')
  let albumIndex = 1

  albumAdd = (num) => {
    albumLogic(albumIndex += num)
  }

  albumSlide = (num) => {
    albumLogic(albumIndex = num)
  }

  albumLogic = (num) => {
    if (num > newAlbumSlide.length) {
      albumIndex = 1
    }
    if (num < 1) {
      albumIndex = newAlbumSlide.length
    }
    for (let i = 0; i < newAlbumSlide.length; i++) {
      const element = newAlbumSlide[i];
      console.log(newAlbumSlide)
      element.classList.remove('ch_flex')
    }
    newAlbumSlide[albumIndex - 1].classList.add('ch_flex')
  }

  albumLogic(albumIndex)

  bookAlbumPrev.addEventListener('click', () => {
    albumAdd(-1)
  })

  bookAlbumNext.addEventListener('click', () => {
    albumAdd(1)
  })
})();
//ONLY 교보문고 slide
(function () {
  const onlyIconHide = document.querySelectorAll(".only_icon_hide")
  const onlyPrev = document.querySelector(".only_prev")
  const onlyNext = document.querySelector(".only_next")
  let onlyIndex = 1;

  onlyAdd = (num) => {
    onlyLogic(onlyIndex += num)
  }

  onlySlide = (num) => {
    onlyLogic(onlyIndex = num)
  }

  onlyLogic = (num) => {
    if (num > onlyIconHide.length) {
      onlyIndex = 1
    }
    if (num < 1) {
      onlyIndex = onlyIconHide.length
    }
    for (let i = 0; i < onlyIconHide.length; i++) {
      const element = onlyIconHide[i];
      console.log(onlyIconHide)
      element.classList.remove('ch_flex')
    }
    onlyIconHide[onlyIndex - 1].classList.add('ch_flex')
  }

  onlyLogic(onlyIndex)

  onlyPrev.addEventListener('click', () => {
    onlyAdd(-1)
  })

  onlyNext.addEventListener('click', () => {
    onlyAdd(1)
  })
})();
//이럴 땐 이런 책 
//background-color 변경
const thisTag = document.querySelectorAll('.this_tag');
let tagColor = ["#59a1c2", "#96649f", "#cb6b58", "#5e6b9e", "#dfaa1d", "#5f9943"];

(function () {
  for (let i = 0; i < thisTag.length; i++) {
    thisTag[i].style.backgroundColor = tagColor[i];
  }
})();
//라이징스타 지금 뜨는 HOT템
//클릭하면 넘어가는 slide
const centerSlides = document.querySelector(".center_slide ul");
const centerPrev = document.querySelector(".center_left");
const centerNext = document.querySelector(".center_right");

(function addEvent() {
  centerPrev.addEventListener('click', translateslides.bind(this, 1));
  centerNext.addEventListener('click', translateslides.bind(this, -1));
})();

function translateslides(direction) {
  const selectedBtn = (direction === 1) ? 'prev' : 'next'; //direction이 1일 때 prev 아닐 시 next
  centerSlides.style.transitionDuration = '800ms';
  centerSlides.style.transform = `translateX(${direction * (103 / 6.2)}%)`;
  centerSlides.ontransitionend = () => reorganizeEl(selectedBtn);
}

function reorganizeEl(selectedBtn) {
  centerSlides.removeAttribute('style');
  (selectedBtn === 'prev') ? centerSlides.insertBefore(centerSlides.lastElementChild, centerSlides.firstElementChild) : centerSlides.appendChild(centerSlides.firstElementChild);
}

