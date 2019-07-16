new Vue ({
  el: '#app1',
  data (){
    return{
      menus:[ 'جستجو پزشکان','بیمارستان ها' , 'داروها' , 'تست سلامت', 'گروه های خونی', 'مجله سلامت درمانکده'],
      lists : [
        {name:"عباس نبوی", job:"پزشک", city:"اقدسیه"},
        {name:"حسین عسگری", job:"پیراپزشک", city:"انقلاب - فلسطین"},
        {name:"علی عسگری", job:"پزشک", city:"انقلاب - فلسطین"},
        {name:"ممد عسگری", job:"دندان پزشک", city:"ری- تهرانپارس"},
        {name:"گیسو عسگری", job:"پیراپزشک", city:"جردن"},
        {name:"ژاله عسگری", job:"پیراپزشک", city:"افسریه"}
      ]
    }
  }
})

$(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var file = '../fixed-sections/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
});

function moveScroller() {
  var $anchor = $("#first-section");
  var $scroller = $('.modal');

  var move = function() {
    var st = $(window).scrollTop();
    var ot = $anchor.offset().top;
    if(st > ot) {
      $scroller.css({
        position: "fixed",
        top: "0px"
      });
    } else {
      $scroller.css({
        position: "relative",
        top: ""
      });
    }
  };
  $(window).scroll(move);
  move();
}

$(function() {
  moveScroller();
});
