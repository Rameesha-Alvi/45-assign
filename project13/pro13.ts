//######################### PROJECT 13 ##############################

//________________________ YOUR OWN ARRAY _____________________________

//Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, 
//and make a list that stores several examples.//
// Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”/

 let favTransports : string[]=['BMW of Dewaan', 'Marcedes of Mercedes-Benz AG', 'Lexus of Toyota', ];
 for(let favtransport of favTransports){
     console.log(`I would like to own a ${favtransport}.`);
 } // for loop we use ${friend} to read the body of string seperatly

 let myFavouritVihecle : Array<[car : string, brand : string]> = [];

 myFavouritVihecle.push(["Pajero","Mitsubishi"]);
 myFavouritVihecle.push(["Heavy bike","Honda"]);
 myFavouritVihecle.push(["Bicycle","Cycle Sport.co"]);
 
 myFavouritVihecle.forEach(([car,brand]) => {
    console.log(`I would like to own a ${car} of ${brand}.`)
 }
 );
 // :)




 
 

