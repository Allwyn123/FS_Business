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

    // ------------ goto top start ------------ 
    var goto_top = document.querySelector(".goto_top");

    window.addEventListener('scroll', function(){
        // console.log(window.scrollY);
        if(window.scrollY > 600){
            // console.log("hi");
            goto_top.classList.add("display");
        }
        else{
            goto_top.classList.remove("display");
        }
    });
    // ------------ goto top end ------------ 
    // ********************** financial service section end **********************

    // **************** our solution section counting event start ****************
    var hour_count = document.querySelector(".hour_count");
    var review_count = document.querySelector(".review_count");
    var project_count = document.querySelector(".project_count");
    var award_count = document.querySelector(".award_count");

    // counting no. event load only one time, when scroll reach the our solution section in index.html.
    var executed = false;
    window.onscroll = function(){
        if(window.scrollY > 1700){
            if(!executed){
                countFunc(hour_count, 945, 1);
                countFunc(review_count, 1280, 1);
                countFunc(project_count, 578, 5);
                countFunc(award_count, 26, 100);
                executed = true;
            }
        }
    }

    function countFunc(count_name, count_no, interval){
        var num = 0;
        var inter = setInterval(count, interval);
        function count(){
            count_name.innerHTML = ++num;
            if(num == count_no){
                clearInterval(inter);
            }
        }
    }
    // ***************** our solution section counting event end *****************
}

// ============================================================================
// *********************** home/index page script start ***********************
// ============================================================================