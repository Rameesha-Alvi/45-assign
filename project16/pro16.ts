/* ================================= PROJECT 16 ===================================================================================*/

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guestList = ["Maria","Sania","Hermione"];

//• Start with your program from Exercise 15. Add a print statement to the end of your program 
//informing people that you found a bigger dinner table.

for(let guest of guestList)
{console.log(`Hi ${guest} im happy to inform you that i have found a bigger dinner table for us Hurray! `);}

//• Add one new guest to the beginning of your array.

let newInvitedGuest : string ="Michelle";

guestList.unshift(newInvitedGuest)
//console.log(guestList)

//• Add one new guest to the middle of your array. 
let middleGuest : string = "Sania"
let middleIndex : number = Math.floor(guestList.length / 2)
guestList.splice(middleIndex, 0, middleGuest)
//console.log(guestList)

//• Use append() to add one new guest to the end of your list.

let endGuest : string = "Maria"
guestList.push(endGuest)
//console.log(guestList)

//• Print a new set of invitation messages, one for each person in your list.

console.log("message for current guestList")
for (let guest of guestList) {
    console.log(`Dear friend ${guest} you are invited for a dinner at 9:00 am sharp. Thankyou!`)
}
console.log(guestList) 

export{guestList}