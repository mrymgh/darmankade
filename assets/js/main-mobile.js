
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
    $(".modal").addClass("overflow-hidden");
  } else {
    $(".modal").removeClass("overflow-hidden");
  }
});

$(document).ready(function() {
  $(".menu-close, .menu-button").on("click", function(){
    $(".nav-menu").toggleClass("active");
  });
});


new Vue ({
  el: '#app1',
  data (){
    return{
      menus:[ 'جستجو پزشکان','بیمارستان ها' , 'داروها' , 'تست سلامت', 'گروه های خونی', 'مجله سلامت درمانکده'],
      lists : [
        {name:"عباس نبوی", job:"پزشک", city:"هفت تیر"},
        {name:"حسین عسگری", job:"پیراپزشک", city:"انقلاب - فلسطین"},
        {name:"علی عسگری", job:"پزشک", city:"انقلاب - فلسطین"},
        {name:"ممد عسگری", job:"دندان پزشک", city:"ری- تهرانپارس"},
        {name:"گیسو عسگری", job:"پیراپزشک", city:"جردن"},
        {name:"ژاله حسنی", job:"پیراپزشک", city:"افسریه"},
        {name:"نقی معمولی", job:"پیراپزشک", city:"افسریه"},
        {name:"تقی صفایی", job:"پیراپزشک", city:"افسریه"},
        {name:"اسم رنندم ", job:"پیراپزشک", city:"افسریه"},
        {name:"ژاله رندم", job:"پیراپزشک", city:"افسریه"},
        {name:"اسم عسگری", job:"پیراپزشک", city:"افسریه"},
        {name:"رندم اسم", job:"پیراپزشک", city:"افسریه"},
        {name:"ژاله عسگری", job:"پیراپزشک", city:"افسریه"}
      ],
    }
  },

})

jQuery('.panel-title .accordion-toggle').click(function() {
  jQuery(this).find('i').toggleClass('plus minus')
    .closest('.accordion-toggle').siblings('.accordion-toggle')
    .find('i').removeClass('minus').addClass('plus');
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
  rtl:true,
  loop:false,
  margin:20,
  height:'100%',
  nav:false,
  responsive:{
    0:{
      items:2
    },
    450:{
      items:3
    },
    500:{
      items:4
    },
    600:{
      items:4
    },
    1000:{
      items:6
    }
  }
})

function showDiv() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByClassName("searchFilter");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function showDiv1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput1");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown1");
  a = div.getElementsByClassName("searchFilter");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


