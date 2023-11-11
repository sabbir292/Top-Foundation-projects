// recursion

// Question 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6. 

function sumRange(num, sum = 0){
    if(num === 1){
        return sum = num
    }else{
        return sum = num + sumRange(num - 1)
    }
}

console.log(1,sumRange(3))


// Question 2: Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

// Sample:

// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4 
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); // 1


function power(base, exponent, value = 1){
   if(exponent === 0) return value;
   else{
    return value = base * power(base, exponent - 1)
   }
}
console.log(2, power(2,5))


// Question 3: Calculate factorial
// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

// Sample:

// factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

function factorial(num, value = 1){
    if(num === 1) return value;
    else{
        return value = num * factorial(num - 1)
    }
}

console.log(3, factorial(5))


// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

// Sample:

// var allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false

const allAreLessThanSeven = all([5,9,2,1], function(num){
   return num < 7;
})

function all(arr, callback){
    let num = arr.slice(-1)

    if(arr.length === 0) return true //base case, stops the recursion
    if(callback(num)){
        arr.pop()
        return all(arr, callback)
    }
    else{
        return false //alternate case
    }
}

console.log(4, allAreLessThanSeven);


// Question 5: Product of an array
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

// Sample:

// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
    if(arr.length === 0) return 1
    else{
        let num = arr[arr.length - 1]
        arr.pop()
        return num * productOfArray(arr)
    }
}
var sixty = productOfArray([1,2,3,10]) // 60
console.log(5, sixty)


// Question 6: Search JS object
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

// Sample:

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(6, hasIt, doesntHaveIt)

function contains(obj, val){
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            return contains(obj[key], val)
        }else{
            if(obj[key] === val) return true
            else return false
        }
    }
}


// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return the total number of integers stored inside this array

// Sample:

const seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7


function totalIntegers(arr){
    let int = 0
     arr.map(item=>{
        if(typeof(item) === 'number'){
            int += 1;     
        }
        else if(Array.isArray(item)){
            int += totalIntegers(item, int)
        }
    })
    return int
}
console.log(7, seven)


// Question 8:
// Write a function that sums squares of numbers in list that may contain more lists

// Sample:

var l = [1,2,3]; 
console.log(8, SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(8, SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(8, SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(8, SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function SumSquares(arr){
    let total = 0;
    arr.map(item=>{
        if(typeof(item) === 'number'){
            total += item * item
        }
        else if(Array.isArray(item)){
            total += SumSquares(item)
        }
    })
    return total
}




// Question 9:
// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

// Sample:

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []


// function replicate(times, value){
//     let arr = []
//     if(times < 0) return []
//     else{
//         for(let i = 0; i < times; i++){
//             arr.push(value)
//         }
//     }
//     return arr
// }
function replicate(times, value){
    if(times <= 0) return []
    else{
      return [value].concat(replicate(times -1, value))
    } 
}


// _________________________________________________________

// Project Recursion

function fibs(num){
    let fibArr = []

    for(let i = 0; i <= num; i++){
    if(i === 0) fibArr.push(0)
    else if(i === 1) fibArr.push(1)
    else{
        fibArr.push(fibArr[i-1] + fibArr[i-2])
    }
  }
  return fibArr
}
console.log(fibs(8))


// One Liner
const fibRec = (n)=> n < 2 ? n : fibRec(n-1) + fibRec(n-2) 
console.log(fibRec(5))

// multiple liner.
function fibRecursion(num){
    if(num < 2) return num
    else{
        return fibRecursion(num - 1) + fibRecursion(num - 2)
    }
}

const result = fibRecursion(8);
console.log(result);