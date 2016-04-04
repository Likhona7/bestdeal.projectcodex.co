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
    //convert array string to numbers
  pricePerAvo.push(Number((price / quantity).toFixed(2)));
});
var min = Math.min.apply(null, pricePerAvo),
  max = Math.max.apply(null, pricePerAvo);
console.log(pricePerAvo);

thisTotal = 0, thisAverage = 0;

// add elements of array together
for (var i = 0; i < pricePerAvo.length; i++) {
  thisTotal += pricePerAvo[i];
}

// calculate average
thisAverage = (thisTotal / pricePerAvo.length).toFixed(2);
// display result
console.log("totalPrice : " +"R",thisTotal);
console.log("R"+min, "Cheapest deal");
console.log("R"+max, "Most expensive deal");
console.log(thisAverage, "Average price");
