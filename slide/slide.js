var name = "";
var i = 2;
function init(n){
	name = n;
}
window.onload = function(){

   window.setInterval(function () {
   	document.getElementById('Slide').src = "../img/" + name + i + ".jpg";
   	i++;
   	if (i > 3)
   		i = 1;
    }, 3000);

}