//a.Print odd numbers in an array
//Arrow Function
//Declaring array
let newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//write arrow function

let printOddNumbers = () => {
  let oddNumbers = newNumbers.filter((n) => n % 2);
  return oddNumbers;
};
//console the function and pass the numbers into the function
console.log(printOddNumbers(newNumbers));

/*OUTPUT:
[1, 3, 5, 7, 9];*/

//------------------------------------------------------------------------------------------------------
//b.Convert all the strings to title caps in a string array

//Arrow Function
//Declaring array

let arrOfStr = ["i love javascript"];

//creating a function
let titleInCaps = (value) => {
  //converting the array as string and making it as lower case
  value = value.toString().toLowerCase().split(" ");
  //use foor loop for iteration of the array
  for (var i = 0; i < value.length; i++) {
    //change the first letter of all the strings in the array to uppercase and concatenating the converted and remaining string
    value[i] = value[i].charAt(0).toUpperCase() + value[i].slice(1);
  }
  //return the value and join with a space
  return value.join(" ");
};
//console the function

console.log(titleInCaps(arrOfStr));

/*OUTPUT:
I Love Javascript*/

//---------------------------------------------------------------------------------------------------------
//c.Sum of all numbers in an array

//Arrow Function
//Declaring array

let array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//use reduce function to iterate through array
let sumOfArra = array10.reduce((current, total) => {
  //return the addition of all the values in the array
  return current + total;
});
//console the function
console.log(sumOfArra);

/*OUTPUT:
55*/

//-------------------------------------------------------------------------------------------------------------
// d.Return all the prime numbers in an array
// Arrow function

let primeNumbs = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let primes = [];

let primeNumbers = (item) => {
  var identifier = item / 2;
  for (var j = 2; j <= identifier; j++) {
    if (item % j == 0) {
      return false;
    }
  }
  return true;
};
for (var index = 0; index < primeNumbs.length; index++) {
  if (primeNumbers(primeNumbs[index])) {
    primes.push(primeNumbs[index]);
  }
}

console.log(primes);
/*OUTPUT:
[2, 3, 5, 7]*/
//----------------------------------------------------------------------------------------------------------------------
//e.Return all the palindromes in an array

//Arrow function
//Declaring array

let palindromes1 = [10, 2, 4, 5, 10, 11, 12, 22, 131, 98, 292, 76, 868];

//write a function for getting palindrome
const typePalindrome = (palin) => {
  //declare array, i and j
  const array = String(palin);
  let i = 0;
  let j = array.length - 1;
  //add a while loop for looping of i and j values in array
  while (i < j) {
    //check if array of i and j values are same
    if (array[i] === array[j]) {
      //if it is same icrement i and decrement j
      i++;
      j--;
    }

    //if array of i and j values aren't same then return false
    else {
      return false;
    }
  }
  return true;
};
//declare a variable getPalindrome and return the filtered values of the above function isPalindrome
const conPalindrome = (palindromes1) => {
  return palindromes1.filter((palin) => typePalindrome(palin));
};
//console the filtered variable and pass the array in it.
console.log(conPalindrome(palindromes1));

/*OUTPUT:
[2, 4, 5, 11, 22, 131, 292, 868]*/
//-------------------------------------------------------------------------------------------------------------------------------
