$(function(){
	$(".two").css("display","none");
	$(".feather").click(function(){
		
		var _$this=$(this);
		//先全部隐藏
		$(".two").css("display","none");
		$(".feather").removeClass("cur");
		
		if (_$this.next().is(":visible")) {
           _$this.next().slideUp();
          _$this.removeClass("cur");
		}else{
			_$this.next().slideDown();
           _$this.addClass("cur");
		};
	})
})