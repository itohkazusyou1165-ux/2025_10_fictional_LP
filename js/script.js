//swiper導入部分

// HTMLのbodyの閉じタグ手前などに記述します
const swiper = new Swiper(".assessment-swiper", {
  // オプション
  loop: true, // ループを有効にする

  // カードの幅に合わせた設定
  slidesPerView: "auto", // スライドの枚数を自動調整（CSSの幅に従う）
  centeredSlides: true, // アクティブなスライドを中央に配置
  spaceBetween: 30, // スライド間のスペース（px）

  // 必要に応じてページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // 必要に応じてナビボタン
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // レスポンシブ設定（任意）
  breakpoints: {
    // 768px以上
    768: {
      spaceBetween: 50,
    },
  },
});
