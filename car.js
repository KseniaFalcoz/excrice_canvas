var canvas = document.getElementById("car");
var ctx = canvas.getContext("2d");
var pi = Math.PI;

ctx.beginPath();
ctx.fillStyle = "lightgray";
ctx.arc(150, 300, 45, 0, 2*pi, false);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "lightgray";
ctx.arc(450, 300, 45, 0, 2*pi, false);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(105, 180, 395, 75);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(180, 105, 245, 75);
ctx.fill();