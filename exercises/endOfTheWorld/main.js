var upgradeTime = 10;
var seconds = upgradeTime;
function timer() {
    var days        = Math.floor(seconds/24/60/60);
    var hoursLeft   = Math.floor((seconds) - (days*86400));
    var hours       = Math.floor(hoursLeft/3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
    var minutes     = Math.floor(minutesLeft/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds; 
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (days < 10) {
        days = '0' + days;
    }
    document.getElementById('timerDisplay').innerHTML = days + ":" + hours + ":" + minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('timerDisplay').innerHTML = "The end of the world has come upon us";
        document.getElementById("timerDisplay").style.fontSize = "33px";        
        document.getElementById('container').style.background = "black";
        document.getElementById('theEndMessage').innerHTML = "";
        stopColor();
        document.getElementById('theBod').style.background = "black";
        document.getElementById("timerDisplay").style.border = "none";
        document.getElementById("theTop").innerHTML = "";
    } 
    else {
        seconds--;
    }
}
var countdownTimer = setInterval('timer()', 1000);

var myVar = setInterval(function() {
    setColor() }, 300);

function setColor() {
    var x = document.body;
    x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "blue" : "yellow";
}

function stopColor () {
    clearInterval(myVar);
}


