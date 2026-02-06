var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "red";
ctx.fillRect(24,24,24,24);



var mazePathX=[];
	
var mazePathY=[];

function draw(){
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.lineWidth = 2;
	for (let i = 0; i < mazePathX.length; i+=2) {
		ctx.moveTo(mazePathX[i], mazePathY[i]);
		ctx.lineTo(mazePathX[i+1], mazePathY[i+1]);
	}
	ctx.stroke();
}
draw();