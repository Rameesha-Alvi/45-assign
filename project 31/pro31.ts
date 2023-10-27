//========================================= PROJECT 31 =========================================================

//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.

let username: string[] = ["admin", "Asma", "Armaan", "Maheen", "Mishal"];

if (username.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let guest of username) {
    if (guest === 'admin') {
      //console.log('Hello admin, would you like to see a status report?');
    } else {
      //console.log(`Hello ${guest}, thank you for logging in again.`);
    }
  }
}
    console.log("Removing whole list to print the correct message");
username = [];

if (username.length === 0) {
  console.log("\nWe need to find some users!");
}