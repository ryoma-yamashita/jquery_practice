// drawer_buttonをクリックしたら
$(".drawer_button").on("click", function() {
  // drawer_buttonのクラスにactiveを付与、削除、適用cssが変更
  $(this).toggleClass("active");
  // drawer_nav_wrapperのクラスにopenを付与、削除、適用cssが変更
  $(".drawer_nav_wrapper").toggleClass("open");
  // drawer_bgのcssをfadeIn、fadeOutで変更
  $(".drawer_bg").fadeToggle();
});