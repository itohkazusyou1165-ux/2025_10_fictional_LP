//swiper導入部分

// HTMLのbodyの閉じタグ手前などに記述します
const swiper = new Swiper(".assessment-swiper", {
  // オプション
  loop: true, // ループ設定
  slidesPerView: "auto", // スライドの枚数を自動調整（CSSの幅に従う）
  speed: 2000, //一回あたりの動くスピード
  centeredSlides: true, // スライドを中央に配置
  spaceBetween: 30, // カードのスペース（
  initialSlide: 1,

  autoplay: {
    delay: 1000, //1000ms経過で動かす
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // レスポンシブ設定
  breakpoints: {
    // 768px以上
    768: {
      spaceBetween: 50,
    },
  },
});

//ハンバーガーメニュー

const ham = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-nav");

ham.addEventListener("click", function () {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
});
