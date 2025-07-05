//1. Create a function that returns the last element of an array.

// let arr = [1,2,3,4,5,6,7,78];

//  function lastElem(arr){
//     return arr[arr.length-1]
// }

// let lastEle = lastElem(arr)

// console.log(lastEle)




//2. Find the combination of two arrays.

// let arr1 = [1,2,3];
// let arr2 = [2,8,10];
// let arr3 = ['a' , 'b']

// // let combineArr = arr1.concat(arr2)

// let combineArr = [...arr1 , ...arr2 , ...arr3]

// console.log(combineArr)



//3. Generate a random integer between 0 to 18.

// let randomNumber = Math.floor(Math.random()*18);
// console.log(randomNumber)




//4. Create a function that takes an array containing both numbers and strings, and returns a
//new array containing only the string values.

//  let arr = [1,5,3, 'm','a',10];

//  let filteredArr = arr.filter(ele =>{
//     if(typeof ele === "string"){
//         return true ;
//     }else{
//         return false ;
//     }
//  })

//  console.log(filteredArr)





//5. Find the maximum number in an array.

// let arr = [1, 4, 2, 34, 43 , 22 ,8];

// // let maxi = Number.MIN_VALUE

// // for(let i = 0 ; i< arr.length ; i++){
// //     if(arr[i] >maxi){
// //         maxi = arr[i];
// //     }
// // }

// console.log(Math.max(...arr))

//6. Write a function that returns the length of a given object (number of keys).

// let obj = {
//     name: 'MKL',
//     age: 21
//     // city: 'bhagalpur',
// }

// let getLength = (object)=>{
//     return Object.keys(object).length
// }

// let length = getLength(obj);
// console.log(length)


//7. In an array of objects filter out those objects which have gender's value male.

// let arr = [
//         {
//             name: 'manas',
//             gender: 'male',
//         },
//         {
//             name: 'muskan',
//             gender: 'female',
//         },
//         {
//             name: 'harshit',
//             gender: 'male'
//         }
//     ]

// let filterArr =  arr.filter(obj =>{
//        return obj.gender === "male" ;
//      })


// console.log(filterArr)



// 8. Given an array of strings, return a new array where all strings are in uppercase.

// let arr = ['alu', 'gobi', 'halwa', 'mkl'];

// let resultArr = arr.filter(ele=>{
    
// })

// let result  = arr.map(ele=>{
//   return ele.toUpperCase()
// })

// console.log(result)



//9. Check if an object is empty (has no keys).

// let obj = {
//     name:'alsdjf'
// }

// let isEmptyObject = Object.keys(obj).length < 1 ;

// if(isEmptyObject){
//     console.log("object is empty")
// }else{
//     console.log("object is not empty")
// }




//10. Create an array of numbers and double each value using .map().

// let arr = [1,2,3,4,5,6];

// let doubleArr = arr.map(ele =>{
//     return ele*2 ;
// })

// console.log(doubleArr)



//11. Convert an array of strings into a single comma-separated string.

// let arr = ['1' , "mkl" , 5];

// let result = arr.join();

// console.log(result)



// 12.****
//let arr = [1,2,3,4, ['a',[2,5],'b','c'], 5, 6];
// console.log(arr[4])
// arr.splice( 4 , 1 , ...arr[4]);
// console.log(arr)
//or
// console.log(arr.flat(1))

//13. Write a function that checks if all elements in an array are numbers.

// let arr = [1,2,3,12, 4, 5]

// function check(localArr){
// //    let  isNumbers = true ;

// //     arr.forEach(element => {
// //         if(typeof element !== 'number'){
// //              isNumbers = false ;
// //         }
// //     });
// //     return isNumbers;

//    let isNumbers =  localArr.every(elem => typeof elem === 'number');
//    return isNumbers;
// }

// let isAllCheck = check(arr);
// console.log(isAllCheck);



//14. Build a simple isPrime() function to check if a number is prime.
// function isPrime( elem){
     
//     if(elem === 0 || elem ===1){
//         return false ;
//     }

//     for(let i = 2 ; i<= Math.sqrt(elem) ; i++){
//         if(elem % i ===0 ){
//             return false ;
//         }
//     }

//     return true ;
// }

// console.log(isPrime(1))
// console.log(isPrime(9))
// console.log(isPrime(11))

//15. Create a function that removes duplicate values from an array.

// function removeDuplicate(nums){
//     // let set = new Set(nums);
//     // return [...set];

//     let result = nums.filter((element , index)=>{
//         return nums.indexOf(element) === index ;
//     })

//     return result ;
// }

// let resultArr = removeDuplicate([1,2,2,5,2,3,4,1,6,6])

// console.log(resultArr)