$(function() {
	$(".header1").load("publicpage/header1.html", function() {
		// console.log("ddd");
	});
	$(".footer").load("publicpage/footer.html", function() {

	});


	//地址删除
	$(".container .floor1 .dizhi .moren").hover(function() {
		var $bianji = $(this).children(".sub").css("display", "block");
		$bianji.children(".del").click(function() {
			$(this).parents(".moren").remove();

		})
	}, function() {
		$(this).children(".sub").css("display", "none");
	})




	//获取数据项

	var pingban2 = JSON.parse(localStorage.getItem("pingban2"));
	var shouji2 = JSON.parse(localStorage.getItem("shouji2"));
	var zongjia = JSON.parse(localStorage.getItem("zongjia"));
	// console.log(shouji2);
	// console.log(pingban2);
	// localStorage.clear();


	//数据
	if (shouji2 != null) {
		var shouji2_data = shouji2.name;
		$(".floor2 .box .left .up .up01 .jieshao").text(shouji2_data);
		$(".floor2 .box .left .up .up01 .num").text(shouji2.number);
		$(".floor2 .box .left .up .up01 .jiage").text(shouji2.price);
		var pic = shouji2.img;
		$(".floor2 .box .left .up .up01 .pic img").attr("src", pic);
	} else if (shouji2 == null) {
		$(".floor2 .box .left .up").remove();
	}

	if (pingban2 != null) {
		var pingban2_data = pingban2.name;
		// console.log(pingban2_data);
		$(".floor2 .box .left .up2 .up01 .jieshao").text(pingban2_data);
		$(".floor2 .box .left .up2 .up01 .num").text(pingban2.number);
		$(".floor2 .box .left .up2 .up01 .jiage").text(pingban2.price);
		var pic = pingban2.img;
		$(".floor2 .box .left .up2 .up01 .pic img").attr("src", pic);
	} else if (pingban2 == null) {
		$(".floor2 .box .left .up2").remove();
	}

	//获取总价
	var zongjia = JSON.parse(localStorage.getItem("zongjia"));
	// console.log(zongjia.price);

	$(".shangzong").text(zongjia.price);
	$(".jiesuan").text(zongjia.price);
	$(".yingfu").text(zongjia.price);

	//存储订单金额
	var dingdanjine = {
		price: $(".yingfu").text()
	}

	var str4 = JSON.stringify(dingdanjine);
	localStorage.setItem("dingdanjine", str4);
	// console.log(dingdanjine);

	//提交订单
	$(".container .floor3 .box .f3 a ").click(function() {

		$(this).parents(".container").find(".left .up01").css("display", "none");
		$(this).parents(".container").find(".left .up02").css("display", "none");
		$(this).parents(".container").find(".right .down span").text("0.00");
		$(this).parents(".floor3").find(".f1 span").text("0.00");

	})

});
