"use strict";
//######################### PROJECT 15 ################################
Object.defineProperty(exports, "__esModule", { value: true });
exports.invite = void 0;
//_______________________ Changing list __________________________________
//Changing Guest List:
// You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.•
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let guestList = ["Maria", "Sania", "Afeefa"];
console.log(guestList[2]);
//• Modify your list, 
//replacing the name of the guest who can’t make it with 
//the name of the new person you are inviting.
let newGuestList = ["Maria", "Sania"];
newGuestList.push("Hermione");
console.log(newGuestList);
//• Print a second set of invitation messages, 
//one for each person who is still in your list.
function invite(firstName) { console.log(`Dear ${firstName} you are invited on Dinner at my House at 9:00pm.`); }
exports.invite = invite;
invite(`Maria`);
invite(`Sania`);
invite(`Hermoine`);
