$("#color-list-js").on("click", "li", function(){
	// this li
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

$("#addNewColor").click(function() {
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$("#color-list-js").append($newColor);
});