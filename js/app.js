$("#color-list-js li").click(function(){
	$("#color-list-js > li").removeClass("selected");
	$(this).toggleClass("selected");
});

$("#revealColorSelect").click(function(){
	$("#colorSelect").toggle();
});