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
        if(window.scrollY > 600){
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

    // ***************************** contact us form start *****************************

    var name_box = document.querySelector(".name_box");
    var name_error_display = document.querySelector(".name_error_display");
    var email_box = document.querySelector(".email_box");
    var email_error_display = document.querySelector(".email_error_display");
    var subject_box = document.querySelector(".subject_box");
    var subject_error_display = document.querySelector(".subject_error_display");
    var message_box = document.querySelector(".message_box");
    var message_error_display = document.querySelector(".message_error_display");
    var contactus_send_btn = document.querySelector(".contactus_section .send_btn");
    var submit_error_display = document.querySelector(".submit_error_display");

    var namePattern = /^[a-zA-Z]+$/;
    var emailPattern = /.+\@.+\..+/;
    var error = false;

    function check(e){
        var res = namePattern.test(e.value);
        var display = e.nextSibling.nextSibling;
        if(res == false){
            e.classList.add("error_box");
            var errMessage = "Numbers & Special Characters are invalid";
            display.innerHTML = errMessage;
            display.classList.add("display");
            error = true;
        }
        else if(res == true){
            e.classList.remove("error_box");
            display.classList.remove("display");
        }
    }

    contactus_send_btn.addEventListener('click', function(){
    error = false;
    if(name_box.value == ""){
        name_error_display.innerHTML = "Enter Your Name";
        name_error_display.classList.add("display");
        name_box.classList.add("error_box");
        error = true;
    }
    else{
        check(name_box);
    }
    
    if(email_box.value == "" || emailPattern.test(email_box.value) == false){
        email_error_display.innerHTML = "Enter Your Email";
        email_error_display.classList.add("display");
        email_box.classList.add("error_box");
        error = true;
    }
    else{
        email_error_display.classList.remove("display");
        email_box.classList.remove("error_box");
    }

    if(subject_box.value == ""){
        subject_error_display.innerHTML = "Please Enter Subject";
        subject_error_display.classList.add("display");
        subject_box.classList.add("error_box");
        error = true;
    }
    else{
        subject_error_display.classList.remove("display");
        subject_box.classList.remove("error_box");
    }

    if(message_box.value == ""){
        message_error_display.innerHTML = "Enter Your Message";
        message_error_display.classList.add("display");
        message_box.classList.add("error_box");
        error = true;
    }
    else{
        message_error_display.classList.remove("display");
        message_box.classList.remove("error_box");
    }

    if(error == false){
        submit_error_display.innerHTML = "Successfully Submited";
        submit_error_display.classList.add("display");
        submit_error_display.classList.add("success_box");
        name_box.value = "";
        email_box.value = "";
        subject_box.value = "";
        message_box.value = "";
    }
    else{
        submit_error_display.innerHTML = "";
        submit_error_display.classList.remove("success_box");
    }
    });

    // ***************************** contact us form end *****************************

    // *************************** footer contact us start ***************************

    var name_input = document.querySelector(".name_input");
    var name_error_box = document.querySelector(".name_error_box");
    var email_input = document.querySelector(".email_input");
    var email_error_box = document.querySelector(".email_error_box");
    var message_input = document.querySelector(".message_input");
    var message_error_box = document.querySelector(".message_error_box");
    var footer_contactus_send_btn = document.querySelector(".footer_contactus .send_btn");
    var submit_error_box = document.querySelector(".submit_error_box");

    var namePattern = /^[a-zA-Z]+$/;
    var emailPattern = /.+\@.+\..+/;
    var error = false;

    function check(e){
        var res = namePattern.test(e.value);
        var display = e.nextSibling.nextSibling;
        if(res == false){
            e.classList.add("error_box");
            var errMessage = "Numbers & Special Characters are invalid";
            display.innerHTML = errMessage;
            display.classList.add("display");
            error = true;
        }
        else if(res == true){
            e.classList.remove("error_box");
            display.classList.remove("display");
        }
    }

    footer_contactus_send_btn.addEventListener('click', function(){
        error = false;
        if(name_input.value == ""){
            name_error_box.innerHTML = "Enter Your Name";
            name_error_box.classList.add("display");
            name_input.classList.add("error_box");
            error = true;
        }
        else{
            check(name_input);
        }
        
        if(email_input.value == "" || emailPattern.test(email_input.value) == false){
            email_error_box.innerHTML = "Enter Your Email";
            email_error_box.classList.add("display");
            email_input.classList.add("error_box");
            error = true;
        }
        else{
            email_error_box.classList.remove("display");
            email_input.classList.remove("error_box");
        }

        // if(subject_box.value == ""){
        //     subject_error_display.innerHTML = "Please Enter Subject";
        //     subject_error_display.classList.add("display");
        //     subject_box.classList.add("error_box");
        //     error = true;
        // }
        // else{
        //     subject_error_display.classList.remove("display");
        //     subject_box.classList.remove("error_box");
        // }

        if(message_input.value == ""){
            message_error_box.innerHTML = "Enter Your Message";
            message_error_box.classList.add("display");
            message_input.classList.add("error_box");
            error = true;
        }
        else{
            message_error_box.classList.remove("display");
            message_input.classList.remove("error_box");
        }

        if(error == false){
            submit_error_box.innerHTML = "Successfully Submited";
            submit_error_box.classList.add("display");
            submit_error_box.classList.add("success_box");
            name_input.value = "";
            email_input.value = "";
            subject_box.value = "";
            message_input.value = "";
        }
        else{
            submit_error_box.innerHTML = "";
            submit_error_box.classList.remove("success_box");
        }
    });

    // ************************ footer contact us end ************************

}

// ============================================================================
// *********************** home/index page script start ***********************
// ============================================================================