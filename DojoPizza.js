function pizzaOven(crustType, sauceType, cheeses, ha) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.ha = ha;
    return pizza;
}
let homeMade = pizzaOven("Loaded bacon cheese", "light bbq", "mozzorella", "ham, bacon, chicken");
console.log(homeMade);

function pizzaOven(crunchytype, saycytype, cheesytyoe, otpingtype) {
    let pizza = {};
    pizza.crunchytype = crunchytype;
    pizza.saycytype = saycytype;
    pizza.cheesytyoe = cheesytyoe;
    pizza.otpingtype = otpingtype;
    return pizza;
}
let homeMade = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(homeMade);

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
let homeMade = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(homeMade);

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
let homeMade = pizzaOven("stuffed crust", "light marinara", ["mozzarella", "feta"], ["ham", "meatballs", "bacon"]);
console.log(homeMade);

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
let homeMade = pizzaOven("hand tossed", "bbq", ["mozzarella", "cheddar"], ["bacon", "steak", "chicken"]);
console.log(homeMade);


function randomPizza() {
    let cheese = ["mozzarella", "cheddar", "feta"];
    let sauce = ["traditional", "bbq"];
    let toppings = ["ham", "chicken", "pepper"];
    let crust = ["deep dish", "stuffed crust"];
    let pizza = {};
      pizza.crustType = crustType;
     pizza.sauceType = sauceType;
     pizza.cheeses = cheeses;
     pizza.toppings = toppings; 
    let randomValue = cheese[math.floor(math.random() * cheese.length)];
    console.log(randomValue);
    return pizza;
}
let pick = randomPizza();
let pick2 = randomPizza();
console.log(choices)