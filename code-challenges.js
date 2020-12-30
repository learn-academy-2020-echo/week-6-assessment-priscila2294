// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

// Okay, this challenge seems very hard. I know we did a similar challenge for our week one assessment where we would access values in an array of objects.
// // We will start by creating a function, and we already know that we will need to use a map in order to access the values in our array of objects and capitalized the names.
const objects = (array) => {
  let firstLetterCapitalized = array.map(value => {
// // Now, because each name has a first and a last name (and there is no comma so it's only one object) we have to split our array in order to map through it, and capitalized both the firt and last name.
let splitThoseNames = value.name.split(" ")
// console.log(splitThoseNames);
// Now that we have splitted our name to : [ford, prefect], we have to map over our local variable and capitalize the first letter at index [0] and then use substring. Lastly we want to attach the rest of the sentence.
 return splitThoseNames.map(value => value.charAt(0).toUpperCase() + value.substring(1)).join(" ") + ` is a ${value.occupation}.`
})
// return the whole thing!
return firstLetterCapitalized
}
console.log(objects(people));

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// Start by creating a function that takes in array of mixed data. 
const gimmeTheRemainder = (array) => {
// // We are probably going to filter first in order to only extract the numbers from the mixed data array.  
  let onlyNumbs = array.filter(numbers => typeof numbers == "number")
  return onlyNumbs.map(numbers => numbers %3)
// Now we want to map at over our array of numbers and use %3 to get the remainder of each number.
}
 console.log(gimmeTheRemainder(testingArray1))
 console.log(gimmeTheRemainder(testingArray2))


// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

// Start by creating a function that takes in two arrays and returns one array with no duplicates

const noDuples = (array1, array2) => {
  // Now create a local variable that can hold our new array with no duplicates.
  // Use concat to merge both arrays.
  let array3 = array1.concat(array2)
  return [...new Set(array3)]

}
console.log(noDuples(testingArray3, testingArray4))