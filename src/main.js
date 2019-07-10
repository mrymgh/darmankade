import Vue from 'vue'
import App from './App.vue'
import VueFeather from 'vue-feather';

Vue.use(VueFeather);
// Or
Vue.component(VueFeather.name, VueFeather);
// Or
Vue.component('vue-feather', VueFeather);

new Vue({
  name:'app',
  render: h => h(App)
})

feather.replace()

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

// $('.collapse').on('shown.bs.collapse', function(){
//   $(this).parent().find(".feather-plus").removeClass("d-inline-block").addClass("d-none");
//   $(this).parent().find(".feather-minus").removeClass("d-none").addClass("d-inline-block");
// }).on('hidden.bs.collapse', function(){
//   $(this).parent().find(".feather-minus").removeClass("d-none").addClass("d-inline-block");
//   $(this).parent().find(".feather-plus").removeClass("d-inline-block").addClass("d-none");
// });



