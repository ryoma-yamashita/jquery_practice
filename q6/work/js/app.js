// セレクトボックスの内容が変更されると処理を行う
$(".select-box").on("change", function() {
  // セレクトボックスの内容のvalue値を取得しselectValへ代入
  let selectVal = $(this).val();
  // food-listのliを取得しxへ代入
  let x = $(".food-list li");
  // food-listのliに対しての繰り返し処理
  $.each($(".food-list li"), function(index, x) {
    // 「全て」が選択された場合はliの全てを表示
    if (selectVal === "all") {
      $(this).show();
      return true;
    }
    // food-listのliのdata値を取得しcategoryValへ代入
    let categoryVal = $(x).data("category-type");
    // セレクトボックスのvalue値と food-listのliのdata値を比較
    if (categoryVal === selectVal) {
      // 同じ値であれば表示
      $(x).show();
    } else {
      // 違う値は非表示
      $(x).hide();
    }
  });
});
