// // Ex 1

// function addNum(number1, number2) {
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     return sum;
// }
// var total = addNum(80, 20);
// console.log('Total = ', total);

// // Ex 2

// function bringSingara(money) {
//     var singaraPrice = 10;
//     var quantity = money / singaraPrice;
//     return quantity;
// }
// var singaraQty = bringSingara(200);
// console.log('Singara Qty : ', singaraQty);

// Ex 3

function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var myTaka = 150;
var singaraQty = bringSingara(myTaka);
console.log('Singara Qty: ', singaraQty);