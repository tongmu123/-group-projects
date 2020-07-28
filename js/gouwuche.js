$(function() {
	//引入页头页脚
	$(".header1").load("publicpage/header1.html", function() {

	});

	$(".footer").load("publicpage/footer.html", function() {

	});


	//全选按钮
	var $quanxuan1 = $(".container .box .title .content input").click(function() {
		//获取其他的input
		var $ipt = $(".container .box .content #ipt");
		// console.log($ipt.length);
		//定义点击状态
		var clicks = true;
		//设置布尔值
		var clicks = $(this).prop("checked");
		if (clicks) {
			$ipt.prop("checked", true);
			prices();
		} else {
			$ipt.prop("checked", false);
			prices();
		}
	});
	var $quanxuan2 = $(".container .box .floor3 .content input").click(function() {
		//获取其他的input
		var $ipt = $(".container .box .content #ipt");
		// console.log($ipt.length);
		//定义点击状态
		var clicks = true;
		//设置布尔值
		var clicks = $(this).prop("checked");
		if (clicks) {
			$ipt.prop("checked", true);
			prices();
		} else {
			$ipt.prop("checked", false);
			prices();
		}

	});

	//单选商品
	var $danxuan = $(".floor .content .ipt #ipt").click(function() {
		var clicks = true;
		var clicks = $(this).prop("checked");
		if (clicks) {
			$(this).prop("checked", true);
			prices();
		} else {
			$(this).prop("checked", false);
			prices();
		}
	});

	//计算商品的数量
	$(".num .num_01 .jiajian .jian").click(function() {
		var obj = $(this).parents(".num").find(".num_text");
		if (obj.val() <= 1) {
			obj.val(1);
		} else {
			obj.val(parseInt(obj.val()) - 1);
		}
		obj.change();

		//价格变化
		var $danjia = $(this).parents(".floor").find(".price span").text();
		console.log($danjia);

		var $shuliang = $(this).parents(".num").find(".num_text").val();
		console.log($shuliang);


		var he = parseFloat($danjia * $shuliang);
		$(this).parents(".floor").find(".xiaoji span").text(he);

		prices();
	});


	$(".num .num_01 .jiajian .jia").click(function() {
		var obj = $(this).parents(".num").find(".num_text");
		obj.val(parseInt(obj.val()) + 1);
		obj.change();

		//价格变化
		var $danjia = $(this).parents(".floor").find(".price span").text();
		// console.log($danjia);

		var $shuliang = $(this).parents(".num").find(".num_text").val();
		// console.log($shuliang);

		var he = parseFloat($danjia * $shuliang);
		$(this).parents(".floor").find(".xiaoji span").text(he);

		prices();
	});





	//删除按钮
	$(".container .box .content .del a").click(function() {
		//弹出remove盒子:弹出的是这个按钮所在的那一层的remove盒子
		$(this).parents(".floor").children(".remove").css("display", "block");
		//获取盒子里的按钮
		$(".remove .yesorno .no").click(function() {
			//隐藏remove盒子:隐藏的是这个按钮所在的那一层的remove盒子
			$(this).parents(".floor").children(".remove").css("display", "none");
		})
		//删除一层
		$(".remove .yesorno .yes").click(function() {
			$(this).parents(".floor").remove();
			prices();
		})
	});

	//删除所有选中
	$(".container .box .floor3 .shanchu").click(function() {
		//获取布尔值
		var $ipt = $(".container .box .floor3 input").prop("checked");

		if ($ipt == false) {
			alert("请选择您要删除的商品！")
		} else if ($ipt == true) {
			//弹出remove盒子:弹出的是这个按钮所在的那一层的remove盒子
			$(this).parents(".floor3").children(".remove2").css("display", "block");

			$(".remove2 .yesorno .no").click(function() {
				//隐藏remove盒子
				$(this).parents(".floor3").children(".remove2").css("display", "none");
			})
			$(".remove2 .yesorno .yes").click(function() {
				//删除所有的选中

				//判断选中的input状态

				//每个都进行布尔判定
				var $ipts = $(".floor .content #ipt").each(function() {
					var state1 = true;
					//每个都进行布尔判定
					var state1 = $(this).prop("checked");
					if (state1) {
						var floor = $(this).parents(".floor");
						floor.remove();
						prices();
					}

				});
				//隐藏remove盒子
				$(this).parents(".floor3").children(".remove2").css("display", "none");

			})

		}

	});

	//总价
	function prices() {
		var sum = 0;
		var $iptAll = $(".box .floor .content .ipt input").each(function() {
			var state2 = $(this).prop("checked");
			if (state2 == true) {
				var jiage = $(this).parents(".floor").find(".content .xiaoji span").text();
				// console.log(jiage);
				var price = parseFloat(jiage);
				// console.log(price);
				sum += price;
			}

		});
		$(".floor3 .content .right .zongji .zongjia").text(sum);
	}



	//localstorage
	//获取数据项

	var shouji = JSON.parse(localStorage.getItem("shouji"));
	var pingban = JSON.parse(localStorage.getItem("pingban"));
	// localStorage.clear();

	//获取数量
	var shouji_num = shouji.number;
	var pingban_num = pingban.number;

	//判断数量是否是0
	if (shouji_num != 0 || pingban_num != 0) {
		var shouji_data = shouji.name + shouji.banben + shouji.color + shouji.taocan;

		$(".floor1 .jieshao a").text(shouji_data);
		$(".floor1 .num_text").val(shouji_num);
		$(".floor1 .price span").text(shouji.price);
		var pic = shouji.img;
		$(".floor1 .pic img").attr("src", pic);
		$(".floor1 .xiaoji span").text(shouji_num * shouji.price);
	}

	if (pingban_num != 0) {
		var pingban_data = pingban.name + pingban.banben + pingban.color + pingban.rongliang;

		$(".floor2 .jieshao a").text(pingban_data);
		$(".floor2 .num_text").val(pingban_num);
		$(".floor2 .price span").text(pingban.price);
		var pic = pingban.img;
		$(".floor2 .pic img").attr("src", pic);
		$(".floor2 .xiaoji span").text(pingban_num * pingban.price);

	}

	//存入数据
	$(".jiesuan a").click(function() {
		if ($(".floor1 .up .ipt input").prop("checked") == true) {
			var shouji2 = {
				name: $(".floor1 .jieshao a").text(),
				number: $(".floor1 .num_text").val(),
				price: parseFloat($(".floor1 .xiaoji span").text()),
				img: "img/publicimg/shouji.png"
			}
			var str1 = JSON.stringify(shouji2);
			localStorage.setItem("shouji2", str1);

		}
		// console.log($(".floor1 .up .ipt input").prop("checked"));
		// console.log(shouji2);

		if ($(".floor2 .up .ipt input").prop("checked") == true) {
			var pingban2 = {
				name: $(".floor2 .jieshao a").text(),
				number: $(".floor2 .num_text").val(),
				price: parseFloat($(".floor2 .xiaoji span").text()),
				img: "img/publicimg/pingban.png"
			}
			var str2 = JSON.stringify(pingban2);
			localStorage.setItem("pingban2", str2);
		}
		// console.log($(".floor2 .up .ipt input").prop("checked"));
		// console.log(pingban2);

		//存储总价
		var zongjia = {
			price: $(".floor3 .zongjia").text()
		}
			
		var str3 = JSON.stringify(zongjia);
		localStorage.setItem("zongjia", str3)
		// console.log(zongjia);

		/* 		if ($(".floor1 .up .ipt input").prop("checked") == true) {
					window.location.href = "dingdan.html";
				} else {
					// layer.open({
					// 	type: 1,
					// 	skin: 'layui-layer-rim', //加上边框
					// 	area: ['420px', '240px'], //宽高
					// 	// shadeClose: true,
					// 	content: '\<\div style="padding:20px;font-size:20px">请添加商品！\<\/div>'
					// });
				}
				if ($(".floor2 .up .ipt input").prop("checked") == true) {	
					window.location.href = "dingdan.html";
				} else {
					// layer.open({
					// 	type: 1,
					// 	skin: 'layui-layer-rim', //加上边框
					// 	area: ['420px', '240px'], //宽高
					// 	// shadeClose: true,
					// 	content: '\<\div style="padding:20px;font-size:20px">请添加商品！\<\/div>'
					// });

				} */


	})

});
