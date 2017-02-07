window.onload = function(){
  document.getElementById("next").disabled = true;
	var elems = document.getElementById('clock');
	var Timer = new Stopwatch(elems);
	Timer.stop();
}


var i = 1;

function next(){
	switch(i){
	case 0:
		document.getElementById('img1').src = '../img/Darw1.jpg';
		document.getElementById('img2').src = '../img/ID1.jpg';
		document.getElementById('img3').src = '../img/SkabD1.jpg';
		break;
	case 1:
		document.getElementById('img1').src = '../img/Darw2.jpg';
		document.getElementById('img2').src = '../img/ID2.jpg';
		document.getElementById('img3').src = '../img/SkabD2.jpg';
		break;
	case 2:
		document.getElementById('img1').src = '../img/Darw3.jpg';
		document.getElementById('img2').src = '../img/ID3.jpg';
		document.getElementById('img3').src = '../img/SkabD3.jpg';
		break;
	case 3:
		document.getElementById('img1').src = '../img/Darw4.jpg';
		document.getElementById('img2').src = '../img/ID4.jpg';
		document.getElementById('img3').src = '../img/SkabD4.jpg';
		break;
	case 4:
		document.getElementById('img1').src = '../img/Darw5.jpg';
		document.getElementById('img2').src = '../img/ID5.jpg';
		document.getElementById('img3').src = '../img/SkabD5.jpg';
		break;
	case 5:
		document.getElementById('img1').src = '../img/Darw6.jpg';
		document.getElementById('img2').src = '../img/ID6.jpg';
		document.getElementById('img3').src = '../img/SkabD6.jpg';
		break;
	case 6:
		document.getElementById('img1').src = '../img/Darw7.jpg';
		document.getElementById('img2').src = '../img/ID7.jpg';
		document.getElementById('img3').src = '../img/SkabD7.jpg';
    document.getElementById("next").disabled = false;
		break;
	}
	i++;
}

var Stopwatch = function(elem, options) {

  var timer       = createTimer(),
      startButton = createButton("start", start),
      stopButton  = createButton("stop", stop),
      resetButton = createButton("reset", reset),
      offset,
      clock,
      interval;
  // default options
  options = options || {};
  options.delay = options.delay || 1;

  // append elements     
  elem.appendChild(timer);
  elem.appendChild(document.createElement("br"));
  elem.appendChild(startButton);
  elem.appendChild(document.createElement("br"));
  elem.appendChild(stopButton);
  elem.appendChild(document.createElement("br"));
  elem.appendChild(resetButton);

  // initialize
  reset();

  // private functions
  function createTimer() {
    return document.createElement("span");
  }

  function createButton(action, handler) {
    var a = document.createElement("a");
    a.href = "#" + action;
    a.innerHTML = action;
    a.addEventListener("click", function(event) {
      handler();
      event.preventDefault();
    });
    return a;
  }

  function start() {
    if (!interval) {
      offset   = Date.now();
      interval = setInterval(update, options.delay);
    }
  }

  function stop() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function reset() {
    clock = 0;
    render();
  }

  function update() {
    clock += delta();
    render();
  }

  function render() {
    timer.innerHTML = clock/1000; 
  }

  function delta() {
    var now = Date.now(),
        d   = now - offset;

    offset = now;
    return d;
  }

  // public API
  this.start  = start;
  this.stop   = stop;
  this.reset  = reset;
};