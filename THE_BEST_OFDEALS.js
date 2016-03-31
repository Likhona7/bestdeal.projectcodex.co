var avoString = "1 for R3,2 for R7,3 for R10,5 for R14.50.";

avoDivide = [];
var splitpric = avoString
.replace("for ", ":").replace("for ", ":")
.replace("for ", ":").replace("for ", ":")
.replace("R", " ").replace("R", " ")
.replace("R", " ").replace("R", " ")
//console.log(avoString)
var avoDivide = splitpric.split(",");
//console.log(avoDivide);
// // console.log(avoDivide);
 avoDivide.forEach(function(item){
 console.log(item);

 });
