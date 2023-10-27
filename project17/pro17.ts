//================================== PROJECT 17 =================================================================================

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16. 
//Add a new line that prints a message saying that you can invite only two people for dinner.

let guestList : string[] = [ 'ASMA', 'Nazia', 'Maheen', 'Madeeha', 'Haniya', 'Manahil' ]
console.log
("It is to inform you that due to some circumstances,\ni can only invite two guest for dinner. \nsorry for inconvinience")

//• Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

console.log("\n Removing Guest form List")
while(guestList.length>2){
    let removeGuest = guestList.pop()
    console.log(`Sorry! ${removeGuest} due to some circumstances you are not invited to dinner`)
}

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

console.log("\nInviting Remaining Two Guest")
for(let guest of guestList){
    console.log(`Hi dear, ${guest} you are still invited to dinner.`)
}

//• Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program.

console.log("\n Showing Empty Guest List")
guestList.pop()
guestList.pop()
console.log(`Guestlist after dinner`,guestList)