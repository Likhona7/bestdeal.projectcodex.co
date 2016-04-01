var avoString = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";

avoDivide = [];
newAvoDivide = [];
pricePerAvo = [];
var splitpric = avoString.replace(/ for R/g," ");
var avoDivide = splitpric.split(", ");
avoDivide.forEach(function(avoString) {
newAvoDivide.push(avoString.split(" "));
 });
newAvoDivide.forEach(function(item){
var price = item[1]
var quantity = item[0]
pricePerAvo.push(Number((price / quantity).toFixed(2)));

});
var min = Math.min.apply(null, pricePerAvo),
    max = Math.max.apply(null, pricePerAvo);


    console.log(pricePerAvo);
    console.log(min,"Cheapest deal");
    console.log(max,"Most expensive deal");
