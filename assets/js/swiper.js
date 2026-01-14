
const recent_top = new Swiper('.recent-top__swiper', { //swiperの名前
    //切り替えのモーション
    speed: 1000, //表示切り替えのスピード
    effect: "slide", //切り替えのmotion (※1)
    allowTouchMove: true, // スワイプで表示の切り替えを有効に
  
    //最後→最初に戻るループ再生を有効に
    loop: true,
    //自動スライドについて
    autoplay: { 
      delay: 3000, //何秒ごとにスライドを動かすか
      stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
      disableOnInteraction: true, //ユーザーの操作時に止める
      reverseDirection: false, //自動再生を逆向きにする
    },
  
     //表示について
    centeredSlides: true, //中央寄せにする
    slidesPerView: "1",
    spaceBetween: 15,
  
    //ページネーション
    pagination: {
      el: ".swiper-pagination", //paginationのclass
      clickable: true, //クリックでの切り替えを有効に
      type: "bullets" //paginationのタイプ (※2)
    },
    //ナビゲーション
    navigation: {
      prevEl: ".recent-top__swiper-button-prev", //戻るボタンのclass
      nextEl: ".recent-top__swiper-button-next" //進むボタンのclass
    },
    //スクロールバー
    scrollbar: { //スクロールバーを表示したいとき
      el: ".swiper-scrollbar", //スクロールバーのclass
      hide: true, //操作時のときのみ表示
      draggable: true //スクロールバーを直接表示できるようにする
    },
  
   
    breakpoints: { 
      768: {
        slidesPerView: 2.6,
        spaceBetween: 30,
      },
     
    }
  });
  
  /* =================================================== 
  ※1 effectについて
  slide：左から次のスライドが流れてくる
  fade：次のスライドがふわっと表示
  ■ fadeの場合は下記を記述
    fadeEffect: {
      crossFade: true
    },
  cube：スライドが立方体になり、3D回転を繰り返す
  coverflow：写真やアルバムジャケットをめくるようなアニメーション
  flip：平面が回転するようなアニメーション
  cards：カードを順番にみていくようなアニメーション
  creative：カスタマイズしたアニメーションを使うときに使用します
  
  =======================================================
  ※2 paginationのタイプ
  bullets：スライド枚数と同じ数のドットが表示
  fraction：分数で表示（例：1 / 3）
  progressbar：スライドの進捗に応じてプログレスバーが伸びる
  custom：自由にカスタマイズ
  
  =====================================================*/
  
  const recent_bottom = new Swiper('.recent-bottom__swiper', { //swiperの名前
    //切り替えのモーション
    speed: 1000, //表示切り替えのスピード
    effect: "slide", //切り替えのmotion (※1)
    allowTouchMove: true, // スワイプで表示の切り替えを有効に
  
    //最後→最初に戻るループ再生を有効に
    loop: true,
    //自動スライドについて
    autoplay: { 
      delay: 3000, //何秒ごとにスライドを動かすか
      stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
      disableOnInteraction: true, //ユーザーの操作時に止める
      reverseDirection: false, //自動再生を逆向きにする
    },
  
     //表示について
    centeredSlides: false, //中央寄せにする
    slidesPerView: "1.5",
    spaceBetween: 12,
  
    //ページネーション
    pagination: {
      el: ".swiper-pagination", //paginationのclass
      clickable: true, //クリックでの切り替えを有効に
      type: "bullets" //paginationのタイプ (※2)
    },
    //ナビゲーション
    navigation: {
      prevEl: ".recent-bottom__swiper-button-prev", //戻るボタンのclass
      nextEl: ".recent-bottom__swiper-button-next" //進むボタンのclass
    },
    //スクロールバー
    scrollbar: { //スクロールバーを表示したいとき
      el: ".swiper-scrollbar", //スクロールバーのclass
      hide: true, //操作時のときのみ表示
      draggable: true //スクロールバーを直接表示できるようにする
    },
  
    //ブレイクポイントによって変える
    breakpoints: { 
      768: {
     
        slidesPerView: 2.6,
        spaceBetween: 32,
      },
    
    }
  });
  
  /* =================================================== 
  ※1 effectについて
  slide：左から次のスライドが流れてくる
  fade：次のスライドがふわっと表示
  ■ fadeの場合は下記を記述
    fadeEffect: {
      crossFade: true
    },
  cube：スライドが立方体になり、3D回転を繰り返す
  coverflow：写真やアルバムジャケットをめくるようなアニメーション
  flip：平面が回転するようなアニメーション
  cards：カードを順番にみていくようなアニメーション
  creative：カスタマイズしたアニメーションを使うときに使用します
  
  =======================================================
  ※2 paginationのタイプ
  bullets：スライド枚数と同じ数のドットが表示
  fraction：分数で表示（例：1 / 3）
  progressbar：スライドの進捗に応じてプログレスバーが伸びる
  custom：自由にカスタマイズ
  
  =====================================================*/
  
  const best_planner = new Swiper('.best-planner__swiper', { //swiperの名前
    //切り替えのモーション
    speed: 2000, //表示切り替えのスピード
    effect: "slide", //切り替えのmotion (※1)
    allowTouchMove: true, // スワイプで表示の切り替えを有効に
  
    //最後→最初に戻るループ再生を有効に
    loop: true,
    //自動スライドについて
    autoplay: { 
      delay: 0, //何秒ごとにスライドを動かすか
      stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
      disableOnInteraction: true, //ユーザーの操作時に止める
      reverseDirection: false, //自動再生を逆向きにする
    },
  
     //表示について
   
    slidesPerView: "auto",
    spaceBetween: 10,
  
    //ページネーション
    pagination: {
      el: ".swiper-pagination", //paginationのclass
      clickable: true, //クリックでの切り替えを有効に
      type: "bullets" //paginationのタイプ (※2)
    },
    //ナビゲーション
    navigation: {
      prevEl: ".swiper-button-prev", //戻るボタンのclass
      nextEl: ".swiper-button-next" //進むボタンのclass
    },
    //スクロールバー
    scrollbar: { //スクロールバーを表示したいとき
      el: ".swiper-scrollbar", //スクロールバーのclass
      hide: true, //操作時のときのみ表示
      draggable: true //スクロールバーを直接表示できるようにする
    },
  
    //ブレイクポイントによって変える
    // breakpoints: { 
    //   768: {
    //     slidesPerView: 1.2,
    //     spaceBetween: 15,
    //   },
    //   1500: {
    //     slidesPerView: 3,
    //     spaceBetween: 40,
    //   },
    // }
  });
  
  /* =================================================== 
  ※1 effectについて
  slide：左から次のスライドが流れてくる
  fade：次のスライドがふわっと表示
  ■ fadeの場合は下記を記述
    fadeEffect: {
      crossFade: true
    },
  cube：スライドが立方体になり、3D回転を繰り返す
  coverflow：写真やアルバムジャケットをめくるようなアニメーション
  flip：平面が回転するようなアニメーション
  cards：カードを順番にみていくようなアニメーション
  creative：カスタマイズしたアニメーションを使うときに使用します
  
  =======================================================
  ※2 paginationのタイプ
  bullets：スライド枚数と同じ数のドットが表示
  fraction：分数で表示（例：1 / 3）
  progressbar：スライドの進捗に応じてプログレスバーが伸びる
  custom：自由にカスタマイズ
  
  =====================================================*/
  
  const plan__swipe = new Swiper('.plan__swipe__swiper', { //swiperの名前
    //切り替えのモーション
    speed: 1000, //表示切り替えのスピード
    effect: "slide", //切り替えのmotion (※1)
    allowTouchMove: true, // スワイプで表示の切り替えを有効に
  
    //最後→最初に戻るループ再生を有効に
    loop: true,
    //自動スライドについて
    // autoplay: { 
    //   delay: 3000, //何秒ごとにスライドを動かすか
    //   stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
    //   disableOnInteraction: true, //ユーザーの操作時に止める
    //   reverseDirection: false, //自動再生を逆向きにする
    // },
  
     //表示について
    centeredSlides: false, //中央寄せにする
    slidesPerView: "1.3",
    spaceBetween: 16,
  
   
    //ナビゲーション
    navigation: {
      prevEl: ".plan__swiper-button-prev", //戻るボタンのclass
      nextEl: ".plan__swiper-button-next" //進むボタンのclass
    },
  
  
    //ブレイクポイントによって変える
    breakpoints: { 
      768: {
       
        slidesPerView: 2.6,
        spaceBetween: 32,
      },
     
    }
  });
  
  /* =================================================== 
  ※1 effectについて
  slide：左から次のスライドが流れてくる
  fade：次のスライドがふわっと表示
  ■ fadeの場合は下記を記述
    fadeEffect: {
      crossFade: true
    },
  cube：スライドが立方体になり、3D回転を繰り返す
  coverflow：写真やアルバムジャケットをめくるようなアニメーション
  flip：平面が回転するようなアニメーション
  cards：カードを順番にみていくようなアニメーション
  creative：カスタマイズしたアニメーションを使うときに使用します
  
  =======================================================
  ※2 paginationのタイプ
  bullets：スライド枚数と同じ数のドットが表示
  fraction：分数で表示（例：1 / 3）
  progressbar：スライドの進捗に応じてプログレスバーが伸びる
  custom：自由にカスタマイズ
  
  =====================================================*/
  
  const reccomendation_swiper = new Swiper('.reccomendation__swiper', { //swiperの名前
    //切り替えのモーション
    speed: 1000, //表示切り替えのスピード
    effect: "slide", //切り替えのmotion (※1)
    allowTouchMove: true, // スワイプで表示の切り替えを有効に
  
    //最後→最初に戻るループ再生を有効に
    loop: true,
    //自動スライドについて
    // autoplay: { 
    //   delay: 3000, //何秒ごとにスライドを動かすか
    //   stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
    //   disableOnInteraction: true, //ユーザーの操作時に止める
    //   reverseDirection: false, //自動再生を逆向きにする
    // },
  
     //表示について
    centeredSlides: false, //中央寄せにする
    slidesPerView: "1.3",
    spaceBetween: 18,
  
    
    //ナビゲーション
    navigation: {
      prevEl: ".reccomendation__swiper-button-prev", //戻るボタンのclass
      nextEl: ".reccomendation__swiper-button-next" //進むボタンのclass
    },
   
  
    //ブレイクポイントによって変える
    breakpoints: { 
      768: {
       
        slidesPerView: 2.8,
        spaceBetween: 32,
      },
     
    }
  });
  
  /* =================================================== 
  ※1 effectについて
  slide：左から次のスライドが流れてくる
  fade：次のスライドがふわっと表示
  ■ fadeの場合は下記を記述
    fadeEffect: {
      crossFade: true
    },
  cube：スライドが立方体になり、3D回転を繰り返す
  coverflow：写真やアルバムジャケットをめくるようなアニメーション
  flip：平面が回転するようなアニメーション
  cards：カードを順番にみていくようなアニメーション
  creative：カスタマイズしたアニメーションを使うときに使用します
  
  =======================================================
  ※2 paginationのタイプ
  bullets：スライド枚数と同じ数のドットが表示
  fraction：分数で表示（例：1 / 3）
  progressbar：スライドの進捗に応じてプログレスバーが伸びる
  custom：自由にカスタマイズ
  
  =====================================================*/
  
  const voice_swipe = new Swiper('.voice__swiper', { //swiperの名前
    //切り替えのモーション
    speed: 1000, //表示切り替えのスピード
    effect: "slide", //切り替えのmotion (※1)
    allowTouchMove: true, // スワイプで表示の切り替えを有効に
  
    //最後→最初に戻るループ再生を有効に
    loop: true,
    //自動スライドについて
    autoplay: { 
      delay: 3000, //何秒ごとにスライドを動かすか
      stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
      disableOnInteraction: true, //ユーザーの操作時に止める
      reverseDirection: false, //自動再生を逆向きにする
    },
  
     //表示について
    centeredSlides: true, //中央寄せにする
    slidesPerView: "1.2",
    spaceBetween: 14,
  
    //ページネーション
    pagination: {
      el: ".swiper-pagination", //paginationのclass
      clickable: true, //クリックでの切り替えを有効に
      type: "bullets" //paginationのタイプ (※2)
    },
    //ナビゲーション
    navigation: {
      prevEl: ".voice__swiper-button-prev", //戻るボタンのclass
      nextEl: ".voice__swiper-button-next" //進むボタンのclass
    },
    //スクロールバー
    scrollbar: { //スクロールバーを表示したいとき
      el: ".swiper-scrollbar", //スクロールバーのclass
      hide: true, //操作時のときのみ表示
      draggable: true //スクロールバーを直接表示できるようにする
    },
  
    //ブレイクポイントによって変える
    breakpoints: { 
      768: {
        slidesPerView: 1,
        spaceBetween: 32,
      },
     
    }
  });
  
  /* =================================================== 
  ※1 effectについて
  slide：左から次のスライドが流れてくる
  fade：次のスライドがふわっと表示
  ■ fadeの場合は下記を記述
    fadeEffect: {
      crossFade: true
    },
  cube：スライドが立方体になり、3D回転を繰り返す
  coverflow：写真やアルバムジャケットをめくるようなアニメーション
  flip：平面が回転するようなアニメーション
  cards：カードを順番にみていくようなアニメーション
  creative：カスタマイズしたアニメーションを使うときに使用します
  
  =======================================================
  ※2 paginationのタイプ
  bullets：スライド枚数と同じ数のドットが表示
  fraction：分数で表示（例：1 / 3）
  progressbar：スライドの進捗に応じてプログレスバーが伸びる
  custom：自由にカスタマイズ
  
  =====================================================*/
  

  let recomeSwiper = null;
let popularSwiper = null;
let bl_voiceSwiper = null;
const breakpoint = window.matchMedia("(max-width: 768px)");

function checkRecomeSwiper(e) {
  if (e.matches) {
    // ===== 560px以上 → Swiper ON =====
    if (!recomeSwiper) {
      recomeSwiper = new Swiper(".recome__swiper", {
        loop: true,
        centeredSlides: false, //中央寄せにする
         slidesPerView: "1.2",
         spaceBetween: 14,
         effect: "slide", //切り替えのmotion (※1)
         allowTouchMove: true, // スワイプで表示の切り替えを有効に
        speed: 800,
        autoplay: { 
          delay: 3000, //何秒ごとにスライドを動かすか
          stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
          disableOnInteraction: true, //ユーザーの操作時に止める
          reverseDirection: false, //自動再生を逆向きにする
        },
        //ナビゲーション
    navigation: {
      prevEl: ".recome-swiper-button-prev", //戻るボタンのclass
      nextEl: ".recome-swiper-button-next" //進むボタンのclass
    },
      });
    }
  } else {
    // ===== 560px未満 → Swiper OFF =====
    if (recomeSwiper) {
      recomeSwiper.destroy(true, true);
      recomeSwiper = null;
    }
  }
};

function checkPopularSwiper(e) {
  if (e.matches) {
    // ===== 560px以上 → Swiper ON =====
    if (!popularSwiper) {
      popularSwiper = new Swiper(".popular__swiper", {
        loop: true,
        centeredSlides: false, //中央寄せにする
         slidesPerView: "0.7",
         spaceBetween: 14,
         effect: "slide", //切り替えのmotion (※1)
         allowTouchMove: true, // スワイプで表示の切り替えを有効に
        speed: 800,
        autoplay: { 
          delay: 3000, //何秒ごとにスライドを動かすか
          stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
          disableOnInteraction: true, //ユーザーの操作時に止める
          reverseDirection: false, //自動再生を逆向きにする
        },
        //ナビゲーション
    navigation: {
      prevEl: ".popular-button-prev", //戻るボタンのclass
      nextEl: ".popular-button-next" //進むボタンのclass
    },
      });
    }
  } else {
    // ===== 560px未満 → Swiper OFF =====
    if (popularSwiper) {
      popularSwiper.destroy(true, true);
      popularSwiper = null;
    }
  }
};

function checkVoiceSwiper(e) {
  if (e.matches) {
    // ===== 560px以上 → Swiper ON =====
    if (!bl_voiceSwiper) {
      bl_voiceSwiper = new Swiper(".bl-voice__swiper", {
        loop: true,
        centeredSlides: false, //中央寄せにする
         slidesPerView: "1.2",
         spaceBetween: 14,
         effect: "slide", //切り替えのmotion (※1)
         allowTouchMove: true, // スワイプで表示の切り替えを有効に
        speed: 800,
        autoplay: { 
          delay: 3000, //何秒ごとにスライドを動かすか
          stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
          disableOnInteraction: true, //ユーザーの操作時に止める
          reverseDirection: false, //自動再生を逆向きにする
        },
        //ナビゲーション
    navigation: {
      prevEl: ".bl-voice-button-prev", //戻るボタンのclass
      nextEl: ".bl-voice-button-next" //進むボタンのclass
    },
      });
    }
  } else {
    // ===== 560px未満 → Swiper OFF =====
    if (bl_voiceSwiper) {
      bl_voiceSwiper.destroy(true, true);
      bl_voiceSwiper = null;
    }
  }
};



// 初回実行
checkRecomeSwiper(breakpoint);
checkPopularSwiper(breakpoint);
checkVoiceSwiper(breakpoint);


// 画面幅が変わった時

breakpoint.addEventListener("change", (e) => {
  checkRecomeSwiper(e);
  checkPopularSwiper(e);
  checkVoiceSwiper(e);
});

