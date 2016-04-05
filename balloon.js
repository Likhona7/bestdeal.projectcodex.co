var setsBalloon = "4 sets of red, 3 sets of blue, and 3 sets of yellow.";
////////////////////////////////////////////////////////////////////////////
var priceEach = "R4 for red, R5 for blue, and R5.50 for yellow.";
newPriceEach = [];
latestPriceEach = [];
////////////////////////////////////////////////////////////////////
newSetsBalloon = [];
latestSetsBalloon = [];
var splitpric = setsBalloon.replace(/ sets of/g, " ").replace(/ and /g, " ");
// .replace(/ and /g, " ");;
var setsBalloon = splitpric.split(", ");
////////////////////////////////////////////////////////////////////////////
var splitpric = priceEach.replace(/ for /g, " ").replace(/ R/g, " ")
  .replace(/ and /g, " ").replace(/ " "/g, " ");
var priceEach = splitpric.split(", ")
  // console.log(priceEach);
  //console.log(setsBalloon);
setsBalloon.forEach(function(setsBalloon) {
  newSetsBalloon.push(setsBalloon.split(" "));
});
///////////////////////////////////////////////////////////////////////
priceEach.forEach(function(priceEach) {
  newPriceEach.push(priceEach.split(" "));
});
//console.log(newPriceEach);
//console.log(newSetsBalloon);

//console.log(newSetsBalloon);
//console.log(newPriceEach);
newSetsBalloon.forEach(function(item) {
  var sets = Number(item[0])
  var colors = Number(item[1])
  var colors = 3;
  //convert array string to numbers
  latestSetsBalloon.push(Number((sets * colors).toFixed(2)));
});console.log(latestSetsBalloon);
//////////////////////////////////////////////////////////////////////////////
 newPriceEach.forEach(function(item) {
 var pricsets = Number(item[0])
 var color = Number(item[1])
 var pricsets = 0;
// console.log(item[0])
 latestPriceEach.push(Number((pricsets + color).toFixed(2)));
 //console.log(pricsets);
 console.log(pricsets);
  });
//  console.log(latestPriceEach);


 //console.log(latestPriceEach);


 // thisTotal = 0, thisAverage = 0;
 // // add elements of array together
 // for (var i = 0; i < pricsets.length; i++) {
 //   thisTotal += pricePerAvo[i];
