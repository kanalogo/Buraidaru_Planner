/**
* 最大幅に基づいてviewport設定を切り替える関数。
* @function
* @param {number} maxWidth - viewportを固定する際の最大幅
*/
const switchViewport = (maxWidth) => {
  const viewport = document.querySelector('meta[name="viewport"]');
  const value =
    window.outerWidth > maxWidth
      ? "width=device-width,initial-scale=1"
      : `width=${maxWidth}`;
  if (viewport.getAttribute("content") !== value) {
    viewport.setAttribute("content", value);
  }
};
addEventListener("resize", () => switchViewport(375));
switchViewport(375);



// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", () => {
  //定義
  const drawerIcon = document.querySelector('.p-drawer__icon');
  const bg = document.querySelector('.p-main-bg');
  const navItem = document.querySelector('.p-header__nav');
  const drawer = document.querySelector('.p-drawer');
  const drawerNavItem = document.querySelectorAll('.p-drawer__body a[href^="#"]');
  const headerHeight = document.querySelector('.p-header').offsetHeight;
  const body = document.querySelector('body');
  const breakpoint = 768;
  let isMenuOpen = false;
  let isMenuOpenAtBreakpoint = false;

  //メニューを開くアニメーション
  const openMenu = () => {
    if (!drawer.classList.contains("js-show")) {
      drawer.classList.add("js-show");
      drawerIcon.classList.add("js-show");
      bg.classList.add("is-show");
      navItem.classList.add("is-hidden");
      body.style.overflow = "hidden";
    }
  }

  //メニューを閉じるアニメーション
  const closeMenu = () => {
    if (drawer.classList.contains("js-show")) {
      drawer.classList.remove("js-show");
      drawerIcon.classList.remove("js-show");
      bg.classList.remove("is-show");
      body.style.overflow = "auto";
      navItem.classList.remove("is-hidden");
      isMenuOpen = false;
    }
  }

  //メニューの開閉動作
  const toggleMenu = () => {
    if (!drawer.classList.contains("js-show")) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  //リサイズ処理
  const handleResize = () => {
    const bp = breakpoint;
    const windowWidth = window.innerWidth;
    if (windowWidth > bp && isMenuOpenAtBreakpoint) {
      closeMenu();
    } else if (windowWidth <= bp && drawer.classList.contains("js-show")) {
      isMenuOpenAtBreakpoint = true;
    }
  };

  //メニュー外クリック処理
  const clickOuter = (event) => {
    if (drawer.classList.contains("js-show") && !drawer.contains(event.target) && isMenuOpen) {
      closeMenu();
    } else if (drawer.classList.contains("js-show") && !drawer.contains(event.target)) {
      isMenuOpen = true;
    }
  }

  //該当箇所までスクロール
  const linkScroll = (target) => {
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  //ヘッダーアイコン クリック時
  drawerIcon.addEventListener("click", toggleMenu);
  //画面幅リサイズ時
  window.addEventListener("resize", handleResize);
  //メニュー外クリック時
  document.addEventListener("click", clickOuter);
  //ページ内リンクナビメニュー クリック時
  drawerNavItem.forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault();
      closeMenu();
      const targetItem = document.querySelector(item.getAttribute("href"));
      linkScroll(targetItem);
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = item.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        // headerの高さを取得 (実際のheaderのクラス名と差し替えてください)
        const headerOffset = document.querySelector(".l-header").offsetHeight;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});


// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", () => {
  //定義
  const modalBtn1 = document.querySelector('.js-plan-btn div a');
  const bg = document.querySelector('.p-main-bg');
  const modalArea1 = document.querySelector('.p-plan__modal');
  const body = document.querySelector('body');

  modalBtn1.addEventListener('click',(el) => {
    el.preventDefault();
    modalArea1.classList.add("is-show");
    bg.classList.add("is-active");
    body.style.overflow = "hidden";

  });

  bg.addEventListener('click', ()  => {
    modalArea1.classList.remove("is-show");
    bg.classList.remove("is-active");
    body.style.overflow = "auto";
  });

   //メニュー外クリック処理
  //  const clickOuter2 = (event) => {
  //   if (modalArea1.classList.contains("js-show")) {
  //     modalArea1.classList.remove("is-show");
  //   bg.classList.remove("is-active");
  //   } 
  // }

   //メニュー外クリック時
   
  


});

// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded",() => {
  //定義
  const modalBtn2 = document.querySelector('.js-area-btn div a');
  const bg = document.querySelector('.p-main-bg');
  const modalArea2 = document.querySelector('.p-area__modal');
  const body = document.querySelector('body');

  modalBtn2.addEventListener('click', (el) => {
    el.preventDefault();
    modalArea2.classList.add("is-show");
    bg.classList.add("is-active");
    body.style.overflow = "hidden";
  });

  bg.addEventListener('click', ()  => {
    modalArea2.classList.remove("is-show");
    bg.classList.remove("is-active");
    body.style.overflow = "auto";
  })


   //メニュー外クリック処理
  //  const clickOuter2 = (event) => {
  //   if (modalArea1.classList.contains("js-show")) {
  //     modalArea1.classList.remove("is-show");
  //   bg.classList.remove("is-active");
  //   } 
  // }

   //メニュー外クリック時
   
  


});


window.addEventListener('load',function(){
  gsap.registerPlugin(ScrollTrigger);
 
   //見出しの文字が下から出現
   const underTextItems = document.querySelectorAll('.c-heading-l1');
   underTextItems.forEach(item => {
     ScrollTrigger.create({
       trigger: item,
       start: "top 70%", // 要素が上部から70%の位置で発火
       onEnter: () => {
         // 要素内に入ったら、js-showクラスをつける
         item.classList.add("is-active");
       }
     });
   });
  });

    //見出しの文字が下から出現
    const underTextItems2 = document.querySelectorAll('.c-heading-l2');
    underTextItems2.forEach(item => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 70%", // 要素が上部から70%の位置で発火
        onEnter: () => {
          // 要素内に入ったら、js-showクラスをつける
          item.classList.add("is-active");
        }
      });
    });

     //見出しの文字が下から出現
     const underBtnItems = document.querySelectorAll('.c-main__btn');
     underBtnItems.forEach(item => {
       ScrollTrigger.create({
         trigger: item,
         start: "top 70%", // 要素が上部から70%の位置で発火
         onEnter: () => {
           // 要素内に入ったら、js-showクラスをつける
           item.classList.add("is-active");
         }
       });
     });

      //見出しの文字が下から出現
      const underBtnWrap = document.querySelector('.p-best-planner__btn-wrap');
      
        ScrollTrigger.create({
          trigger: underBtnWrap,
          start: "top 70%", // 要素が上部から70%の位置で発火
          onEnter: () => {
            // 要素内に入ったら、js-showクラスをつける
            underBtnWrap.classList.add("is-active");
          }
        });

        const slideShowImage1 = document.querySelectorAll('.c-reccomend__item');

        slideShowImage1.forEach((item, index) => {
          ScrollTrigger.create({
            trigger: item,
            start: "top 70%", // 要素が上部から70%の位置で発火
            end: "top 70%",
            onEnter: () => {
              // 要素内に入ったら、js-showクラスをつける
              item.classList.add("is-active");
              item.style.animationDelay = `${index * 0.1}s`; 
            },
          
          });
        
         });

         const slideShowImage2 = document.querySelectorAll('.p-instgram__item');

         slideShowImage2.forEach((item, index) => {
           ScrollTrigger.create({
             trigger: item,
             start: "top 100%", // 要素が上部から70%の位置で発火
            
             onEnter: () => {
               // 要素内に入ったら、js-showクラスをつける
               item.classList.add("is-active");
               item.style.animationDelay = `${index * 0.1}s`; 
             },
           
           });
         
          });

                  //キャッチコピーの出現アニメーション
document.addEventListener("DOMContentLoaded", () => {
  
  const mainImage = document.querySelector(".p-mv");
  const mainCatch = document.querySelector(".p-mv__container");
  const mainNavi = document.querySelector(".p-header");
  const mainBtn = document.querySelector(".c-mv__button-wrap");

  mainImage.classList.add('is-active');
 
  setTimeout(() => {
    mainCatch.classList.add('is-active');
  }, 500);
  setTimeout(() => {
    mainNavi.classList.add('is-active');
  }, 1000);
  setTimeout(() => {
    mainBtn.classList.add('is-active');
  }, 1500);
  
});

  // スクロールイベントを監視してTo Topボタンを制御
  window.addEventListener("scroll", function () {
    let toTopButton = document.querySelector(".p-header");
    // 現在のスクロール位置を取得
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // スクロール位置が一定値よりも大きい場合にTo Topボタンを表示、それ以外は非表示にする
    if (scrollPosition > 300) {
      toTopButton.classList.add("js-active");
    } else {
      toTopButton.classList.remove("js-active");
    }
  });
  
  

 //1文字ずつ表示
window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);
  const slideUpText = document.querySelectorAll('.animated__slideShow');
  new SplitType(slideUpText);
  slideUpText.forEach(item => {
    ScrollTrigger.create({
      trigger: item,
      start: "top 70%", // 要素が上部から70%の位置で発火
      onEnter: () => {
        const chars = item.querySelectorAll('.char');
        gsap.to(chars, {
          opacity: 1, //最終の状態
          stagger: 0.06, //次のアニメーションまでの時間
         
        });
      }
    });
  });
});

//1文字ずつ表示
window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);
  const slideUpText = document.querySelectorAll('.animated__slideUp');
  new SplitType(slideUpText);
  slideUpText.forEach(item => {
    ScrollTrigger.create({
      trigger: item,
      start: "top 70%", // 要素が上部から70%の位置で発火
      onEnter: () => {
        const chars = item.querySelectorAll('.char');
        gsap.to(chars, {
          y: 0,
          stagger: 0.06, //次のアニメーションまでの時間
          delay: 2, //遅延
        });
      }
    });
  });
});