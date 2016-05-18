function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext("2d");
	//canvas.fillRect(50,50,250,200); //填滿矩形
	//canvas.clearRect(100,100,50,50); //橡皮擦
	//canvas.strokeRect(50,50,250,200); //矩形邊框
	canvas.rect(50,50,250,200);
	canvas.stroke();
	//canvas.fill();
	
}


window.addEventListener('load', doFirst, false);