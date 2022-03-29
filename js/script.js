// グローバルナビゲーション
$(".openbtn").click(function () {
	$(this).toggleClass('active');
	$("#g-nav").toggleClass('panelactive');
	$(".circle-bg").toggleClass('circleactive');
});

$("#g-nav a").click(function () {
	$(".openbtn").removeClass('active');
	$("#g-nav").removeClass('panelactive');
	$(".circle-bg").removeClass('circleactive');
});

// アコーディオン
$('.title').on('click', function() {
	$('.box').slideUp(500);
    
	var findElm = $(this).next(".box");
    
	if($(this).hasClass('close')){
		$(this).removeClass('close'); 
	}else{
		$('.close').removeClass('close');
		$(this).addClass('close');
		$(findElm).slideDown(500);
	}
});

$(window).on('load', function(){
	$(".open").each(function(index, element){
		var Title =$(element).children('.title');
		$(Title).addClass('close');
		var Box =$(element).children('.box');
		$(Box).slideDown(500);
	});
});