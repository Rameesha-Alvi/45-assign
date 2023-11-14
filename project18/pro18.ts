//=============================== PROJECT 18 ================================================================

//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

let visitWorld : string[] = ["ROMANIA", "RUSSIA", "LATIVA", "SERBIA", "UNITED STATES"]

//• Print your array in its original order.

console.log("\nvisitWorld")
console.log(visitWorld)

//• Print your array in alphabetical order without modifying the actual list.

console.log("\nArray in alphabetical order without modifying the actual list.")
console.log([...visitWorld].sort())

//• Show that your array is still in its original order by printing it.

console.log("\nArray is still in its original order by printing it.")
console.log(visitWorld)

//• Print your array in reverse alphabetical order without changing the order of the original list.

console.log("\nArray in reverse alphabetical order without changing the order of the original list.")
console.log([...visitWorld].sort().reverse())


//• Show that your array is still in its original order by printing it again.

console.log("\nArray is still in its original order by printing it again.")
console.log(visitWorld)

//• Reverse the order of your list. Print the array to show that its order has changed.

console.log("\nReverse order of Array")
console.log((visitWorld).reverse())

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("\nReverse order to original Array")
console.log((visitWorld).reverse())


//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("\n Sort your array so it’s stored in alphabetical order.")
console.log((visitWorld).sort())

//• Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.

console.log("\n Sort to change your array so it’s stored in reverse alphabetical order. ")
console.log([...visitWorld].sort().reverse())

