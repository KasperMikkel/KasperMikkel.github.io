window.onload = function(){
	initializeClock('clockdiv', deadline);
}


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
		document.getElementById('img1').src = 'img/homo_ruf.jpg';
		document.getElementById('img2').src = 'img/fossil1.jpg';
		document.getElementById('img3').src = 'img/primate.jpg';
		break;
	case 3:
		document.getElementById('img1').src = 'img/homo_ruf.jpg';
		document.getElementById('img2').src = 'img/fossil1.jpg';
		document.getElementById('img3').src = 'img/primate.jpg';
		break;
	case 4:
		document.getElementById('img1').src = 'img/homo_ruf.jpg';
		document.getElementById('img2').src = 'img/fossil1.jpg';
		document.getElementById('img3').src = 'img/primate.jpg';
		break;
	case 5:
		document.getElementById('img1').src = 'img/homo_ruf.jpg';
		document.getElementById('img2').src = 'img/fossil1.jpg';
		document.getElementById('img3').src = 'img/primate.jpg';
		break;
	case 6:
		document.getElementById('img1').src = 'img/homo_ruf.jpg';
		document.getElementById('img2').src = 'img/fossil1.jpg';
		document.getElementById('img3').src = 'img/primate.jpg';
		break;
	case 7:
		document.getElementById('img1').src = 'img/homo_ruf.jpg';
		document.getElementById('img2').src = 'img/fossil1.jpg';
		document.getElementById('img3').src = 'img/primate.jpg';
		break;
	case 8:
		document.getElementById('img1').src = 'img/homo_ruf.jpg';
		document.getElementById('img2').src = 'img/fossil1.jpg';
		document.getElementById('img3').src = 'img/primate.jpg';
		break;
	case 9:
		document.getElementById('img1').src = 'img/dino2.jpg';
		document.getElementById('img2').src = 'img/dino.jpg';
		document.getElementById('img3').src = 'img/primate2.jpg';
		i = -1;
		break;
	}
	i++;
}

var deadline = 'February 8 2017 10:30:00';

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    clock.innerHTML = 'days: ' + t.days + '<br>' +
                      'hours: '+ t.hours + '<br>' +
                      'minutes: ' + t.minutes + '<br>' +
                      'seconds: ' + t.seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}