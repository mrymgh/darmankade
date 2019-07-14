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


function openNav() {
  document.getElementById("myNav").style.width = "75%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function() {
  $(".menu-close, .menu-button").on("click", function(){
    $(".menu").toggleClass("active");
  });
});

new Vue ({
  el: '#app1',
  data:{
    menus:[ 'جستجو پزشکان','بیمارستان ها' , 'داروها' , 'تست سلامت', 'گروه های خونی', 'مجله سلامت درمانکده']
  },
  methods: {

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

