var avoString = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";
avoDivide = [];
var splitpric = avoString
.replace("for ", "for:")
.replace("for ", "for:")
.replace("for ", "for:")
.replace("for ", "for:")
 var avoDivide = splitpric.split(",");

console.log(avoDivide);

avoDivide.forEach(function(item, index){
console.log(item, index);


});
