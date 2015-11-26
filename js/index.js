//下一页按钮事件
var $slideShow = $(".tabs-content");
var $pageTitle = $(".tabs-title a");
var page = 0;
$("#NEXT").click(function() {
	if(!$slideShow.is(":animated")) {
		if(page == 1) {
			$slideShow.animate({left : "0px"}, 800);
			page = 0;
		$pageTitle.eq(1).removeClass("selected");
		$pageTitle.eq(0).addClass("selected");
		} else {
			$slideShow.animate({left : '-=' + 1000 + "px"}, 800);
			page = 1;
		$pageTitle.eq(0).removeClass("selected");
		$pageTitle.eq(1).addClass("selected");
		}
	}
		return false;
});

//上一页按钮事件
$("#PREV").click(function() {
	if(!$slideShow.is(":animated")) {
		if(page == 0) {
			$slideShow.animate({left : "-1000px"}, 800);
			page = 1;

		$pageTitle.eq(0).removeClass("selected");
		$pageTitle.eq(1).addClass("selected");
		} else {
			$slideShow.animate({left : '+=' + 1000 + "px"}, 800);
			page = 0;
			
		$pageTitle.eq(1).removeClass("selected");
		$pageTitle.eq(0).addClass("selected");
		}
	}
	return false;
});

//点击标题事件
$pageTitle.click(function(){
	// if(!$slideShow.is(":animated")) {
		$_this = $(this);
		var i = $pageTitle.index(this);
		if(!$_this.hasClass("selected")) {
			var j = 1 - i;
			$pageTitle.eq(j).removeClass("selected");
			$pageTitle.eq(i).addClass("selected");
			page = i;
			$slideShow.stop().animate({left :  i*-1000 +"px"},1000);
		}
	// }
	return false;
});

//鼠标在标题上的hover事件
$pageTitle.mouseover(function(){
	$_this = $(this);
	var index = $pageTitle.index(this);
	$pageTitle.removeClass("selected");
}).mouseout(function(){
	$pageTitle.eq(page).addClass("selected");
})