// import Vue from 'vue'
// import App from './App.vue'
// import VueFeather from 'vue-feather';
//
// Vue.use(VueFeather);
// // Or
// Vue.component(VueFeather.name, VueFeather);
// // Or
// Vue.component('vue-feather', VueFeather);
//
// new Vue({
//   name:'app',
//   render: h => h(App)
// })
//
// feather.replace()
// let mobileMenu = document.getElementById('mobile-menu')


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
