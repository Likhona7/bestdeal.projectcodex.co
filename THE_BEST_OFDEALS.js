var avoString = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";

avoDivide = [];
newAvoDivide = [];
var splitpric = avoString.replace(/ for R/g," ");
var avoDivide = splitpric.split(", ");
//console.log(avoDivide);

avoDivide.forEach(function(avoString) {
newAvoDivide.push(avoString.split(" "));
//console.log(avo);
 });
 console.log(newAvoDivide);
