// ============================================================================
// *********************** home/index page script start ***********************
// ============================================================================

// ************************ header start ************************
// ------------ fixed menu onscroll start ------------ 
var primary_menu = document.querySelector(".primary_menu");

window.addEventListener('scroll', function(){
    if(window.scrollY > 80){
        primary_menu.classList.add("fixed_menu");
    }
    else{
        primary_menu.classList.remove("fixed_menu");
    }
});
// ------------ fixed menu onscroll end ------------ 
// ************************ header end ************************

// ************************ main section start ************************
// ------------ main slider end ------------ 
$('.main_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
});
// ------------ main slider end ------------ 
// ************************* main section end *************************

// ============================================================================
// *********************** home/index page script start ***********************
// ============================================================================