

//showcase trailer video
 const trailer = document.querySelectorAll('.trailer-video');
 //showcase trailer video
 const showcase2img = document.querySelectorAll('.showcase2-img');
 const trailer2 = document.querySelectorAll('.showcase2-vid');
 //showcase trailer video
 for (let i = 0; i < trailer.length; i++) {
     trailer[i].addEventListener('mouseenter',
         function (e) {
             trailer[i].play()
         })
 }

 //showcase2 img&video
 for (let i=0;i<showcase2img.length;i++){
  showcase2img[i].addEventListener('mouseenter',function(e){
    showcase2img[i].classList.add('active');
    trailer2[i].play()
  })
  showcase2img[i].addEventListener('mouseout',function(e){
    showcase2img[i].classList.remove('active');
    trailer2[i].pause()
    trailer2[i].currentTime=0
  })
 }

 //navcolor change when scroll
 var myNav = document.getElementById('navbar-color');
 var cartcol = document.getElementById('cart');
 var x = document.getElementById('search');


 window.onscroll = function () {
     if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1) {
         myNav.classList.add("nav-colored");
         myNav.classList.remove("nav-transparent");
         cartcol.classList.add("cart-color");
         x.classList.add('search-input-color');
         x.style.color = "black";
     }
     else {
         myNav.classList.add("nav-transparent");
         myNav.classList.remove("nav-colored");
         cartcol.classList.remove("cart-color");
         x.classList.remove('search-input-color');
         x.style.color = "white";
     }
 };

 //search icon show
 const icon = document.querySelector('.fa-solid');
 const search = document.querySelector('.search');
 const searchbox = document.querySelector('.search-input');
 icon.onclick = function () {
     search.classList.toggle('active');
     searchbox.classList.toggle('active');
 };

 //showcase1 video hover
 
 var imgbox1 = document.getElementById("show1");
 var imgbox2 = document.getElementById("show2");
 var imgbox3 = document.getElementById("show3");
 var contentbox1 = document.getElementById("show-content1");
 var contentbox2 = document.getElementById("show-content2");
 var contentbox3 = document.getElementById("show-content3");



 imgbox1.onmouseover = function overfunction() {

     contentbox1.style.marginTop = "-400px";

 }
 imgbox1.onmouseout = function overfunction() {

     contentbox1.style.marginTop = "10px";

 }


 imgbox2.onmouseover = function overfunction() {

     contentbox2.style.marginTop = "-400px";

 }
 imgbox2.onmouseout = function overfunction() {

     contentbox2.style.marginTop = "10px";

 }

 imgbox3.onmouseover = function overfunction() {

     contentbox3.style.marginTop = "-400px";

 }
 imgbox3.onmouseout = function overfunction() {

     contentbox3.style.marginTop = "10px";

 }

