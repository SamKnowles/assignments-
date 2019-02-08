

// function getPrice(type, unitPrice) {
//     var input = document.getElementById('num-' + type);
//     if(input.value !== '') {
//         return unitPrice * Number(input.value);
//     } else {
//         return 0;
//     }
// }

// function setPrice(type, unitPrice) {
//     var span = document.getElementById(type + '-price')
//     span.innerHTML = getPrice(type, unitPrice) + ' coins';
// }

// function setTotal() {
//     var totalPrice = getTotalPrice();
//     var totalPriceSpan = document.getElementById('total-price');
//     totalPriceSpan.innerHTML = '$' + totalPrice + '.00';
// }

// function getTotalPrice() {
//     var goombaSubtotal = getPrice('goombas', 5);
//     var bobombSubtotal = getPrice('bob-ombs', 7);
//     var cheepCheepSubtotal = getPrice('cheep-cheeps', 11);
//     return goombaSubtotal + bobombSubtotal + cheepCheepSubtotal;
// }

// document.oninput = function(event) {
//     console.log(event);
//     if(event.srcElement.id === 'num-goombas'){
//         setPrice('goombas', 5);
//         setTotal();
//     } else if (event.srcElement.id === 'num-bob-ombs') {
//         setPrice('bob-ombs', 7);
//         setTotal();
//     } else if (event.srcElement.id === 'num-cheep-cheeps') {
//         setPrice('cheep-cheeps', 11);
//         setTotal();
//     }
// }

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

// INDIVIDUAL PRICE
// find out how many have been caught
// multiply how many have been caught by its price
// display price in span
