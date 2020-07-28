function h_gouwuche() {
    var header_buy1 = JSON.parse(localStorage.getItem("shouji"));
    var header_buy2 = JSON.parse(localStorage.getItem("pingban"));
    var sj_num = header_buy1.number;
    var pb_num = header_buy2.number;
    var $gouwuche = $("#header-buy>.header-gouwuche");

    // 判断有哪些商品
    if (sj_num != 0 || pb_num != 0) {
        $gouwuche.children("#removeimg").remove();
        if (sj_num != 0) {
            $gouwuche.children().eq(0).addClass("head-hasphone").children("input").prop("checked", true);
            $gouwuche.children().eq(2).addClass("head-sumbuy");
            var sj_data = header_buy1.name + header_buy1.banben + header_buy1.color + header_buy1.taocan;
            $(".head-hasphone>p").text(sj_data);
            var sj_price = header_buy1.price;
            $("#headbuy-price1").text(sj_price);
            var sj_num = header_buy1.number;
            $("#headbuy-num1").text(sj_num);
        }
       if (pb_num != 0) {
            $gouwuche.children().eq(1).addClass("head-hasipad").children("input").prop("checked", true);
            $gouwuche.children().eq(2).addClass("head-sumbuy");
            var pb_data = header_buy2.name + header_buy2.rongliang + header_buy2.banben + header_buy2.color;
            $(".head-hasipad>p").text(pb_data);
            var pb_price = header_buy2.price;
            $("#headbuy-price2").text(pb_price); 
            var pb_num = header_buy2.number;
            $("#headbuy-num2").text(pb_num);
        }
        // 计算商品数量
        shangpinnum();
        // 计算总价
        h_pricesum();
        $($gouwuche).find("input").click(function () {
            h_pricesum();
            shangpinnum();
        })
        // 实现点击结算按钮判断是否能跳转并存储跨页面数据
        $($gouwuche).find("button").click(function () {
            if ($("#head-pricesum").text() != 0) {
                if ($($gouwuche).find("input").eq(0).prop("checked") == false) {
                    header_buy1.number = "0";
                }
                if ($($gouwuche).find("input").eq(1).prop("checked") == false) {
                    header_buy2.number = "0";
                }
                localStorage.setItem("shouji", JSON.stringify(header_buy1));
                localStorage.setItem("pingban", JSON.stringify(header_buy2));
                window.location.href = "gouwuche.html";
            }
        })
    }
}
// 商品个数计算函数
function shangpinnum() {
    var shangpinnum = 0;
    if ($("#header-buy>.header-gouwuche").find("input").eq(0).prop("checked") == true) {
        shangpinnum += 1;
    }
    if ($("#header-buy>.header-gouwuche").find("input").eq(1).prop("checked") == true) {
        shangpinnum += 1;
    }
    $("#header-buy>a>span").text(shangpinnum);
}
// 价格计算函数
function h_pricesum() {
    if ($("#headbuy-price1").siblings("input").prop("checked") == true) {
        var sum1 = parseInt($("#headbuy-price1").text()) * parseInt($("#headbuy-num1").text());
    }
    else {
        var sum1 = 0;
    }
    if ($("#headbuy-price2").siblings("input").prop("checked") == true) {
        var sum2 = parseInt($("#headbuy-price2").text()) * parseInt($("#headbuy-num2").text());
    }
    else {
        var sum2 = 0;
    }
    $("#head-pricesum").text(sum1 + sum2);
}