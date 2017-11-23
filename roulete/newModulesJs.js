var view = (function(){
var timer;
var button;
var off;
var array;
var paint;
var band;
var delay;
delay = getRandomArbitary(10000, 11001);
function initView(){
    initControls();
    initOnclick();
}
function initControls(){
    button = document.getElementById(startRouleteId);
    
    array = document.getElementsByTagName(imgId);
    paint = document.getElementById(bandId);
    band = document.getElementById(bandId);
}
function initOnclick(){
    button.onclick = function(){
        startRoulete();
        Add();
    }
}
function getRandomArbitary(min, max)
{
  return Math.random() * (max - min) + min;
}

function spinRoulete(){
    timer = setTimeout(startRoulete, 700);
}
function offSpinRoulete() {
           clearTimeout(timer);
       }
off = setTimeout(offSpinRoulete, delay);


function startRoulete(){
    
    left -=  128;
	if ( left < -2500) {
        left = 0;
        }
    band.style.left = left +'px';
    var z = left / -128;
    var invisibility= button.disabled = true;
    spinRoulete();
       
}
        function Add() {
        for(var i = 0; i <19; i++){
        var r = Math.floor(Math.random()*5);
            if(r!=0){
            var box = document.createElement('div');
            box.setAttribute('class','imgbox');
            var o = document.createElement('img');
            o.src = "images/"+ r + ".png";
            band.appendChild(box);
            box.appendChild(o);}
            else{
                r = Math.floor(Math.random()*5);
                var box = document.createElement('div');
                box.setAttribute('class','imgbox');
                var o = document.createElement('img');
                o.src = "images/"+ r + ".png";
                band.appendChild(box);
                box.appendChild(o);}
             
            }
    }
    function roll() {
        startRoulete();
        Add();
    }
return { initView: initView}
})()


   

