"use strict";
//============================================ PROJECT 44 =================================================================================
//________________________________________ SANDWICHES _____________________________________________________
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.
function make_sandwich(...items) {
    console.log("Sandwich order:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
make_sandwich("Beef", "Cheese");
make_sandwich("Mutton", "Lettuce", "Tomato");
make_sandwich("Chicken", "Bacon", "Avocado", "Mayo");
