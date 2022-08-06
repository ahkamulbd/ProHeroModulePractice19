var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
}

// Dot Notation to get Object property:

//var penCount = shoppingCart.pen;
//console.log(shoppingCart.pen);
//console.log(penCount);

// Bracket Notation to get Object property:

//keyboardCount = shoppingCart['keyboard'];
//console.log(shoppingCart['keyboard']);
//console.log(keyboardCount);

// 3rd ways to get Object property:

var properties = Object.keys(shoppingCart);
var propertiesValues = Object.values(shoppingCart);

console.log(properties);
console.log(propertiesValues);

var propertyName = 'mouse';
var propertyValues = shoppingCart[propertyName];

console.log(propertyName, propertyValues);

console.log(properties);
console.log(propertiesValues);



