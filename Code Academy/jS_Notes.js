/*Strings — Any grouping of keyboard characters (letters, spaces, numbers, or symbols) surrounded by single quotes ('Hello') or double quotes ("World!"). In the example above, 'New York City' is a string.
Numbers — Any number, including numbers with decimals: 4, 1516, .002, 23.42. In the example above, 40.7 is a number.
Booleans — Either true or false, with no quotations. In the example above, true is a boolean.
Null — Can only be null. It represents the absence of value.

Review Types and Operators
Let's take one more glance at the concepts we just learned:

Four essential data types in JavaScript include strings, numbers, booleans, and null.
Data is printed, or logged, to the console with console.log().
Four built-in mathematical operators include +, -, *, and /.
JavaScript associates certain properties with different data types.
JavaScript has built-in methods for different data types.
Libraries are collections of methods that can be called without an instance.
You can write single-line comments with // and multi-line comments between /* and */

/*
const, short for constant, is a JavaScript keyword that creates a new variable with a value that cannot change.

Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
Blocks are statements that exist within curly braces {}.
Global scope refers to the context within which variables are accessible to every part of the program.
Global variables are variables that exist within global scope.
Block scope refers to the context within which variables that are accessible only within the block they are defined.
Local variables are variables that exist within block scope.
Global namespace is the space in our code that contains globally scoped information.
Scope pollution is when too many variables exist in a namespace or variable names are reused.

Arrays are lists that store data in JavaScript.
Arrays are created with brackets [].
Each item inside of an array is at a numbered position, or index, starting at 0.
We can access one item in an array using its index, with syntax like: myArray[0].
We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
Arrays have a length property, which allows you to see how many items are in an array.
Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.
Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
Arrays mutated inside of a function will keep that change even outside the function.
Arrays can be nested inside other arrays.
To access elements in nested arrays chain indices using bracket notation.

*/


/*A for loop contains three expressions separated by ; inside the parentheses:

an initialization starts the loop and can also be used to declare the iterator variable.
a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
an iteration statement is used to update the iterator variable on each loop.*/

for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
  };


// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
    console.log(counter)
  };


//vacation for loop array example ----------------------------------------------------------------------------------------------------------
  const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
};


//nested Loop example ----------------------------------------------------------------------------------------------------------
// Write your code below
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
      console.log('Both people follow: ' + mutualFollowers);
    }
  }
};


//while loop example ----------------------------------------------------------------------------------------------------------
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() *4)];
  console.log(currentCard);
}


//do while loops  ----------------------------------------------------------------------------------------------------------
// Write your code below

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded);




//for loop break examples ---------------------------------------------------------------------------------------------------------
for (let i = 0; i < 99; i++){
  console.log('Banana.');
  if (i > 3) {
     break;
  };
};

console.log('Orange you glad I broke out the loop!');


//exercise to convert string to 'whale language' e's and u's are used twice.
let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++){
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]){
      resultArray.push(input[i]);
      }
    }
 		if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
		}
  };

console.log(resultArray);
console.log(resultArray.join('').toUpperCase());




//Higher-order functions -------------------------------------------------------------------------------------------------------------------------------------------------------------
//telling a computer to count to 3
for (let i = 1; i<=3; i++) {
  console.log(i)
}

//exercise of Functions as parameters
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return console.log(firstTry);
    } else {
        return 'This function returned inconsistent results'
    }
};

checkConsistentOutput(addTwo, 10);


//Iterators -----------------------------------------------------------------------------------------------------------------------------------------------------

//.forEach() method ----------------------------------------------------------------------
//grocery list forEach example
const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];
groceries.forEach(function(groceryItem) {
  console.log(' - ' + groceryItem);
});


// arrow syntax ----------------------------------------------------------------------
groceries.forEach(groceryItem => console.log(groceryItem));
//Iterate over fruits
fruits.forEach(fruit => console.log('I want to eat a ' + fruit));


//callback function 
function printGrocery(element){
  console.log(element);
}
groceries.forEach(printGrocery);

//.map() method  ----------------------------------------------------------------------
// called on an array, takes an argument of a callback function and returns a new array
const number = [1, 2, 3, 4, 5];
const bigNumbers = number.map(number => {
  return number * 10;
});
console.log(numbers); //output: [1, 2, 3, 4, 5]
console.log(numbers)

// map example ----------------------------------------------------------------------
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join(''));


//.filter() Method ----------------------------------------------------------------------
// example
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

//long hand
const shortWords = words.filter(word => {
  return word.length < 6;
});
//short hand
const shortWords = words.filter(word => word.length < 6);


//.findIndex() Method - finding location of an element in an array ----------------------------------------------------------------------
const jumbledNums = [123, 25, 78, 5, 9];
const lessThanTen = jumbled.findIndex(num => {
  return num < 10;
});
console.log(lessThanTen); //output 3
console.log(jumbledNums[3]); //output 5

const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});
console.log(greaterThan1000); //output -1

// example
const animals = ['hippos', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
// which index is elephant?
const foundAnimal = animals.findIndex(animal => animal === 'elephant'); //output index 7
// which index for animal that starts with an 's'
const startsWithS = animals.findIndex(animal => animal[0] === 's'); //output index 3


// .reduce() method ----------------------------------------------------------------------
// reduce methods returns a single balue after iterating through the elemts of an array, thereby reducing the array. 
const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
});
console.log(summedNums) //output index 17

//example
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ' , accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum); //output The value of accumulator:  10
                      // The value of currentValue:  1
                      // The value of accumulator:  11
                      // The value of currentValue:  3
                      // The value of accumulator:  14
                      // The value of currentValue:  5
                      // The value of accumulator:  19
                      // The value of currentValue:  7
                      // 26

