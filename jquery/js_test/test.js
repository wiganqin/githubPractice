$(function(){
//显示隐藏
	$("#btn_show").click(function(){
		$("#header").show();
	});

	$("#btn_hide").click(function(){
		$("#header").hide();
	});

	$("#btn_toggle").click(function(){
		$("h3").toggle();
	});
//淡入淡出滑动
   var woman = $("#woman");
	$("#fadeIn").click(function(){
		woman.fadeIn(3000);
	});

	$("#fadeOut").click(function(){
		woman.fadeOut(3000);
	});
	
	$("#fadeOutIn").click(function(){
		woman.fadeToggle(3000);
	});

	$("#slideUp").click(function(){
		woman.slideUp(2000);
	});

	$("#slideDown").click(function(){
		woman.slideDown(2000);
	});

	//动画
	$("#donghua").click(function(){
		$("#black").animate({width:'200px',opacity:'0.6'},"slow");
		$("#black").animate({height:'200px',opacity:'0.8'},"slow");
		$("#black").animate({height:'100px',opacity:'0.5'},"slow");
	});

	$("#btn_submit").click(function(){
		
		var t="",len=0;
		t=$("#input").val().replace(/\r\n/g,"\\n").replace(/\n/g,"");
		document.form.output.value=t;
	});
})