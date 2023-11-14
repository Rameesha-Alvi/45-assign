//############################ PROJECT 12 ##############################

//___________________________ GREETINGS _____________________________

//Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.


let names = ["1.Sagan,","2.Schmidt,","3.Medvedev,","4.Olga,"];
let message = ("I would like to thank you for our solid friendship .");
console.log(names[0],message);
console.log(names[1],message);
console.log(names[2],message);
console.log(names[3],message);

// second way of greetings

let friends : string[]= ['Sagan', 'Schmidt', 'Medvedev', 'Olga'];
for(let friend of friends){
    console.log(`Hi ${friend}, hope you are all fine and happy.`);
} // for loop we use ${friend} to read the body of string seperatly

