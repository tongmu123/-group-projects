$(function () {
    $(".re-header").load("publicpage/login_header.html");
    $(".re-footer").load("publicpage/login_footer.html");
    $(".demoform").Validform({
        tiptype: 3,
    });
    laydate.render({
        elem: '#test1'
      });
    var $switch = $(".registerbox>form");
    $(".r-switch").click(function () {
        $(this).css({
            "background-color": "rgb(242,242,242)"
        });
        $(this).siblings().css({
            "background-color": "white"
        });
        if ($(this).attr("id") == "email") {
            $switch.eq(0).css({
                "display": "none",
            })
            $switch.eq(1).css({
                "display": "block",
            })
        }
        if ($(this).attr("id") == "phone") {
            $switch.eq(0).css({
                "display": "block",
            })
            $switch.eq(1).css({
                "display": "none",
            })
        }
    })
})