var setsBalloon = "4 sets of red, 3 sets of blue, and 3 sets of yellow.";
////////////////////////////////////////////////////////////////////////////
var priceEach = "R4 for red, R5 for blue, and  R5.50 for yellow.";
newPriceEach = [];
latestPriceEach = [];
////////////////////////////////////////////////////////////////////
newSetsBalloon = [];
latestSetsBalloon = [];
var costToInflateAll = [];
var splitpric = setsBalloon.replace(/ sets of/g, " ").replace(/ and /g, " ")
  .replace(/R /g, " ").replace(/R/g, " ").replace("R", " ");
var setsBalloon = splitpric.split(", ");
////////////////////////////////////////////////////////////////////////////
var splitpric = priceEach.replace(/R/g, "").replace(/for /g, "").replace(/ and /g, "");
var priceEach = splitpric.split(", ")
  //console.log(priceEach);
  //console.log(setsBalloon);
setsBalloon.forEach(function(setsBalloon) {
  newSetsBalloon.push(setsBalloon.split(" "));
});
/////////////////////////////////////////////////////////////////////
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
});
//////////////////////////////////////////////////////////////////////////////
newPriceEach.forEach(function(item) {
  var price = Number(item[0])
  var setcolor = Number(item[1])
  var setcolor = 0;
  latestPriceEach.push(Number((price + setcolor).toFixed(2)));
});
//console.log(latestPriceEach);
var total = latestSetsBalloon[0] * 4 + latestSetsBalloon[1] * 5 + latestSetsBalloon[2] * 5.50;
latestSetsBalloon.forEach(function(item) {
  costToInflateAll.push(item * 2);
});
var total2 = costToInflateAll[0] + costToInflateAll[1] + costToInflateAll[2];
var total3 = latestSetsBalloon[0] + latestSetsBalloon[1] + latestSetsBalloon[2];
var total4 = total3 - 25;
total5 = latestSetsBalloon[0]-5 +latestSetsBalloon[1]-1 + latestSetsBalloon[2]-3;
console.log(total5)



console.log(latestPriceEach, "Cost Of Each Balloon");
console.log(latestSetsBalloon, "Each Color Order");
console.log(costToInflateAll, "inflated Cost *R2");
console.log("Total Inflated Cost:", "R" + total2)
console.log("Total BAlloon Cost:", "R" + total);
console.log("Available Balloons Are:",total3 );
console.log("Spare Balloons Left:",total4);
