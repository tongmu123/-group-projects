
$(function () {
	
    var $index_a = localStorage.getItem("account");
    if($index_a == "0"){
        $("#index-img1").css({"display":"inline-block"});
        $("#index-img2").css({"display":"none"});
        $("#index-div1").css({"display":"inline-block"});
        $("#index-div2").css({"display":"none"});
    }
    else{
        $("#index-img1").css({"display":"none"});
        $("#index-img2").css({"display":"inline-block"});
        $("#index-div1").css({"display":"none"});
        $("#index-div2").css({"display":"inline-block"});
        $("#index-div2>span").text($index_a.substr(1,3)+"****");
    }
    $(".nav_header1").load("publicpage/header1.html", function () {
	});
	$(".nav_header2").load("publicpage/header2.html", function () {
	});
	$(".index-foot").load("publicpage/footer.html", function () {
	});
    var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },//自动切换
        effect: "fade",//切换效果
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    $('.swap').html($('.news_li').html());
    x = $('.news_li');
    y = $('.swap');
    h = $('.news_li li').length * 20; //20为每个li的高度
    var hh = $('.news_li li').length;
    if (hh > 1)
        //setTimeout(b,3000);//滚动间隔时间 现在是3秒
        b();
    b();

    function b() {
        t = parseInt(x.css('top'));
        //alert(t)
        y.css('top', '20px');
        x.animate({
            top: t - 20 + 'px'
        }, 'slow'); //20为每个li的高度
        if (Math.abs(t) == h - 20) { //20为每个li的高度
            y.animate({
                top: '0px'
            }, 'slow');
            z = x;
            x = y;
            y = z;
        }
        setTimeout(b, 3000); //滚动间隔时间 现在是3秒
    }
    for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
        mySwiper.pagination.bullets[i].onmouseover = function () {
            this.click();
        };
    }
    // banner菜单栏动画
    $(".index-menu>ul>li").hover(function () {
        $(this).children().eq(0).attr("src", "img/index/menu02.png");
        $(this).parent().parent().css({
            "border-top-right-radius": "0px",
            "border-bottom-right-radius": "0px"
        })
        if ($(this).prev().length == 0) {
            $(this).css({ "border-top-right-radius": "0px" })
        }
        if ($(this).next().length == 0) {
            $(this).css({ "border-bottom-right-radius": "0px" })
        }
    }, function () {
        $(this).children().eq(0).attr("src", "img/index/menu01.png");
        $(this).parent().parent().css({
            "border-top-right-radius": "10px",
            "border-bottom-right-radius": "10px"
        })
    })
    $(".index-menu>ul>li:even").hover(function () {
        $(this).children().eq(1).css({ "display": "block" });
    }, function () {
        $(this).children().eq(1).css({ "display": "none" });
    })
    $(".index-menu>ul>li:odd").hover(function () {
        $(this).children().eq(1).css({ "display": "block" });
    }, function () {
        $(this).children().eq(1).css({ "display": "none" });
    })
    // 右侧导航与菜单栏
    var $navr = $(".nav-right");
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 500) {
            $(".jiantou").css({
                "display": "inline-block",
            });
        }
        if (top < 500) {
            $(".jiantou").css({
                "display": "none",
            });
        }
        if (top < 2100) {
            $navr.children().children().css({ "background-color": "rgb(255,255,255)" });
            $navr.stop(false, false).animate({
                "right": "-110px",
            }, 400)
        }
        if (top >= 2100) {
            $navr.stop(false, false).animate({
                "right": "0px",
            }, 400)
        }
        if (top >= 2100 && top < 2770) {
            $navr.children().children().eq(0).siblings().css({ "background-color": "rgb(255,255,255)" });
            $navr.children().children().eq(0).css({ "background-color": "rgb(249,249,249)" });
        }
        if (top >= 2770 && top < 3440) {
            $navr.children().children().eq(1).siblings().css({ "background-color": "rgb(255,255,255)" });
            $navr.children().children().eq(1).css({ "background-color": "rgb(249,249,249)" });
        }
        if (top >= 3440 && top < 4110) {
            $navr.children().children().eq(2).siblings().css({ "background-color": "rgb(255,255,255)" });
            $navr.children().children().eq(2).css({ "background-color": "rgb(249,249,249)" });
        }
        if (top >= 4110 && top < 4780) {
            $navr.children().children().eq(3).siblings().css({ "background-color": "rgb(255,255,255)" });
            $navr.children().children().eq(3).css({ "background-color": "rgb(249,249,249)" });
        }
        if (top >= 4780 && top < 5450) {
            $navr.children().children().eq(4).siblings().css({ "background-color": "rgb(255,255,255)" });
            $navr.children().children().eq(4).css({ "background-color": "rgb(249,249,249)" });
        }
        if (top >= 5450 && top < 6120) {
            $navr.children().children().eq(5).siblings().css({ "background-color": "rgb(255,255,255)" });
            $navr.children().children().eq(5).css({ "background-color": "rgb(249,249,249)" });
        }
        if (top >= 6120 && top < 6790) {
            $navr.children().children().eq(6).siblings().css({ "background-color": "rgb(255,255,255)" });
            $navr.children().children().eq(6).css({ "background-color": "rgb(249,249,249)" });
        }
        if (top >= 6790 && top < 7460) {
            $navr.children().children().eq(7).siblings().css({ "background-color": "rgb(255,255,255)" });
            $navr.children().children().eq(7).css({ "background-color": "rgb(249,249,249)" });
        }
    })
    // 回到顶部
    $(".jiantou").click(function () {
        $navr.stop(false, false).animate({
            "right": "-110px",
        }, 100, function () {
            $("html").animate({
                scrollTop: "0",
            })
        })

    })
    $navr.children().children().eq(0).click(function () {
        $("html").animate({
            scrollTop: "2100",
        })
    })
    $navr.children().children().eq(1).click(function () {
        $("html").animate({
            scrollTop: "2780",
        })
    })
    $navr.children().children().eq(2).click(function () {
        $("html").animate({
            scrollTop: "3450",
        })
    })
    $navr.children().children().eq(3).click(function () {
        $("html").animate({
            scrollTop: "4120",
        })
    })
    $navr.children().children().eq(4).click(function () {
        $("html").animate({
            scrollTop: "4800",
        })
    })
    $navr.children().children().eq(5).click(function () {
        $("html").animate({
            scrollTop: "5480",
        })
    })
    $navr.children().children().eq(6).click(function () {
        $("html").animate({
            scrollTop: "6150",
        })
    })
    $navr.children().children().eq(7).click(function () {
        $("html").animate({
            scrollTop: "6830",
        })
    })
})
