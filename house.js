var canvas = document.getElementById("house");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "rosybrown";
ctx.moveTo(130, 180);
ctx.lineTo(370, 180);
ctx.lineTo(250, 50);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "lightsteelblue";
ctx.fillRect(130, 180, 240, 250);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "lightslategray";
ctx.fillRect(150, 200, 60, 60);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "lightslategray";
ctx.fillRect(290, 200, 60, 60);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "lightslategray";
ctx.fillRect(210, 320, 80, 110);
ctx.fill();