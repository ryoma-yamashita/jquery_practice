// 「アカウント作成」ボタンを押した時に以下の処理を行う
$(".btn__submit").on("click", function() {
  console.log("名字");
  // 「名字」に入力された情報を取得しコンソールに表示
  console.log($("#family__name").val());
  console.log("名前");
  // 「名前」に入力された情報を取得しコンソールに表示
  console.log($("#given__name").val());
  console.log("生年月日");
  // それぞれ選択された内容を生年月日としてコンソールに表示
  console.log($(".year").val() + "年" + $(".month").val() + "月" + $(".day").val() + "日");
  console.log("性別");
  // チェックされた性別のvalue値をコンソールに表示
  console.log($('[ name="gender"]:checked').val());
  console.log("職業");
  // 選択された職業のvalue値をコンソールに表示
  console.log($('[name="work"]').val());
  console.log("アカウント名");
  // 「アカウント名」に入力された情報を取得しコンソールに表示
  console.log($("#account__name").val());
  console.log("メールアドレス");
  // 「メールアドレス」に入力された情報を取得しコンソールに表示
  console.log($("#email").val());
  console.log("パスワード");
  // 「パスワード」に入力された情報を取得しコンソールに表示
  console.log($("#password").val());
  console.log("確認用パスワード");
  // 「確認用パスワード」入力された情報を取得しコンソールに表示
  console.log($("#duplication__password").val());
  console.log("住所");
  // 「住所」に入力された情報を取得しコンソールに表示
  console.log($("#address").val());
  console.log("電話番号");
  // 「電話番号」に入力された情報を取得しコンソールに表示
  console.log($("#tel").val());
  console.log("購読情報");
  // それぞれ選択されたチェックボックスの内容を取得しコンソールに表示
  $('[name="subscription"]:checked').each(function() {
    console.log($(this).val());
  });
});