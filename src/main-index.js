import Vue from 'vue'
import App from './App.vue'
import VueFeather from 'vue-feather';

Vue.use(VueFeather);
// Or
Vue.component(VueFeather.name, VueFeather);
// Or
Vue.component('vue-feather', VueFeather);

feather.replace()
// new Vue({
//   el: '#navbarNav',
//   render: h=> h(App)
// })

// $(function(){
//   $("#includedContent").load("views/fixed-sections/menu.html");
//   $("#copy-right").load("views/fixed-sections/copy-write.html");
// });

// $(window).scroll(function() {
//   if ($(this).scrollTop() > 0) {
//     $('.popular-search').fadeOut();
//   } else {
//     $('.popular-search').fadeIn();
//   }
// });

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

$('.best-service').hover(function ()
{
  $('.description', this).show();

}, function ()
{
  $('.description', this).hide().addClass('show-animate');
});

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
let footer = document.getElementById('first-section');
let windowHeight = window.innerHeight + 'px !important';
footer.style.height = windowHeight;
