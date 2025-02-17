/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 1 || n === 0) {
    return 1
  } else {
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
    var result = 0;
    if (!Array.isArray(array)) {
      return array;
    } else {
      for (var i = 0; i < array.length; i++) {
        result += sum(array[i]);
      }
    }
    return result;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var result = 0;
  if (!Array.isArray(array)) {
    return array;
  } else {
    for (var i = 0; i < array.length; i++) {
      result += arraySum(array[i]);
    }
  }
  return result;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0) {
    return true;
  }
  if (Math.abs(n) === 1) {
    return false;
  }
  if (Math.abs(n) > 0) {
    return isEven(Math.abs(n) - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n <= 1 && n >= -1) {
    return 0;
  }
  if (n > 1) {
    if (n === 2) {
      return 1;
    }
    return n - 1 + sumBelow(n - 1);
  }
  if (n < -1) {
    if (n === -2) {
      return -1;
    }
    return n + 1 + sumBelow(n + 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  // result array
  var result = [];

  // if x === y +/- 1 then stop
  if (x === y - 1 || x === y + 1) {
    return result;
  }
  if (x < y - 1) {
    // push x + 1
    result.push(x + 1);
    // call range
    result = result.concat(range(x + 1, y));
  }
  if (x > y + 1) {
    result.push(x - 1);
    result = result.concat(range(x - 1, y));
  }
  return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp < 0) {
     return 1 / exponent(base, -exp);
  }

  if (exp % 2 === 0) {
    // I can't optimize for even with using an inner function, what am I missing?
    // var evenExp = function(base, exp) {
    //   if (exp === 0) {
    //     return 1;
    //   }
    //   return base * evenExp(base, exp - 2);
    // }
    // var y = evenExp(base, exp)
    // return y * y;

    var y = exponent(base, exp / 2);
    return y * y;
  }
    return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }
  if (n < 1) {
    return false;
  }
  return powerOfTwo(n / 2);

};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  var revArray = [];
  if (string.length === 0) {
    return '';
  }
  // start at the last index and it to the array
  revArray.push(string[string.length - 1]);
  // remove that last character and pass that back
  revArray = revArray.concat(reverse(string.slice(0, string.length - 1)));
  return revArray.join('');
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // remove all whitespaces and make it all uniform lowercase
  string = string.toLowerCase().replace(/\s+/g, '');
  // if it's one letter it's a palindrome
  if (string.length < 2) {
    return true;
  }
  // if the first and last characters are the same
  if (string[0] === string[string.length - 1]) {
    // remove them and call the function again
    return palindrome(string.slice(1, -1));
  }
  return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

  if (y === 0) {
    return NaN;
  }

  if (x < 0) {
    var negative = 1;
    x = 0 - x;
  }
  if (y < 0) {
    y = 0 - y;
  }
  var result = x - y;
  if (result === 0) {
    return 0;
  }
  if (result > 0 && negative === 1) {
    return modulo(-result, y);
  }
  if (result > 0) {
    return modulo(result, y);
  }
  if (result < 0) {
    if (negative === 1) {
      return 0 - (result + y);
    }
    return result + y;
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  var negative = 0;
  if (y < 0) {
    negative++;
    y = 0 - y;
  }
  if (x < 0) {
    negative++;
    x = 0 - x;
  }
  if (y === 0 || x === 0) {
    return 0;
  }
  if (y > 0) {
    y = y - 1;
    var sum = x + multiply(x, y);
  }
  if (negative === 1) {
    return 0 - sum
  }
  return sum
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  var negative = 0;
  var count = 0;
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  if (x < 0) {
    negative++;
    x = 0 - x;
  }
  if (y < 0) {
    negative++;
    y = 0 - y;
  }
  if (x - y >= 0) {
    count++
    count = count + divide(x - y, y);
  }
  if (negative === 1) {
    return 0 - count;
  }
  return count;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === 0) {
    return y;
  }
  if (y === 0) {
    return x;
  }
  if (x > y) {
    var a = Math.floor(x / y);
    var b = x % y;
    return gcd(y, b);
  }
  var a = Math.floor(y / x);
  var b = y % x;
  return gcd(x, b);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  var result = false;
  if (str1.length === 0 && str2.length === 0) {
    return true
  }
  if (str1[0] === str2[0]) {
    result = compareStr(str1.slice(1), str2.slice(1));
  }
  return result;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  // take the first letter and concat it to the array
  // pass back the the string without the first letter
  var result = [];
  if (str.length === 0) {
    return result;
  }
  result.push(str[0]);
  result = result.concat(createArray(str.slice(1)));
  return result;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var reverse = [];
  if (array.length === 0) {
    return reverse;
  }
  // push the last letter to the new array and pop
  reverse.push(array.pop())
  // pass back the shorter popped array
  reverse = reverse.concat(reverseArr(array));
  return reverse;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var result = [];
  if (length === 0) {
    return result;
  }
  // push in the value to the new array
  result.push(value);
  // concat and reduce length by 1 and pass back to the function
  result = buildList(value, length - 1).concat(result);
  //result = result.concat(buildList(value, length - 1));
  // return the new array
  return result;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var result = [];
  if (n === 1) {
    result.push(n.toString());
    return result;
  }
  if (n % 3 === 0 && n % 5 === 0) {
    result.push('FizzBuzz');
  } else if (n % 3 === 0) {
    result.push('Fizz');
  } else if (n % 5 === 0) {
    result.push('Buzz');
  } else {
    result.push(n.toString())
  }
  result = fizzBuzz(n - 1).concat(result);

  return result;
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0;
  if (array.length === 0) {
    return count;
  }
  // check item for match
  if (array.pop() === value) {
    count++;
  }
  // add to counter if it matches
  count = count + countOccurrence(array, value);
  // remove item and pass array back to function
  return count;
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var result = [];
  if (array.length === 0) {
    return result;
  }
  result.push(callback(array[0]));
  // slice
  result = result.concat(rMap(array.slice(1), callback));
  return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var k in obj) {
    if (typeof obj[k] === 'object') {
      count = count + countKeysInObj(obj[k], key);
    }
    if (k === key) {
      count++;
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      count = count + countValuesInObj(obj[key], value);
    }
    if (obj[key] === value) {
      count++;
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
    if (key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  var result = [0];
  if (n <= 0) {
    return null;
  }
  if (n === 1) {
    return [0, 1];
  }
  if (n > 1) {
    // ultimately equals [0, 1]
    var recursiveReturn = fibonacci(n - 1);
    var a = recursiveReturn[recursiveReturn.length - 1];
    var b = recursiveReturn[recursiveReturn.length - 2];
    result = a + b;
    result = fibonacci(n - 1).concat(result);
  }
  return result;

};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // value = n-1 plus n-2;
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  return nthFibo(n -1) + nthFibo(n -2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var result = [];
  if (array.length === 0) {
    return [];
  }
  result.push(array.pop().toUpperCase());
  result = capitalizeWords(array).concat(result);
  console.log(result);
  return result
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  // capitalize with charAt(0) for each element
  if (array.length === 0) {
    return [];
  }
  var result = [];
  var word = array.pop();
  word = word.charAt(0).toUpperCase() + word.slice(1);
  result.push(word);
  result = capitalizeFirst(array).concat(result);
  return result;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  // go through the object recursively if the value of a key is type object
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum = sum + nestedEvenSum(obj[key]);
    }
    if (obj[key] % 2 === 0) {
      sum = sum + obj[key];
    }
  }
  return sum;
  // if the value is even then add it to sum
  // sum = sum + recursive call.
  // return sum
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]));
    }else {
      result = result.concat(array[i]);
    }
  }
  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  // add each letter to the object as a key
  if (obj === undefined) {
    obj = {};
  }
  var newObj = obj;
  if (str.length === 0) {
    return newObj;
  }
  var letter = str[0];
  if (newObj[letter] === undefined) {
    newObj[letter] = 1;
  } else{
    newObj[letter]++;
  }
  newObj = Object.assign(newObj, letterTally(str.slice(1), newObj));
  return newObj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var result = [];
  // iterate through the list
  for (var i = 0; i < list.length; i++) {
    // compare one element to the next
    if (list[i] === list[i + 1]) {
      // slice the list to remove the next element and call the function again
      return result.concat(compress(list.slice(i + 1)));
    }
    result.push(list[i]);
  }
  return result;
}

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var result = [];
  result.push(array[0].concat(aug));
  if (array.length === 1) {
    return result;
  }
  result = result.concat(augmentElements(array.slice(1), aug));
  return result;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  // make result array
  var result = [];
  // if the current element and the next element are 0
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 0 && array[i + 1] === 0) {
      // call the function again with the the array sliced
      return result.concat(minimizeZeroes(array.slice(i + 1)));
    }
    // push an element to result
    result.push(array[i]);
  }
  return result;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var result = [];
  result.push(Math.abs(array[0]));
  for (var i = 1; i < array.length; i++) {
    if ((result[i-1] > 0 && array[i] > 0) || (result[i-1] < 0 && array[i] < 0)) {
      result.push(-array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
  // var result = [];
  // if (array.length === 1) {
  //   if (array[0] < 0) {
  //     return -array[0];
  //   } else {
  //     return array[0];
  //   }
  // }
  // // if the previous element is positive make the new one negative
  // // else make it positive
  // var lastIndex = array.length - 1;
  // var secondToLast = array.length - 2;
  // if ((array[secondToLast] > 0 && array[lastIndex] > 0)
  //  || (array[secondToLast] < 0 && array[lastIndex] < 0) ) {
  //   result.push(-array[lastIndex]);
  // } else {
  //   result.push(array[lastIndex]);
  // }
  // // if altSign is negatvie, the concat positive?
  // // why won't below work?
  // //result = alternateSign(array.slice(0, lastIndex)).concat(result);
  // result = result.concat(alternateSign(array.slice(0, lastIndex)));

  // return result;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var result = '';
  var numbers = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six',
                 7: 'seven', 8: 'eight', 9: 'nine', 0: 'zero'};
  if (str.length === 0) {
    return result;
  }
  if (Number(str[0])) {
    result = result + (numbers[str[0]]);
  }
  if (!Number(str[0])) {
    result = result + str[0];
  }
  result = result + numToText(str.slice(1));

  return result;
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
