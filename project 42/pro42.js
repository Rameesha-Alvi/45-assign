"use strict";
//============================================== PROJECT 42 ============================================================
//Great Magicians: Start with a copy of your program from Exercise 41. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.
console.log("List of Megicians:");
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
show_magicians(magicians);
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
function show_magicians1(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
const magician1s = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
make_great(magicians);
show_magicians1(magicians);
