// // let arr = new Array(2 , 3, 4, "hdfs")
// // console.log(arr)

// // let arr = [1 , 2 , 3, 4 ,5]
// // let test = arr.splice(2,2)
// // // console.log(arr)
// // // console.log(test)

// // let arr2 = ["vishal" , "seema"]
// // let arr3 = [[1,3,4,54] , "manish"]

// // let newArr = [...arr ,...arr2 , ...arr3]

// // console.log(newArr)

//  let arr = [1, 2, 5, 7 , 4]

// //  arr.map((val , index , arr)=>{
// //     console.log(val , index , arr)
// //  })

// // let newArr =  arr.map((elem , index)=>{
// //     console.log(index+1)
// //     return elem*2 ;
// // })

// // let newArr =  arr.forEach((elem , index)=>{
// //        arr[index] = elem+2
     
// //     })

// // // console.log(newArr)
// //  console.log(arr)

// // let even = arr.filter((elem )=>{
// //     return elem*2
// // })
// // console.log(even)

// function sum(a, b){
//     return a+b
// }

// let result = arr.reduce(sum)

// console.log(result)

// 1. For an array with marks of students find the average marks of the entire class.

// let arr = [5, 10, 15, 7];

// let sum = arr.reduce((prev , curr)=>{
//     return prev+curr ;
// })

// let result = sum/arr.length;
// console.log(result)

//Create an array with the given length(n) and fill with 0.

// let arr = new Array(25).fill(0)
// console.log(arr)

//3. Create an array with the given length (n) and store natural numbers from 1 to n.

// let n = 10 ;
// let arr = new Array(n).fill(0)

// arr.forEach((_,index)=>{
//     arr[index] = index+1
// })

// console.log(arr)

// 4. Consider an array of mcu heroes ([ironman, captain, black widow, wanda, hulk, black panther]).
// Now:
// a) Add spiderman at the end and thor at the start.
// b) Remove black widow and add hawkeye in its place.
// c) Check whether captain is present in the array.

// let heroes = ["ironman", "captain", "black widow", "wanda", "hulk", "black panther"];

// heroes.push("spiderman")
// heroes.unshift("thor")
// console.log(heroes)

// heroes.splice(3 , 1 , "hawkye")
// console.log(heroes)

// console.log(heroes.includes("captain"))

// 5. How to check if given thing is array or not? How to convert other datatypes to array? What if we try
// to convert an object into an array?

// 6. We have three variables a, b, c, a contains any number, b contains any string, c contains any object,
// and d contains any array. Can we create an array from all these four variables? If yes, How?
// let a= 1;
// let b= "lsdkjf";
// let c = {
//     name: "manas"
// }
// let d = [1, 2, 3]

// console.log(Array.of(a,b,c,d))

// 7. Check whether given string is palindrome or not.

// let str = "ollo"

// let newStr = str.split("").reverse().join("")

// if(str === newStr){
//     console.log("pailaindrome")
// }else{
//     console.log("not Pailndrome")
//}

//8. Capitalize the first letter of every word in a sentence.

// let sentence = "Seema is an intelligent girl"

// let result  = sentence.split(" ").map((elem)=>{
//     return (elem.charAt().toUpperCase() + elem.slice(1))
// })

// let finalStr = result.join(" ");

// console.log(finalStr)