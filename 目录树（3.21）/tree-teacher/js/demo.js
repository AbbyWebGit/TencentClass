$(function() {
	$(".i_item").hide();
	/*$(".item_title").click(function() {
		$(this).next().toggle();
	})*/
	/*$(".item_title").toggle(function() {
		$(this).next().slideDown();
	},function() {
		$(this).next().slideUp();
	})*/
	$(".item_title").click(function() {
		$(".item_title").removeClass("selected");
		$(".i_item").slideUp();
		if($(this).next().is(":visible")) {
			$(this).removeClass("selected");
			$(this).next().slideUp();
		} else {
			$(this).addClass("selected");
			$(this).next().slideDown();
		}
		
	})
})