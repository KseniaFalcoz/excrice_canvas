var canvas = document.getElementById("house");
var ctx = canvas.getContext("2d");




ctx.beginPath();
ctx.fillStyle = "lightsteelblue";
ctx.fillRect(130, 180, 240, 300);
ctx.fill();
ctx.closePath();