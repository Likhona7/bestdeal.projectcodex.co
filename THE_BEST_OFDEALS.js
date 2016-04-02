var avoString = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";

//avoDivide = [];
newAvoDivide = [];
pricePerAvo = [];
var splitpric = avoString.replace(/ for R/g, " ");
var avoDivide = splitpric.split(", ");
//console.log(avoDivide);
avoDivide.forEach(function(avoString) {
  newAvoDivide.push(avoString.split(" "));
});
//console.log(newAvoDivide);
newAvoDivide.forEach(function(item) {
  var price = item[1]
  var quantity = item[0]
  pricePerAvo.push(Number((price / quantity).toFixed(2)));
});
var min = Math.min.apply(null, pricePerAvo),max = Math.max.apply(null, pricePerAvo);
console.log(pricePerAvo);console.log(min, "Cheapest deal");
console.log(max, "Most expensive deal");

var numberArray=[1,2,3,4,5], thisTotal=0,thisAverage=0;

// add elements of array together
for(var i=0;i<pricePerAvo.length;i++)
 {thisTotal+=pricePerAvo[i];}
// calculate average
thisAverage=(thisTotal/pricePerAvo.length);
// display result
console.log(thisAverage,"Average price");
