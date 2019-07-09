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

new Vue ({
  el: '#cities-list',
  data: function () {
    return {
      cities : ['تهران','مشهد','قم','اراک','اصفهان','تبریز']
    }
  }
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});





