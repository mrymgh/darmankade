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
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

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
  loop:true,
  margin:10,
  nav:false,
  responsive:{
    0:{
      items:2
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
})

