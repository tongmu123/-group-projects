$(function() {

	//选项卡：
	$(".box .title .item").click(function() {
		//获取索引
		var idx = $(this).index();

		//改变默认样式，首先把默认的删除掉，在清空所有的样式，然后，点击那个哪个添加class默认样式
		$(".box .title .item").removeClass("selected");
		$(".box .title .item").eq(idx).addClass("selected");
		//拿到索引让对应的页面展示
		$(".box .body .page").removeClass("selected");
		//选中哪个之后哪个就停留在默认样式上
		$(".box .body .page").eq(idx).addClass("selected");
	});

	//支付隐藏
	var $yincang = $(".container .box .body .page:last-child .neirong04 .zhifu01").eq(11).click(function() {
		$(this).css("display", "none")
		$(".yincang").css("display", "block");
		$(".container .box .body .page:last-child .neirong04").css("height", 500);
	})

	//右下角红色对号
	var $pic = $(".zhifu01_02").click(function() {
		$pic.removeClass("choose");
		$(this).addClass("choose");
	});

	//Time
	  var starttime = new Date("2021/01/01");
	  setInterval(function () {
	    var nowtime = new Date();
	    var time = starttime - nowtime;
	    // var day = parseInt(time / 1000 / 60 / 60 / 24);
	    var hour = parseInt(time / 1000 / 60 / 60 % 24);
	    var minute = parseInt(time / 1000 / 60 % 60);
	    var seconds = parseInt(time / 1000 % 60);
	    $('.times').html(hour + "小时" + minute + "分钟" + seconds + "秒");
	  }, 1000);
	

	//订单详情下拉菜单
	var flag = true;
	$(".container .floor2 .right .up .up02 .up02_01").click(function() {
		if (flag == true) {
			$(this).html("订单详情<img src='img/about_zhifu/arrow_icon.png' >");
			flag = false;
			$(".container .floor2 .right .down ").css("display", "block");
			$(".container .floor2 .right .up .up03 ").css("display", "none");
			$(".container .floor2 .right .up .up01 .up01_01 ").css("display", "none");
		} else {
			$(this).html("订单详情<img src='img/about_zhifu/down_arrow_icon.png' >");
			flag = true;
			$(".container .floor2 .right .down ").css("display", "none");
			$(".container .floor2 .right .up .up03 ").css("display", "block");
			$(".container .floor2 .right .up .up01 .up01_01 ").css("display", "block");
		}

	})
	
	//获取订单金额
	var dingdanjine = JSON.parse(localStorage.getItem("dingdanjine"));
	$("#jiner").text(dingdanjine.price);
	

	//支付
	$(".querenzhifu").click(function() {
		layer.open({
			type: 1,
			skin: 'layui-layer-rim', //加上边框
			area: ['420px', '240px'], //宽高
			shadeClose: true,
			content: '\<\div style="padding:20px;font-size:20px">支付成功！\<\/div>'
		});
		$("#jiner").html("0.00");
	})


});
