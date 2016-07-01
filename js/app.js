var color = $(".selected").css("background-color");
var $canvas = $("canvas");
// Grab the first element in the array of canvas elements
// It's necessary to grab a html element because of the method to be called on it
// document.getElementByTagName("canvas")[0]
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

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

$canvas.mousedown(function(e) {
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e){
	if (mouseDown) {
		// Defines the beginning of the path
		context.beginPath();
		// Define where to start the path
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		// Draws a line
		context.lineTo(e.offsetX, e.offsetY);
		context.strokeStyle = color;
		context.stroke();
		lastEvent = e;
	}

}).mouseup(function(){
	mouseDown = false;
}).mouseleave(function(){
	// if the mouse leaves the canvas, it triggers mouseup, correcting bug
	$canvas.mouseup();
});
