var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

//console.log(shoppingCart);

var penCount1 = shoppingCart.pen;
//console.log(penCount1);

var penCount2 = shoppingCart['pen'];
//console.log(penCount2);

var properties = Object.keys(shoppingCart);
console.log(properties);

var propertyValues = Object.values(shoppingCart);
//console.log(propertyValues);

var propertyName = 'keyboard';
var propertyValue = shoppingCart[propertyName];
//console.log(propertyValue);

shoppingCart.mouse = 15;

console.log(shoppingCart);
