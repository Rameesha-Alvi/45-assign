//========================================= PROJEST 22 =================================================================================================

//______________________________________________________ COMAPRITIVE OPERATERS __________________________________________________________--------------------------------------------------------------------------------

//Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen.
// Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
let numbers: number[] = [1, 2, 3, 4, 5];

let invalidIndexNumber = numbers[10];

console.log(invalidIndexNumber);

function creatFruit(
    name : "string",
    colour : "string",
    taste : "string",

){
    return{
        name,
        colour,
        taste,
    };
}
const fruits = [
   creatFruit("Bannana","yellow","sweet"),
    creatFruit("orange","orange","citrustype"),
    creatFruit("grapes","purplishgreen","sweet"),
    creatFruit("strwbarry","redishpink","citrussweet"),]
/* const cars = [
    car("Mehran","white","VXR"),
    car("Cultus","silver","VXR"),
    car("BMW","Black","SUV"),
    car("Mercedes-Benz","black","Limousine")
    car("Toyot Corolla","grey","Hetchback"),
]
 */
// Access an individual index

const invalidIndex = 10;
                                                
// only fiv element in array so this will couse error

console.log(`fruit at index ${invalidIndex}:`, fruits[invalidIndex]);

//print cars

fruits.forEach
    ((fruit)  =>{
    console.log(`name : ${fruit.name},
    colour : ${fruit.colour},
    model : ${fruit.taste}`)
}
);



export{}

