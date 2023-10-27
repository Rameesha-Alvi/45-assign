//============================================= PROJECT 26 ================================================================================================
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.


let alienColor: string[] = ['green', 'yellow', 'red']; 

// Version that passes the if test
if (alienColor.indexOf('green') !==-1) {
  console.log("Congratulations green color is present! You just earned 5 points.");
}else{
    console.log("Congratulations! You just earned 10 points.");
}

// Version that fails the if test (no output)
if (alienColor.indexOf('green') ==-1) {
    console.log("Congratulations green color is not present! You just earned 5 points.");
  }else{
      console.log("Congratulations green color is not present! You just earned 10 points.");
  }