var c_canvas = document.getElementById("c");
var context = c_canvas.getContext("2d");

for (var x = 0.5; x < 500; x += 10) {
	context.moveTo(x, 0);
	context.lineTo(x, 375);
}

for (var y = 0.5; y < 375; y += 10) {
	context.moveTo(0, y);
	context.lineTo(500, y);
}
context.strokeStyle = "#CCC";
context.stroke();

// start a new path with new color and line
context.beginPath(); 

context.lineTo(0, 40);
// arows ">"
context.lineTo(500, 40);
context.moveTo(495, 35);
context.lineTo(500, 40);
context.lineTo(495, 45);
context.moveTo(60, 0);
context.lineTo(60, 0);
// arows ">"
context.lineTo(60, 375);
context.moveTo(65, 370);
context.lineTo(60, 375);
context.lineTo(55, 370);

context.fillStyle = "#000";
context.font = "bold 12px sans-serif";
context.fillText("x", 0, 37);
context.fillText("y", 47, 10);

context.fillStyle = "red";
context.font = "bold 10px sans-serif";
context.textBaseline = "top";
context.fillText("( 0 , 0 )", 24, 25);

context.fillStyle = "black";
context.font = "bold 10px sans-serif";
context.textBaseline = "bottom";
context.fillText("( 500 , 375 )", 435, 365);


// color for th (Verticale & Horisontal) line
context.strokeStyle = "#212121";
context.stroke();
