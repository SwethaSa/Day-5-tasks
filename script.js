//Functions in Anonymous and IIFE

//a.Print odd numbers in an array
//Anonymous Function
//Declaring array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//write anonymous function

let getOddNumbers = function () {
  let oddNumbers = numbers.filter((n) => n % 2);
  return oddNumbers;
};
//console the function and pass the numbers into the function
console.log(getOddNumbers(numbers));

/*OUTPUT:
[1, 3, 5, 7, 9];*/

//-----------------------------------------------------

//IIFE Function
//Declaring array
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//write IIFE function

let getNumbers = (function () {
  let oddNumbers = number.filter((n) => n % 2);
  return oddNumbers;
})(number);
//console the function
console.log(getNumbers);

/*OUTPUT:
[1, 3, 5, 7, 9];*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//b.Convert all the strings to title caps in a string array

//Anonymous Function
//Declaring array

let strOfArr = ["i love javascript"];

//creating a function
let titleCaps = function (value) {
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

console.log(titleCaps(strOfArr));

/*OUTPUT:
I Love Javascript*/
//-------------------------------------------------------------

//IIFE Function
//Declaring array

let strOfArray = ["i love javascript"];
//creating a function
let capsTitle = (function (value) {
  //converting the array as string and making it as lower case
  value = value.toString().toLowerCase().split(" ");
  //use foor loop for iteration of the array
  for (var i = 0; i < value.length; i++) {
    //change the first letter of all the strings in the array to uppercase and concatenating the converted and remaining string
    value[i] = value[i].charAt(0).toUpperCase() + value[i].slice(1);
  }
  //return the value and join with a space
  return value.join(" ");
  //pass the array to the function
})(strOfArray);

//console the function
console.log(capsTitle);

/*OUTPUT:
I Love Javascript*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------
//c.Sum of all numbers in an array

//Anonymous Function
//Declaring array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//use reduce function to iterate through array
let sumOfArr = array.reduce(function (current, total) {
  //return the addition of all the values in the array
  return current + total;
});
//console the function
console.log(sumOfArr);

/*OUTPUT:
55*/

//-----------------------------------------------------------

//IIFE Function
//Declaring array

let arrayOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//use reduce function to iterate through array
let sumOfNums = (function () {
  let data = arrayOfNums.reduce((total, current) => total + current);
  //return the addition of all the values in the array
  return data;
})(arrayOfNums);
//console the function
console.log(sumOfNums);

/*OUTPUT:
55*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------

// d.Return all the prime numbers in an array

// Anonymous function

let primeNums = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let prime = [];

let primeNumber = function (item) {
  var identifier = item / 2;
  for (var j = 2; j <= identifier; j++) {
    if (item % j == 0) {
      return false;
    }
  }
  return true;
};
for (var index = 0; index < primeNums.length; index++) {
  if (primeNumber(primeNums[index])) {
    prime.push(primeNums[index]);
  }
}

console.log(prime);

/*OUTPUT:
[2, 3, 5, 7]*/

//------------------------------------------------
// IIFE function

let value = (function (numArray) {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
})([2, 3, 4, 5, 6]);

/*OUTPUT:
[2, 3, 5]*/

//------------------------------------------------------------------------------------------------------

//e.Return all the palindromes in an array

//Anonymous function
//Declaring array

let palindromes = [10, 2, 4, 5, 10, 11, 12, 22, 131, 98, 292, 76, 868];

//write a function for getting palindrome
const isPalindrome = function (palin) {
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
const getPalindrome = (palindromes) => {
  return palindromes.filter((palin) => isPalindrome(palin));
};
//console the filtered variable and pass the array in it.
console.log(getPalindrome(palindromes));

/*OUTPUT:
[2, 4, 5, 11, 22, 131, 292, 868]*/
//-------------------------------------------------------------------------------
//IIFE function
//Declaring array

// let palindrome = ;

//write a function for getting palindrome
(function printPalindrome(palin) {
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
})([10, 2, 4, 5, 10, 11, 12, 22, 131, 98, 292, 76, 868]);
//declare a variable getPalindrome and return the filtered values of the above function isPalindrome
var consolePalindrome = (palindrome) => {
  return palindrome.filter((palin) => printPalindrome(palin));
};
//console the filtered variable and pass the array in it.
console.log(consolePalindrome);

/*OUTPUT:
[2, 4, 5, 11, 22, 131, 292, 868]*/

//--------------------------------------------------------------------------------------------------------------------------
// f. Return median of two sorted arrays of the same size.
//Anonymous Function
let arr1 = [1, 2, 15, 6, 24];
let arr2 = [2, 13, 17, 10, 45];
let n1 = arr1.length;
let n2 = arr2.length;

let getMedian = function (arr1, arr2, n) {
  var i = 0;
  var j = 0;
  var count;
  var m1 = -1,
    m2 = -1;
  for (count = 0; count <= n; count++) {
    if (i == n) {
      m1 = m2;
      m2 = arr2[0];
      break;
    } else if (j == n) {
      m1 = m2;
      m2 = arr1[0];
      break;
    }
    if (arr1[i] <= arr2[j]) {
      m1 = m2;
      m2 = arr1[i];
      i++;
    } else {
      m1 = m2;
      m2 = arr2[j];
      j++;
    }
  }

  return (m1 + m2) / 2;
};

if (n1 == n2) console.log(getMedian(arr1, arr2, n1));

/*OUTPUT:
10.5*/

//---------------------------------------------------------
//IIFE function
let arra1 = [1, 2, 12, 24];
let arra2 = [2, 17, 10, 45];
let s1 = arra1.length;
let s2 = arra2.length;

let consoleMedian = ((arra1, arra2, n) => {
  var i = 0;
  var j = 0;
  var count;
  var m1 = -1,
    m2 = -1;
  for (count = 0; count <= n; count++) {
    if (i == n) {
      m1 = m2;
      m2 = arra2[0];
      break;
    } else if (j == n) {
      m1 = m2;
      m2 = arra1[0];
      break;
    }
    if (arra1[i] <= arra2[j]) {
      m1 = m2;
      m2 = arra1[i];
      i++;
    } else {
      m1 = m2;
      m2 = arra2[j];
      j++;
    }
  }

  return (m1 + m2) / 2;
})(arra1, arra2, s1);

if (s1 == s2) console.log(consoleMedian);

/*OUTPUT:
14.5*/

//-----------------------------------------------------------------------------------------------------------------------

//g. Remove Duplicates in an array
//Anonymous function
let dupArr = [1, 2, 3, 4, 5, 12, 99, 6, 1, 2, 3, 15, 10, 99];

let removeDuplicates = function (dupArr) {
  return dupArr.filter((item, index) => dupArr.indexOf(item) === index);
};

console.log(removeDuplicates(dupArr));
/*OUTPUT:
[1, 2, 3, 4, 5, 12, 99, 6, 15, 10]*/

//---------------------------------------------
//IIFE function
let dupArr1 = [1, 2, 3, 4, 5, 12, 99, 6, 1, 2, 3, 15];

let removeDuplicates1 = (function (dupArr1) {
  return dupArr1.filter((item, index) => dupArr1.indexOf(item) === index);
})(dupArr1);

console.log(removeDuplicates1);

/*OUTPUT:
 [1, 2, 3, 4, 5, 12, 99, 6, 15];*/

//----------------------------------------------------------------------------------------------------------------------
// h.Rotate an array by K times
//Anonymous function

//Declaring Array and K values
let Array = [2, 4, 6, 8, 10];
let N = Array.length;
let K = 1;

const rightRotate = function (a, n, k) {
  // than size of array
  k = k % n;

  for (let i = 0; i < n; i++) {
    if (i < k) {
      // Printing rightmost
      // kth elements
      console.log(a[n + i - k] + " ");
    } else {
      // Prints array after
      console.log(a[i - k] + " ");
    }
  }
};

rightRotate(Array, N, K);

/*OUTPUT:
10 
2 
4 
6
8*/

//---------------------------------------------------------------------

// h.Rotate an array by K times
//IIFE function

//Declaring Array and K values
let array1 = [2, 4, 6, 8, 10];
let S = Array.length;
let P = 3;

const rotateRight = (function (a, s, p) {
  // than size of array
  p = p % s;

  for (let i = 0; i < s; i++) {
    if (i < p) {
      // Printing rightmost
      // kth elements
      console.log(a[s + i - p] + " ");
    } else {
      console.log(a[i - p] + " ");
    }
  }
})(array1, S, P);

rightRotate();

/*OUTPUT:
6
8
10 
2 
4*/
//----------------------------------------------------------------------------------------------------------------------
