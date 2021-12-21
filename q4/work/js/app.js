// タブボタンをクリックしたら処理の実行
$(".nav li").on("click", function() {
  // クリックのタブの順番を変数へ代入
  let n = $(this).index();
  // descriptionのliクラスの全てにis-hiddenクラスを付与し非表示に
  $(".description li").addClass("is-hidden");
  // 同時にタブの順番に対応したdescriptionのliクラスのみにis-hiddenを削除し表示へ
  $(".description li").eq(n).removeClass("is-hidden")
})