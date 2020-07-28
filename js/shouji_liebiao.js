$(function() {
	$(".nav_header1").load("publicpage/header1.html");
	$(".nav_header2").load("publicpage/header2.html");
	$(".footer").load("publicpage/footer.html");

	$(".xuan").hover(function() {
		$(this).children(".price").css("display", "block");
	}, function() {
		$(this).children(".price").css("display", "none");
	})

	$(".shouji .d1 .item").hover(function() {
		$(this).stop().animate({
			bottom: "3px"
		}, 400)
	}, function() {
		$(this).stop().animate({
			bottom: "0px"
		}, 400)
	})

	//关键字搜索
	$("#find").keydown(function(event) {
		if (event.keyCode == 13) {
			var keyword = $(this).val();
			$(".d1").hide();
			$("p").filter(":Contains(" + keyword + ")").parents(".d1").fadeIn(200);
		}

	})

	$(".d1").click(function() {
		document.location.href = ("xq_sj.html");
	})

	//升序
	$(".s6").click(function() {

		var a = [];
		$(".s11").each(function(price) {
			a[price] = parseFloat($(this).text());
		});

		var array = [];
		$(".d1").each(function(index) {
			array[index] = $(this);
		});
		for (var i = 0; i < a.length - 1; i++) {
			for (var j = 0; j < a.length - 1 - i; j++) {
				if (a[j + 1] > a[j]) {
					var tmp = a[j + 1];
					a[j + 1] = a[j];
					a[j] = tmp;

					tmp = array[j + 1];
					array[j + 1] = array[j];
					array[j] = tmp;

				}
			}
		}
		for (var i = 0; i < array.length; i++) {
			$(".shouji").append(array[i]);
		}
	});

	//降序
	$(".s14").click(function() {

		var a = [];
		$(".s11").each(function(price) {
			a[price] = parseFloat($(this).text());
		});

		var array = [];
		$(".d1").each(function(index) {
			array[index] = $(this);
		});
		for (var i = 0; i < a.length - 1; i++) {
			for (var j = 0; j < a.length - 1 - i; j++) {
				if (a[j + 1] < a[j]) {
					var tmp = a[j + 1];
					a[j + 1] = a[j];
					a[j] = tmp;

					tmp = array[j + 1];
					array[j + 1] = array[j];
					array[j] = tmp;

				}
			}
		}
		for (var i = 0; i < array.length; i++) {
			$(".shouji").append(array[i]);
		}
	});

	//热度
	$(".s4").click(function() {
		var a = [];
		$(".s9").each(function(price) {
			a[price] = parseInt($(this).text());
		});

		var array = [];
		$(".d1").each(function(index) {
			array[index] = $(this);
		});
		for (var i = 0; i < a.length - 1; i++) {
			for (var j = 0; j < a.length - 1 - i; j++) {
				if (a[j + 1] > a[j]) {
					var tmp = a[j + 1];
					a[j + 1] = a[j];
					a[j] = tmp;

					tmp = array[j + 1];
					array[j + 1] = array[j];
					array[j] = tmp;

				}
			}
		}
		for (var i = 0; i < array.length; i++) {
			$(".shouji").append(array[i]);
		}
	});


	//价格区间 0-999
	var dj = false;
	$(".jg1").click(function() {
		if (dj) {
			$(this).prev(".price").prop("checked", false);
			$(".d1").each(function(index) {
				$(this).show();
			});
			dj = false;
		} else {
			$(this).prev(".price").prop("checked", true);
			$(this).parents().siblings("li").find(".price").prop("checked", false);
			$(".d1").each(function(index) {
				if ($(this).find(".s11").text() > 999) {
					$(this).hide();
				}
			});
			dj = true;
		}
	});
	$(".x1").click(function() {
		if (dj) {
			$(".d1").each(function(index) {
				$(this).show();
			});
			dj = false;
		} else {
			$(this).parents().siblings("li").find(".price").prop("checked", false);
			$(".d1").each(function(index) {
				if ($(this).find(".s11").text() > 999) {
					$(this).hide();
				}
			});
			dj = true;
		}
	});

	//1000-1999
	var dj = false;
	$(".jg2").click(function() {
		if (dj) {
			$(this).prev(".price").prop("checked", false);
			$(".d1").each(function(index) {
				$(this).show();
			});
			dj = false;
		} else {
			$(this).prev(".price").prop("checked", true);
			$(this).parents().siblings("li").find(".price").prop("checked", false);
			$(".d1").each(function(index) {
				if ($(this).find(".s11").text() > 1999 || $(this).find(".s11").text() < 1000) {
					$(this).hide();
				}
			});
			dj = true;
		}
	});
	$(".x2").click(function() {
		if (dj) {
			$(".d1").each(function(index) {
				$(this).show();
			});
			dj = false;
		} else {
			$(this).parents().siblings("li").find(".price").prop("checked", false);
			$(".d1").each(function(index) {
				if ($(this).find(".s11").text() > 1999 || $(this).find(".s11").text() < 1000) {
					$(this).hide();
				}
			});
			dj = true;
		}
	});

	//2000-3999
	var dj = false;
	$(".jg3").click(function() {
		if (dj) {
			$(this).prev(".price").prop("checked", false);
			$(".d1").each(function(index) {
				$(this).show();
			});
			dj = false;
		} else {
			$(this).prev(".price").prop("checked", true);
			$(this).parents().siblings("li").find(".price").prop("checked", false);
			$(".d1").each(function(index) {
				if ($(this).find(".s11").text() > 3999 || $(this).find(".s11").text() < 2000) {
					$(this).hide();
				}
			});
			dj = true;
		}
	});
	$(".x3").click(function() {
		if (dj) {
			$(".d1").each(function(index) {
				$(this).show();
			});
			dj = false;
		} else {
			$(this).parents().siblings("li").find(".price").prop("checked", false);
			$(".d1").each(function(index) {
				if ($(this).find(".s11").text() > 3999 || $(this).find(".s11").text() < 2000) {
					$(this).hide();
				}
			});
			dj = true;
		}
	});

	//4000-5999
	var dj = false;
	$(".jg4").click(function() {
		if (dj) {
			$(this).prev(".price").prop("checked", false);
			$(".d1").each(function(index) {
				$(this).show();
			});
			dj = false;
		} else {
			$(this).prev(".price").prop("checked", true);
			$(this).parents().siblings("li").find(".price").prop("checked", false);
			$(".d1").each(function(index) {
				if ($(this).find(".s11").text() > 5999 || $(this).find(".s11").text() < 4000) {
					$(this).hide();
				}
			});
			dj = true;
		}
	});
	$(".x4").click(function() {
		if (dj) {
			$(".d1").each(function(index) {
				$(this).show();
			});
			dj = false;
		} else {
			$(this).parents().siblings("li").find(".price").prop("checked", false);
			$(".d1").each(function(index) {
				if ($(this).find(".s11").text() > 5999 || $(this).find(".s11").text() < 4000) {
					$(this).hide();
				}
			});
			dj = true;
		}
	});

	//5000-
	var dj = false;
	$(".jg5").click(function() {
		if (dj) {
			$(this).prev(".price").prop("checked", false);
			$(".d1").each(function(index) {
				$(this).show();
			});
			dj = false;
		} else {
			$(this).prev(".price").prop("checked", true);
			$(this).parents().siblings("li").find(".price").prop("checked", false);
			$(".d1").each(function(index) {
				if ($(this).find(".s11").text() < 6000) {
					$(this).hide();
				}
			});
			dj = true;
		}
	});
	$(".x5").click(function() {
		if (dj) {
			$(".d1").each(function(index) {
				$(this).show();
			});
			dj = false;
		} else {
			$(this).parents().siblings("li").find(".price").prop("checked", false);
			$(".d1").each(function(index) {
				if ($(this).find(".s11").text() < 6000) {
					$(this).hide();
				}
			});
			dj = true;
		}
	});
})
