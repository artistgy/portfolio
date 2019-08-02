$("document").ready(function () {

    var a = 0,
        interval2 = setInterval(timer2, 4000),
        $slide = $(".main-slide .main-s .main-s-item"),
        length = $slide.length - 1;

    function timer2() {
        a++;
        if (a > length) a = 0;
        console.log(a)
        $slide.hide().eq(i).fadeIn(1000);
    }

    var count = 1,
        $animate_bar = $(".main-slide .animate-bar"),
        $main = $(".main-slide .main-s .main-s-tiem"),
        $main_length = $main.length;

    $animate_bar.addClass("active");

    setInterval(function () {
        $animate_bar.removeClass("active");
    }, 4000)

    setInterval(function () {
        count++;

        if (count > $main_length) {
            count = 1;
        }
        $animate_bar.addClass("active");
    }, 4050)

    setInterval(function () {
        if (count == $main_length) {
            $main.eq(0).show().css("left", "100%").stop().animate({
                left: "0%"
            }, 1000, "linear").css("z-index", "2")
        } else {
            $main.eq(count).show().css("left", "100%").stop().animate({
                left: "0%"
            }, 1000, "linear").css("z-index", "2")
        }

        $main.eq(count - 1).css("z-index", "1").fadeOut(3000)
    }, 3800)

    var i = 0,
        d = 0,
        time = false,
        $indicator = $(".second-slide .scroll-wrap .circle span"),
        indi_leng = $indicator.length - 1,
        $second_a = $(".second-slide .second-s #left-btn"),
        $second_slide = $(".second-slide"),
        $banner_item = $(".second-slide .second-s .second-s-left .s-left-img .mobile-img ul li img"),
        interval = setInterval(timer, 3000);

    $indicator.eq(0).addClass("active")

    function move_left_prev(i) {
        $banner_item.eq(i).stop().animate({
            left: "100%"
        }, 1000)
    }
    function move_left_next(i) {
        $banner_item.eq(i).stop().css("left", "-100%").animate({
            left: "0"
        }, 1000)
    }
    function move_right_prev(i) {
        $banner_item.eq(i).stop().animate({
            left: "-100%"
        }, 1000)
    }
    function move_right_next(i) {
        $banner_item.eq(i).stop().css("left", "100%").animate({
            left: "0"
        }, 1000)
    }
    function select(i) {
        $indicator.not(this).removeClass("active").eq(i).addClass("active");
    }
    function timer() {
        move_right_prev(i);
        i++;
        if (i > indi_leng) {
            i = 0;
        }
        move_right_next(i);
        d = i;
        select(i)
    }
    $second_a.click(function (e) {
        var s = $second_a.index(this);
        e.preventDefault();
        if (time == true) {
            return;
        }
        setTimeout(function () {
            time = false;
        }, 1000)
        time = true;

        if (s == 0) {
            move_left_prev(i);
            i--;
            if (i < 0) {
                i = indi_leng;
            }
            move_left_next(i)

        } else {
            move_right_prev(i);
            i++;
            if (i > indi_leng) {
                i = 0;
            }
            move_right_next(i);
        }
        d = i;
        select(i);
    })

    $indicator.click(function () {
        if (time == true) {
            return;
        }
        setTimeout(function () {
            time = false;
        }, 1000)
        time = true;
        if (i < $(this).index()) {
            move_right_prev(i)
        } else if (i == $(this).index()) {
            return;
        } else {
            move_left_prev(i)
        }
        i = $(this).index();
        if (i < d) {
            move_left_next(i)
        } else {
            move_right_next(i)
        }
        d = i;
        select(i)
    })
    
    var $review_content = $(".review .review-wrap .review-content"),
        r = 0,
        $review_item_leng = $(".review-wrap .review-content .review-box").length,
        reviewSlide = setInterval(moveSlide, 4000),
        $slideHandler = $(".review .review-wrap .btn-wrap span"),
        time = false;

    function moveSlide() {
        $review_content.stop().animate({
            left: -398 * (r) + "px"
        }, 1000)
    }

    $slideHandler.hover(function () {
        clearInterval(reviewSlide);
    }, function () {
        clearInterval(reviewSlide);
        reviewSlide = setInterval(moveSlide, 4000);
    })
    $slideHandler.click(function () {
        var i = $slideHandler.index(this);
        if (time == true) {
            return;
        }
        setTimeout(function () {
            time = false;
        }, 1000)
        time = true;
        if (i == 0) {
            r--;
            if (r < 0) {
                r = $review_item_leng - 3;
            }
            moveSlide()
        } else if (i == 1) {
            r++;
            if (r > $review_item_leng - 3) {
                r = 0;
            }
            moveSlide()
        }
    });

    $review_content.hover(function () {
        clearInterval(reviewSlide);
    }, function () {
        clearInterval(reviewSlide);
        reviewSlide = setInterval(moveSlide, 4000);
    });

$("document").ready(function () {

        var countDownDate = new Date("December 31, 2019 12:00").getTime();
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var d = Math.floor(distance / (1000 * 60 * 60 * 24));
            var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById("d-day").innerHTML = "My Wedding Days까지 - " + d + "일 " + h + "시간 " + m + " 분 남았습니다♥";
        });

    var a = 0,
        interval2 = setInterval(timer2, 4000),
        $slide = $(".main-slide .main-s .main-s-item"),
        length = $slide.length - 1;

    function timer2() {
        a++;
        if (a > length) a = 0;
        $slide.hide().eq(a).fadeIn(1000);
    }

    var count = 1,
        $animate_bar = $(".main-slide .animate-bar"),
        $main = $(".main-slide .main-s .main-s-tiem"),
        $main_length = $main.length;

    $animate_bar.addClass("active");

    setInterval(function () {
        $animate_bar.removeClass("active");
    }, 4000)

    setInterval(function () {
        count++;

        if (count > $main_length) {
            count = 1;
        }
        $animate_bar.addClass("active");
    }, 4050)

    setInterval(function () {
        if (count == $main_length) {
            $main.eq(0).show().css("left", "100%").stop().animate({
                left: "0%"
            }, 1000, "linear").css("z-index", "2")
        } else {
            $main.eq(count).show().css("left", "100%").stop().animate({
                left: "0%"
            }, 1000, "linear").css("z-index", "2")
        }

        $main.eq(count - 1).css("z-index", "1").fadeOut(3000)
    }, 3800)

    var i = 0,
        d = 0,
        time = false,
        $indicator = $(".second-slide .scroll-wrap .circle span"),
        indi_leng = $indicator.length - 1,
        $left_btn = $(".second-slide .second-s #left-btn"),
        $right_btn = $(".second-slide .second-s #right-btn"),
        $second_slide = $(".second-slide"),
        $banner_item = $(".second-slide .second-s .second-s-left .s-left-img .mobile-img ul li img"),
        $banner_text = $(".second-slide .second-s .s-right-font ul li"),
        interval = setInterval(timer, 3000);

    $indicator.eq(0).addClass("active")

    function move_slide(i) {
        $banner_item.stop().animate({
            left: "-" + i + "00%"
        }, 1000)
        $banner_text.stop().animate({
            left: "-" + i + "00%"
        }, 1000)
    }
    
    $("#left_btn, #right_btn, .circle").hover(function(){
        clearInterval(interval);
    }, function(){
        clearInterval(interval);
        interval = setInterval(timer, 3000);
    })
    function select(i) {
        $indicator.not(this).removeClass("active").eq(i).addClass("active");
    }

    function timer() {
        d++;
        if (d > indi_leng) {
            d = 0;
        }
        move_slide(d)
        select(d);
    }
    $left_btn.click(function (e) {

        e.preventDefault();

        if (time == true) {
            return;
        }
        setTimeout(function () {
            time = false;
        }, 1000)
        time = true;

        d--;
        if (d < 0) {
            d = indi_leng;
        }
        move_slide(d)
        select(d);
    })
    $right_btn.click(function (e) {

        e.preventDefault();

        if (time == true) {
            return;
        }
        setTimeout(function () {
            time = false;
        }, 1000)
        time = true;
        d++;
        if (d > indi_leng) {
            d = 0;
        }
        move_slide(d)
        select(d);
    })

    $indicator.click(function () {

        if (time == true) {
            return;
        }
        setTimeout(function () {
            time = false;
        }, 1000)
        time = true;
        d = $(this).index();
        move_slide(d)
        select(d)
    })

    var $review_content = $(".review .review-wrap .review-content"),
        r = 0,
        $review_item_leng = $(".review-wrap .review-content .review-box").length,
        reviewSlide = setInterval(moveSlide, 4000),
        $slideHandler = $(".review .review-wrap .btn-wrap span"),
        time = false;

    function moveSlide() {
        $review_content.stop().animate({
            left: -398 * (r) + "px"
        }, 1000)
    }

    $slideHandler.hover(function () {
        clearInterval(reviewSlide);
    }, function () {
        clearInterval(reviewSlide); 
        reviewSlide = setInterval(moveSlide, 4000);
    })
    $slideHandler.click(function () {
        var i = $slideHandler.index(this);
        if (time == true) {
            return;
        }
        setTimeout(function () {
            time = false;
        }, 1000)
        time = true;
        if (i == 0) {
            r--;
            if (r < 0) {
                r = $review_item_leng - 3;
            }
            moveSlide()
        } else if (i == 1) {
            r++;
            if (r > $review_item_leng - 3) {
                r = 0;
            }
            moveSlide()
        }
    });

    $review_content.hover(function () {
        clearInterval(reviewSlide);
    }, function () {
        clearInterval(reviewSlide);
        reviewSlide = setInterval(moveSlide, 4000);
    });

    function sTop(select, event, selector, px, time) {
        $(select).click(event, function () {
            $(selector).stop().animate({
                scrollTop: px
            }, time)
        })
    }
    sTop("aside", "mouseover", "html, body", 0, 500)

    var time = false,
        idx = 0,
        $indi = $(".indi ul li"),
        $html_body = $("html, body"),
        text = ["Main", "Service", "Event", "Category", "Step", "Review"],
        second_slide = $(".second-slide").offset().top,
        event = $(".event").offset().top,
        category = $(".icon").offset().top,
        step = $(".step").offset().top,
        review = $(".review").offset().top,
        offset = [0, second_slide, event, category, step, review]


    function scroll(i) {
        $html_body.stop().animate({
            scrollTop: i
        }, 800)
    }
    $indi.eq(0).children("a").text(text[0]);
    $indi.eq(0).addClass("line")

    $indi.click(function () {
        var i = $(this).index();
        $indi.not(this).children("a").text("●");
        $(this).children("a").text(text[i])
        $indi.removeClass("line").eq(i).addClass("line");
        idx = i;
        scroll(offset[i]);
    })
    $(window).on("mousewheel DOMMousewheel", function (e) {
        if (time == true) {
            return;
        }
        setTimeout(function () {
            time = false;
        }, 1000)
        time = true;
        var delta = e.originalEvent.wheelDelta;
        if (delta < 0) {
            idx++;
            if (idx > offset.length - 1) {
                idx = offset.length - 1;
            }
        } else {
            idx--;
            if (idx < 0) {
                idx = 0;
            }
        }
        if(idx >= 1){
             $("aside").fadeIn()
        }else{
             $("aside").fadeOut()
        }

        $indi.not(idx).children("a").text("●");
        $indi.eq(idx).children("a").text(text[idx]);
        $indi.removeClass("line").eq(idx).addClass("line");
    })
    $(window).keydown(function (e) {

        if (time == true) {
            return;
        }
        setTimeout(function () {
            time = false;
        }, 1000)
        time = true;
        if (e.keyCode == 38) {
            idx--;
            if (idx < 0) {
                idx = 0;
            }
            scroll(offset[idx]);
        }
        if (e.keyCode == 40) {
            idx++;
            if (idx > offset.length - 1) {
                idx = offset.length - 1;
            }
            scroll(offset[idx]);
        }
        $indi.not(idx).children("a").text("●");
        $indi.eq(idx).children("a").text(text[idx]);
        $indi.removeClass("line").eq(idx).addClass("line");
    })

    
    $(window).scroll(function(){
        var pos = $(window).scrollTop();
        
        if(pos >= offset[0]  &&  pos  < offset[1]){
            idx = 0;
        }else if(pos >= offset[1]  &&  pos  < offset[2]){
            idx = 1;
        }else if(pos >= offset[2]  &&  pos  < offset[3]){
            idx = 2;
        }else if(pos >= offset[3]  &&  pos  < offset[4]){
            idx = 3;
        }else if(pos >= offset[4]  &&  pos  < offset[5]){
            idx = 4;
        }else if(pos >= offset[5]){
            idx = 5;
        }
        
        $indi.not(idx).children("a").text("●");
        $indi.eq(idx).children("a").text(text[idx]);
        $indi.removeClass("line").eq(idx).addClass("line");
        
    })

})

    
    var offset = new Array(),
        time = false,
        count = 0,
        $section = $(".section"),
        $section_leng = $section.length,
        $indi = $(".indi ul li"),
        $html_body = $("html, body")

    for (var a = 0; a < $section_leng; a++) {
        offset.push($section.eq(a).offset().top);
    }

    function scroll(i) {
        $html_body.stop().animate({
            scrollTop: i
        }, 800, "easeOutQuad")
    }
    $indi.eq(0).empty().addClass("text1");
    $indi.eq(0).addClass("line")

    $indi.click(function () {
        var i = $(this).index();
        for (var s = 0; s < $section_leng + 1; s++) {
            $indi.removeClass("text" + s)
        }
        $indi.not(this).text("●");
        $indi.eq(i).empty();
        $indi.removeClass("line");
        $(this).addClass("text" + (i + 1)).addClass("line");
        scroll(offset[i]);
        count = i;
    })
    $(window).on("mousewheel DOMMousewheel", function (e) {
       if(time == true){
                return;
            }
            setTimeout(function(){
                time = false;
            }, 1000)
            time = true;
            var delta = e.originalEvent.wheelDelta;
            if(delta < 0){
                count++;
                if(count > $section_leng-1){
                    count = $section_leng-1;
                }
            }else{
                count--;
                if(count < 0){
                    count = 0;
                }
            }
            
            scroll(offset[count]);
            
            for(var s = 0; s < $section_leng+1; s++)
                {$indicator.removeClass("text"+s)}
            
            $indicator.not(count).text("●");
            $indicator.eq(count).empty();
            $indicator.removeClass("line");
            $indicator.eq(count).addClass("text"+ (count+1)).addClass("line");
        })
        $(window).keydown(function(e){
        
            if(time == true){
                return;
            }
            setTimeout(function(){
                time = false;
            }, 1000)
            time = true;
            
            if(e.keyCode == 38){
                count--;
                if(count < 0){
                    count = 0;
                }
                scroll(offset[count]);
            }
            if(e.keyCode == 40){
                count++;
                if(count > $section_leng-1){
                    count = $section_leng-1;
                }
                scroll(offset[count]);
            }
            
            for(var s = 0; s < $section_leng + 1; s++){
                $indicator.removeClass("text"+s)
            }
            $indicator.not(count).text("●");
            $indicator.eq(count).empty();
            $indicator.removeClass("line");
            $indicator.eq(count).addClass("text"+ (count+1)).addClass("line");
    })

}) 