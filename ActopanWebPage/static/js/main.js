$(document).ready(function(){
	$("#logo").addClass("animated fadeIn delay-1");

	$("#logo").css({
		"margin-top":"15%"
	});

	$(".logo-img").css({
		"width":"70%",

	});

	$(document).on("scroll", function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 200){
			//$("#logo").removeClass("animated fadeIn delay-1");

			$("#logo").css({
				"margin-top":"0%"
			});

			$(".logo-img").css({
				"width":"166px",
			});

		}
	})

});