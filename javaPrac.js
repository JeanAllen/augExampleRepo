/* function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
let homeMade = pizzaOven("Loaded bacon cheese", "light bbq", "mozzorella", "ham, bacon, chicken");
console.log(homeMade);

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
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
console.log(homeMade); */


function randomPizza() {
    let cheese = ["mozzarella", "cheddar", "feta", "pepper jack"];
    let sauce = ["traditional", "bbq", "marinara", "ranch"];
    let toppings = ["ham", "chicken", "pepper", "brocoli"];
    let crust = ["deep dish", "stuffed crust", "hand tossed"];
    let pizza = {};
    pizza.crustType = crust[Math.floor(Math.random() * crust.length)];
    pizza.sauceType = sauce[Math.floor(Math.random() * sauce.length)];
    pizza.cheeses = cheese[Math.floor(Math.random() * cheese.length)];
    pizza.toppings = toppings[Math.floor(Math.random() * toppings.length)];
    return pizza;
}
let pick = randomPizza();
console.log(pick);