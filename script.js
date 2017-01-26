var i = 1;

window.onload = function() {
    //prompt("Hello", "");
    var x = document.getElementById("44");
    x.onmousedown = function(){
        for(var ii = 0; ii < i; ii++) {
            alert("Don't press me!!")
            setCookie((i.toString() + "cookie" + ii.toString()), ii**i, 0)
        }
        i++;
    }

};

function toBottom(){
    //window.scrollTo(0,document.body.scrollHeight + 20);
    var element = document.getElementById('bt');
    element.scrollIntoView();
}

function Accept(){

	if(getCookie("cookieconsent_status") !== "dismiss"){
	window.cookieconsent.initialise({
	  "palette": {
	    "popup": {
	      "background": "#252e39"
	    },
	    "button": {
	      "background": "#14a7d0"
	    }
	  },
	  onStatusChange: function(status) {
		console.log(getCookie("acc"));
    }
	})}};

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";}

function setCookie(cname, cinfo, cdays) {
    var d = new Date();
    d.setTime(d.getTime() + (cdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cinfo + ";" + expires + ";path=/";
}