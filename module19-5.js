/*
Function Syntax:
function functionName (parameters){
    // Function Body
    // return
} 
var returnValue = functionName (parameters value)
*/

// Ex 1
// function getAverage(assignment1, assignment2, assignment3) {
//     const total = assignment1 + assignment2 + assignment3;
//     const average = total / 3;
//     return average;
// }
// const assignment1Marks = 55;
// const assignment2Marks = 49;
// const assignment3Marks = 60;

// var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
// console.log('My Average Marks so far: ', myAverage.toFixed(2)); 

// Ex 2

function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
const result1 = add(12, 13);
const result2 = add(35, 7);
const finalResult = add(result1, result2);

console.log(finalResult);