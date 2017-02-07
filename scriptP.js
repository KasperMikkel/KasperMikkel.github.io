var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var i = 0;

function next(){
	switch(i){
	case 0:
		document.getElementById('img1').src = 'img/dino.jpg';
		document.getElementById('img2').src = 'img/dino2.jpg';
		document.getElementById('img3').src = 'img/cyano.jpg';
		break;
	case 1:
		document.getElementById('img1').src = 'img/homo_ruf.jpg';
		document.getElementById('img2').src = 'img/fossil1.jpg';
		document.getElementById('img3').src = 'img/primate.jpg';
		break;
	case 2:
		document.getElementById('img1').src = 'img/dino2.jpg';
		document.getElementById('img2').src = 'img/dino.jpg';
		document.getElementById('img3').src = 'img/primate2.jpg';
		i = -1;
		break;
	}
	i++;
}