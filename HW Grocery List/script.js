// Your program should:
alert("Hey, this works!")
// 1. Prompt the user to enter the first grocery item.

// 2. Accept the user's answer and store it in a variable.

// 3. Prompt the user to enter how many of the first grocery item to add.

// 4. Accept the user's answer and store it in a variable.
// 5. Repeat steps 1-4 for the second and third grocery items.
// 6. Output to the console the shopping list of items with each item on its own line.
// 7. Output to the console the total number of grocery items
let groceryA = prompt('Enter First Grocery Item');
let groceryB = prompt('Enter Second Grocery Item');
let groceryC = prompt('Enter Third Grocery Item');
let groceryD = prompt('Enter Forth Grocery Item');


document.getElementById('groceryA').innerHTML= groceryA; 
document.getElementById('groceryB').innerHTML= groceryB;
document.getElementById('groceryC').innerHTML= groceryC;
document.getElementById('groceryD').innerHTML= groceryD;

// # Part 2

// Practice using common string methods 
// - `.toLowerCase()`
console.log(groceryA.toLowerCase())

// - `.toUpperCase()`
console.log(groceryB.toUpperCase())
// - `.charAt()`
console.log(groceryC.charAt(1))
// - `.indexOf()`
let str = "I Love Food";
let n = str.indexOf;

// 1. Copy and paste the following code snippet into your JavaScript file.


let tongueTwister = "How much wood would a woodchuck chuck, if the woodchuck could chuck wood?";

let pangram = "The quick brown fox jumps over the lazy dog.";

let anotherPangram = "The five boxing wizards jump quickly.";



// 2. Transform the string stored in `tongueTwister` to all lowercase. Store the result in a variable and print to the console.
console.log(tongueTwister.toLowerCase())
// 3. Get the index of the first occurrence of "fox" in `panagram` and transform the first letter to uppercase. Print result to the console.

// 4. Return the 11th character in `anotherPangram`. Print result to the console. (Hint: the problem asks for the 11th character <i>not</i> the 11th index)
console.log(anotherPangram.charAt(11))