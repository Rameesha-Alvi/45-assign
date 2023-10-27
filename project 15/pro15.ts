//######################### PROJECT 15 ################################

//_______________________ Changing list __________________________________

//Changing Guest List:
// You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.•
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.


let guestList = ["Nazia","Madeeha","Huma"];
console.log(guestList[2]);

//• Modify your list, 
//replacing the name of the guest who can’t make it with 
//the name of the new person you are inviting.

let newGuestList = ["Nazia","Madeeha"];
newGuestList.push("Haniya");
console.log(newGuestList);


//• Print a second set of invitation messages, 
//one for each person who is still in your list.

function invite( firstName : string)
{console.log(`Dear ${firstName} you are invited on Dinner at my House at 9:00pm.`);}
 

invite(`Nazia`);
invite(`Madeeha`);
invite(`Haniya`);


export{invite}
