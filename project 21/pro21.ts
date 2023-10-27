/*=============================================== PROJECT 21 ============================================================*/

//__________________________________________CREATE OBJECT ______________________________________________________________

//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const animal ={

    name : "Cat",
    age: 9,
    gender: "male",
}

// array of objects containing

let animals: Array<typeof animal> = []
animals.push(animal);

//add in array using push

animals.push({
    name : "Dog",
    age : 12,
    gender : "female",
});

let animal1 ={
    name :"Parrot",
    age : 6,
    gender : "male",
};

animals.push(animal1);

//consol.loh(animals)
animals.push({
    name : "Rabbit",
    age : 4,
    gender : "female",
})
//console.log(animals)

function forAnimals(animals : Array<typeof animal >){
    for(let i of animals){
        console.log(
            `title : ${i.name}
            age : ${i.age}
            gender : ${i.gender}
            __________________\n`)
    }
}

forAnimals(animals);