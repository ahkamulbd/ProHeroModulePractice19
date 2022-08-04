// Module 19-3: Add Function Parameter, handle multiple parameter

// Calling function with variable name:

// function bringSingara(money) {
//     console.log(money);
//     console.log('ai nen Singara');
//     console.log('taka disen: ', money);
// }
// //bringSingara(100);
// var taka = 300;
// bringSingara(taka);

// Adding parameter of a function:

// function addParameters(num1, num2) {
//     var sum = num1 + num2;
//     console.log('going to add: ', sum);
// }
// addParameters();
// addParameters(10, 11);

// Another Example:

function sum(a, b, c, d, e) {
    //console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}
sum(5, 7, 11);
sum(5, 7, 11, 13, 17);
