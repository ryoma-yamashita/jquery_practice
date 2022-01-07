// HTMLが読み込まれたら処理を行う
$("#q1").ready(function() {
  // CSSで文字色を変更
  $("#q1").css("color", "green");
});

// ボタンをクリックした際に処理を行う
$("#q2").on("click", function() {
  // CSSでbackground-colorを変更
  $("#q2").css("background-color", "pink");
});

$("#q3").on("click", function() {
  // ボタンクリック後フェードアウト
  $("#q3").fadeOut( 3000 );
});

$("#q4").on("click", function() {
  // ボタンクリック後ボタンサイズをcssの.largeを適用
  $("#q4").addClass("large");
});

$("#q5").on("click", function() {
  // ボタンクリック後DOMの挿入
  $("#q5").before("DOMの前").prepend("DOMの中の前").append("DOMの中の後").after("DOMの後");
});

$("#q6").on("click", function() {
  // ボタンクリック後2秒かけて100×100移動
  $("#q6")
  .animate({"marginTop": "100px", "marginLeft": "100px"}, 2000);
});

$("#q7").on("click", function() {
  // ボタンクリック後idのノードをコンソールに表示
  console.log(q7);
});

$("#q8").on({
  "mouseenter": function() {
    // マウスが重なったらcssの.largeを適用
    $("#q8").addClass("large");
  },
  "mouseleave": function() {
    // マウスが離れたらcssの.largewを削除
    $("#q8").removeClass("large");
  }
});

$("#q9 li").on("click", function() {
  // リストをクリックしたらアラートに配列の順番を表示
  alert($(this).index());
});

$("#q10 li").on("click", function() {
  // クリックしたらq10の配列の順番を取得しnに代入
  let n = $(this).index();
  // nを使ってq11の対応する順番のボタンにlarge-textを適用
  $("#q11 li").eq(n).addClass("large-text");
});