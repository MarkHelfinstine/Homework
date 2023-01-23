let pizzaPlace = "Uno";
let numberOfToppings = 3;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);
console.log(`I'm excited to go to ${pizzaPlace} where I can get a pizza with ${numberOfToppings} toppings!`);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza");
}

//Bonus
for (i = 1; i < numberOfToppings; i++) {
  if (i % 2 == 0) {
    console.log(i);
  } else {
    console.log(" ");
  }
}

