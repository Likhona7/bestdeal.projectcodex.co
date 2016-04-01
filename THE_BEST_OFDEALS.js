var avoString = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";

avoDivide = [];
newAvoDivide = [];
var splitpric = avoString.replace(/ for R/g," ");
var avoDivide = splitpric.split(", ");
avoDivide.forEach(function(avoString) {
newAvoDivide.push(avoString.split(" "));
 });
newAvoDivide.forEach(function(item){
var price = item[1]
var quantity = item[0]
var pricePerAvo = Number((price / quantity).toFixed(2));


console.log(pricePerAvo);
});
