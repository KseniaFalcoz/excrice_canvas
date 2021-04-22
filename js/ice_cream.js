var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "burlywood";
ctx.moveTo(50, 160);
ctx.lineTo(200, 160);
ctx.lineTo(125, 400);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "hotpink"; // quadratic Bézier curve
ctx.moveTo(50, 160);
ctx.quadraticCurveTo(160, 0, 200, 160);
ctx.fill();