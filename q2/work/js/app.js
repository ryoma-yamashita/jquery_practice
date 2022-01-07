$(function() {
  // ボタンをクリックした時にモーダル画面をフェードイン
  $(".modal_open_button").on("click", function() {
    $(".modal_win").fadeIn();
    return false;
  });
  // クローズボタンをクリックしたらモーダル画面をフェードアウト
  $(".c-modal_close").on("click", function() {
    $(".modal_win").fadeOut();
    return false;
  });
});