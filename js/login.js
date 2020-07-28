$(function() {
	$(".header").load("publicpage/login_header.html");
	$(".footer").load("publicpage/login_footer.html");

	$(".yz2").hide();
	var dj = false;
	$(".p5").click(function() {
		if (dj) {
			$(".yz1").show();
			$(".yz2").hide();
			$(this).text("短信验证码登录");
			$(".genduo").show();
			$(".tubiao").show();
			dj = false;
		} else {
			$(".yz1").hide();
			$(".yz2").show();
			$(this).text("密码登录");
			$(".genduo").hide();
			$(".tubiao").hide();
			dj = true;
		}
	});
	$.Tipmsg.r = "";
	$(".zhform").Validform({
		tiptype: 3,
	});

	$(".logi").click(function() {
		var reg1 = /^[1][3,4,5,7,8][0-9]{9}$/;
		var reg2 = /^.+@.+\..+$/;
		var zh = $("#zhanghao").val();
		var mi = $("#mima").val();
		if (zh == "") {
			$("#zhanghao").css("border-color", "#ff0000");
		} else if ((reg1.test(zh) || reg2.test(zh)) && (mi != "")) {
			resetdata();
			var account = JSON.stringify($("#zhanghao").val());
			console.log(account);
			localStorage.setItem("account", account);
			location.href = "b.html";
		}

		var zh2 = $("#zhanghao2").val();
		var mi2 = $("#mima2").val();
		if (zh2 == "") {
			$("#zhanghao2").css("border-color", "#ff0000");
		} else if ((reg1.test(zh2)) && (mi2 != "")) {
			resetdata();
			var account = JSON.stringify($("#zhanghao2").val());
			console.log(account);
			localStorage.setItem("account", account);
			location.href = "b.html";
		}
	});

})
