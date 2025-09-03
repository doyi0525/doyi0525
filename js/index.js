$(document).ready(function(){

    $(".header_menu_box1").hide();
    $(".header_btn").click(function(){
        $(".header_menu_box1").slideToggle();
        

    });
       $(".depth2_box1>ul").hide();
    $(".depth_flex1").click(function(){ 
         
        $(this).next().children("ul").slideToggle();
    })
  
  



    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });




      $(".flex_box2").mmouseenter().addClass("flex_box22")


     }) //end

     