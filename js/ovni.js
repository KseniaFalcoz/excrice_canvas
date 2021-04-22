var canvas = document.getElementById("ovni");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "white";
ctx.moveTo(170, 240);
ctx.quadraticCurveTo(250, 20, 330, 240);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "lightgray";
ctx.moveTo(100, 240);
ctx.quadraticCurveTo(250, 140, 400, 240);
ctx.fill();

ctx.moveTo(100, 240);
ctx.quadraticCurveTo(250, 340, 400, 240);
ctx.fill();