//javascript
    //Header
    //상단 search위 추천
    (function () {
      const searchPage = document.querySelectorAll('.search_page')
      const searchPagePrev = document.querySelector('.btn_left')
      const searchPageNext = document.querySelector('.btn_right')
      let searchPageIndex = 1

      searchAdd = (num) => {
        searchSlideLogic(searchPageIndex += num)
      }

      thisSlide = (num) => {
        searchSlideLogic(searchPageIndex = num)
      }

      searchSlideLogic = (num) => {
        if (num > searchPage.length) {
          searchPageIndex = 1
        }
        if (num < 1) {
          searchPageIndex = searchPage.length
        }
        for (let i = 0; i < searchPage.length; i++) {
          const element = searchPage[i];
          console.log(searchPage)
          element.classList.remove('ch_on')
        }
        searchPage[searchPageIndex - 1].classList.add('ch_on')
      }

      searchSlideLogic(searchPageIndex)

      searchPagePrev.addEventListener('click', () => {
        searchAdd(-1)
      })

      searchPageNext.addEventListener('click', () => {
        searchAdd(1)
      })
    })();
    //우측 배너
    (function () {
      const topBannerSlides = document.querySelectorAll('.banner_link li')
      const topBannerPrev = document.querySelector('.side_left')
      const topBannerNext = document.querySelector('.side_right')
      let topBannerIndex = 1

      addSlides = (num) => {
        slideLogic(topBannerIndex += num)
      }

      thisSlide = (num) => {
        slideLogic(topBannerIndex = num)
      }

      slideLogic = (num) => {
        if (num > topBannerSlides.length) {
          topBannerIndex = 1
        }
        if (num < 1) {
          topBannerIndex = topBannerSlides.length
        }
        for (let i = 0; i < topBannerSlides.length; i++) {
          const element = topBannerSlides[i];
          console.log(topBannerSlides)
          element.classList.remove('ch_on')
        }
        topBannerSlides[topBannerIndex - 1].classList.add('ch_on')
      }

      slideLogic(topBannerIndex)

      topBannerPrev.addEventListener('click', () => {
        addSlides(-1)
      });

      topBannerNext.addEventListener('click', () => {
        addSlides(1)
      });
    })();
    //Hamburger navigation hide
    const handleHamburger = () => {
      const nav = document.querySelector('.hamburger_nav')
      const hideNav = document.querySelector('.hamburger_hide')
      const menu = document.querySelector('.hamburger_nav .hamburger')
      const hideMenu = document.querySelector('.hamburger_hide_nav .hamburger_x')
      console.log(menu)
      console.log(nav)
      console.log(hideMenu)
      menu.addEventListener('mouseenter', () => {
          nav.classList.remove('ch_on')
          menu.classList.remove('ch_on')
          nav.classList.add('ch_off')
          nav.classList.add('ch_off')
          hideNav.classList.add('ch_on')
          hideMenu.classList.add('ch_on') 
          hideNav.classList.remove('ch_off')
          hideMenu.classList.remove('ch_off') 
      })
      hideMenu.addEventListener('mouseleave', () => {
        nav.classList.remove('ch_off')
        menu.classList.remove('ch_off')
        nav.classList.add('ch_on')
        nav.classList.add('ch_on')
        hideNav.classList.remove('ch_on')
        hideMenu.classList.remove('ch_on')
      })
    }

    handleHamburger()