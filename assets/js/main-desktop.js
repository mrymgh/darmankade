

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
      menus:[ 'جستجو پزشکان','بیمارستان ها' , 'داروها' , 'تست سلامت', 'گروه های خونی']
    }
  }
});

new Vue ({
  el: '#first-section',
  data (){
    return{
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
// Vue.component('vue-feather', VueFeather);

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
