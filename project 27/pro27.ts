//================================================== PROJECT 27 =================================================================================================
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

let AlienColor: string[] = ['green', 'yellow', 'red']; 

//• If the alien is green, print a message that the player earned 5 points.


if (AlienColor.indexOf('green') !==-1) {
  console.log("Congratulations green color is present! You just earned 5 points.");
}
else if (AlienColor.indexOf('yellow') !==-1) {
  console.log("Congratulations yellow color is present! You just earned 10 points.");
}
else{
  console.log("Congratulations red color is present! You just earned 15 points.");
}

//• If the alien is yellow, print a message that the player earned 10 points.


if (AlienColor.indexOf('green') ==-1) {
    console.log("Congratulations green color is present! You just earned 5 points.");
  }
  else if (AlienColor.indexOf('yellow') !==-1) {
    console.log("Congratulations yellow color is present! You just earned 10 points.");
  }
  else{
    console.log("Congratulations red color is present! You just earned 15 points.");
  }
  
  
//• If the alien is red, print a message that the player earned 15 points.


if (AlienColor.indexOf('green') ==-1) {
    console.log("Congratulations green color is present! You just earned 5 points.");
  }
  else if (AlienColor.indexOf('yellow') ==-1) {
    console.log("Congratulations yellow color is present! You just earned 10 points.");
  }
  else{
    console.log("Congratulations red color is present! You just earned 15 points.");
  }
  
