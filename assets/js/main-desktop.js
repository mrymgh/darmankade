

// $('.collapse').on('shown.bs.collapse', function(){
//   $(this).parent().find(".feather-plus").removeClass("d-inline-block").addClass("d-none");
//   $(this).parent().find(".feather-minus").removeClass("d-none").addClass("d-inline-block");
// }).on('hidden.bs.collapse', function(){
//   $(this).parent().find(".feather-minus").removeClass("d-none").addClass("d-inline-block");
//   $(this).parent().find(".feather-plus").removeClass("d-inline-block").addClass("d-none");
// });


// $(function(){
//   $("#includedContent").load("views/fixed-sections/menu.html");
//   $("#copy-right").load("views/fixed-sections/copy-write.html");
// });

$(window).scroll(function() {
  if ($(this).scrollTop() > 380) {
    $('.popular-search').removeClass("d-flex").addClass('d-none')
  } else {
    $('.popular-search').removeClass("d-none").addClass('d-flex')
  }
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

new Vue ({
  el: '#header-menu',
  data:function () {
    return {
      menus:[ 'جستجو پزشکان','بیمارستان ها' , 'داروها' , 'تست سلامت', 'گروه های خونی', 'مجله سلامت درمانکده']
    }
  }
});

new Vue ({
  el: '#cities-list',
  data: function () {
    return {
      cities : ['تهران','مشهد','قم','اراک','اصفهان','تبریز']
    }
  }
})
// Vue.component('vue-feather', VueFeather);

