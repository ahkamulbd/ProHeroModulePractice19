/*
2) Write a function called make_avg() which will take an three integers and return the 
average of those values.

*/

function make_avg(x, y, z) {
    var average = (x + y + z) / 3;
    return average;
}
var resultAverage = make_avg(12, 16, 30);
console.log(resultAverage.toFixed(1));