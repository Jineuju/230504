// gnb
$(document).ready(function () {
  $("#gnb").on("mouseenter", function () {
    $(".sub").stop().slideDown();
  });
  // 사이트맵이 나옴
  $("#gnb").on("mouseleave", function () {
    $(".sub").stop().slideUp();
  });
  // 내려간 사이트맵을 다시 올려줌
  $("#gnb>li").on("mouseenter", function () {
    $(this).children("a").addClass("on");
  });
  // 사이트맵 선택하면 그 선택한 메인메뉴가 마우스를 따라감
  $("#gnb>li").on("mouseleave", function () {
    $(this).children("a").removeClass("on");
  });
  // 마우스가 떠나면 선택이 해제되면서 하나씩만 선택됨
});

// tab
$(".tab>li").on("click", function () {
  $(".tab").find("li").removeClass("on");
  // 공지사항 버튼 색깔 바뀜
  $(".content").find("div").removeClass("on");
  // 갤러리를 누르면 사진이 나와야하니 공지사항 버튼 바뀌면서
  // 공지사항에 있던 컨텐츠 숨김
});
