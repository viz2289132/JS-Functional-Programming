// let arr = [1, 2 ,3 , 4 , 5]

const { replace } = require("react-router-dom")

// let double = arr.map(function(elem){
//    return elem*2;
// })

// console.log(double)

//Immutablitiy

// let obj = {
//     age : 21 ,
//     name : "Vishal"
// }

// function replaceName(name){
//     let newObj = {...obj , name}
//     console.log(newObj)
// }

// replaceName('Seema')

// console.log(obj)
// replaceName("Seema");

// console.log(obj)

// let list = ["Aloo" , "Gobhi" , "Laddu"]

// function addItem(item){
//     let newList = [...list , item];
//     return newList ;
// }
// console.log(list)

// let replacedList = addItem("chiken");


// console.log(replacedList)

// let list = ["Aloo" , "Gobhi" , "Laddu"] 

// function removeLastItem(arr){
//    let newArr = arr.slice(0 , -1)
//    return newArr;
// }

// let newArr = removeLastItem(list)
// console.log(list);
// console.log(newArr)

//Resuse and Compose logic


// let name = "VISHAL Gupta"

// let toLower = str=> str.toLowerCase() 

// let removeSpaces = str => str.replaceAll(' ' , '');

// let addAtTheRate = str => "@" + str;

// function createUserName(str){
//     return addAtTheRate(removeSpaces(toLower(str)))

// }

// let result = createUserName(name)
// console.log(result)

//don't itrate 

// let arr = [1, 2 , 5 ,6,  7 , 20]

// let even = [];


// for(let i = 0 ; i<arr.length ; i++){
//     if(arr[i]%2 === 0){
//         even.push(arr[i])
//     }
// }

// let evenArr = arr.filter(elem=>{
//     return elem %2 === 0
// })

// console.log(even)
// console.log(evenArr)