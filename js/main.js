$(function () {
  //상단메뉴 호버시 서브메뉴 보이게
  $(".main > li").hover(
    function () {
      $(this).find(".sub").stop().slideDown();
    },
    function () {
      $(this).find(".sub").stop().slideUp();
    }
  );

  //검색창 탭메뉴
  $(".tabmenu > li > a").click(function () {
    $(".tabmenu > li > a").removeClass();
    $(this).addClass("active");

    $(".tabmenu > li > div").hide();
    $(this).next("div").show();
  });

  //검색창 닫기
  $(".search_box .btn_close").click(function () {
    $(".search_box").hide();
  });
  //검색창 열기
  $(".btn_search").click(function () {
    $(".search_box").show();
  });
});
