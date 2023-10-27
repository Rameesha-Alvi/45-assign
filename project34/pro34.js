"use strict";
//============================================ PROJECT 34 =================================================================
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,/
const favouritPizzas = ["Pepperoni", "Euro", "Fajita"];
// and then use a for loop to print the name of each pizza.
console.log(" My favourit pizzas are:");
for (let i = 0; i < favouritPizzas.length; i++) {
    console.log(favouritPizzas[i]);
}
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
console.log("\nI like these Pizzas: ");
for (let i = 0; i < favouritPizzas.length; i++) {
    console.log(`\n # I like ${favouritPizzas[i]} Pizza`);
}
//• Add a line at the end of your program, outside the for loop, 
// to that states how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
// such as I really love pizza!
console.log("\nI really Love Pizza");
/*let pizzas: string[] = ["Pepperoni", "Margherita", "Hawaiian"];

for (let pizza of pizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");*/
