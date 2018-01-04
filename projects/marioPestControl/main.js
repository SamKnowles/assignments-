var goombaPrice = 5;
var bobombPrice = 7;
var cheepCheepPrice = 11;
var gom = document.getElementById("gom");
var bob = document.getElementById("bob");
var cheep = document.getElementById("cheep");

gom.oninput = function () {
    var gQnt = document.getElementById("gom").value;    
    var total = goombaPrice * gQnt;
    document.getElementById("goomtot").innerHTML = total;    
}

bob.oninput = function () {
    var bQnt = document.getElementById("bob").value;    
    var total = bobombPrice * bQnt;
    document.getElementById("bobtot").innerHTML = total;    
}

cheep.oninput = function () {
    var cQnt = document.getElementById("cheep").value;
    var total = cheepCheepPrice * cQnt;
    document.getElementById("cheeptot").innerHTML = total;    
}

window.oninput = function () {
    var goom = document.getElementById("goomtot").innerHTML;
    var boob = document.getElementById("bobtot").innerHTML;
    var chep = document.getElementById("cheeptot").innerHTML;
    var done = +goom + +boob + +chep;
    document.getElementById("totally").innerHTML = done;
}


