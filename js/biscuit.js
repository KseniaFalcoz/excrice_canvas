var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var pi = Math.PI;

ctx.beginPath(); // la tête
ctx.fillStyle = "peru";
ctx.arc(300, 100, 65, 0, 2*pi, false);
ctx.fill();

ctx.fillRect(155, 145, 290, 40); // les bras

ctx.fillRect(240, 185, 120, 200);  // le corps

ctx.beginPath(); // mains
ctx.arc(155, 165, 20, 0, 2*pi, false);

ctx.arc(445, 165, 20, 0, 2*pi, false);
ctx.fill();

ctx.beginPath(); // pieds
ctx.arc(265, 380, 25, 0, 2*pi, false);
ctx.fill();

ctx.arc(335, 380, 25, 0, 2*pi, false);
ctx.fill();

ctx.beginPath(); // entre les jambes
ctx.fillStyle = "white";
ctx.arc(300, 320, 10, 0, 2*pi, false);
ctx.fill();

ctx.fillRect(290, 320, 20, 65);
ctx.fill();

ctx.beginPath(); // les yeux
ctx.arc(275, 85, 12, 0, 2*pi, false);
ctx.fill();

ctx.arc(325, 85, 12, 0, 2*pi, false);
ctx.fill();

ctx.beginPath();  // les sourcils
ctx.strokeStyle = "white";
ctx.moveTo(260, 65);
ctx.quadraticCurveTo(275, 50, 290, 65);

ctx.moveTo(310, 65);
ctx.quadraticCurveTo(325, 50, 340, 65);
ctx.stroke();

ctx.beginPath();  // le sourire
ctx.strokeStyle = "red";
ctx.lineWidth = 4; //  épaisseur 4px
ctx.moveTo(270, 115);
ctx.quadraticCurveTo(300, 125, 330, 115);

ctx.moveTo(270, 115);
ctx.quadraticCurveTo(300, 145, 330, 115);
ctx.stroke();

ctx.beginPath(); // les boutons
ctx.fillStyle = "purple";
ctx.arc(300, 200, 10, 0, 2*pi, false);
ctx.fill();

ctx.arc(300, 230, 10, 0, 2*pi, false);
ctx.fill();