$("#color-list-js li").click(function(){
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
	color = $(this).css("background-color");
});

$("#revealColorSelect").click(function(){
	changeColor();
	$("#colorSelect").toggle();
});

function changeColor() {
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();	
	$("#newColor").css("background-color", "rgb("+ r + "," + g + "," + b + ")");
}

// get the sliders value
$("input[type=range]").on("input", changeColor);