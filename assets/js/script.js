// ============================================================================
// *********************** home/index page script start ***********************
// ============================================================================

page_check = document.querySelector("body > div");

if(page_check.className == "container home_page"){
    // ************************ header fixed menu onscroll start ************************
    var primary_menu = document.querySelector(".primary_menu");

    window.addEventListener('scroll', function(){
        if(window.scrollY > 80){
            primary_menu.classList.add("fixed_menu");
        }
        else{
            primary_menu.classList.remove("fixed_menu");
        }
    });
    // ************************ header fixed menu onscroll end ************************

    // ************************ main section slider start ************************
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
    // ************************* main section slider end *************************
    
    // ********************* financial service section start *********************
    // ------------ modal start ------------ 
    var modal = document.querySelectorAll(".modal");
    var overlay = document.querySelectorAll(".overlay");
    var read_more_btn = document.querySelectorAll(".read_more_btn");
    var service_content_box = document.querySelector("body");
    
    read_more_btn.forEach(function(e){
        var index = Array.prototype.indexOf.call(read_more_btn, e);
        e.addEventListener("click", function(){
            window.scrollY = 1040;
            modal[index].classList.remove("hide");
    
            var x=window.scrollX;
            var y=window.scrollY;
            window.onscroll = function(){ window.scrollTo(x, y); };
        });
        
        overlay[index].addEventListener("click", function(){
            modal[index].classList.add("hide");
            window.onscroll = function(){};
        });
    });

    // ------------ modal end ------------ 
    // ********************** financial service section end **********************

}

// ============================================================================
// *********************** home/index page script start ***********************
// ============================================================================