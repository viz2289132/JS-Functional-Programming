//1. Write a regular function that takes a string and returns it with the first letter capitalized.

// let str = "vishal"

// function capitalizedFirstLeter(str){
//      return str[0].toUpperCase() + str.slice(1);
// }

// let result = capitalizedFirstLeter(str);
// console.log(result) //Vishal
// console.log(str) //vishal

// function capitalizeFirstLetter(str) {
//     console.log(str.charAt().toUpperCase() + str.slice(1))
// }

// capitalizeFirstLetter("alpha beta gamm")

//2. Show an alert message that says “Please login” after 5 seconds on your website.

// setTimeout(() => {
//     alert("please Login")
//     setTimeout(() => {
//         console.log("hi there")
//     }, 3000);
// }, 5000);

// 3. Make an arrow function that takes a price and a discount, and returns the price after
// discount.

// let calDiscountedPrice = (price , dis)=>{
//     let discountedPrice = price - dis
//     return discountedPrice
// }

// let result = calDiscountedPrice(5000, 1000)
// console.log(result)

//5. Write a function that takes a traffic light color and gives the correct instruction (e.g. "go"
// for green, "stop" for red, "caution" for yellow, and "invalid color" for anything else).

let signal = (color)=>{

    if(color === "Green"){
        return "Go"
    }
    else if(color === "Red"){
        return("Stop")
    }
    else if(color === "Yellow"){
         return("Caution")
    }else{
       return("Invalid color")
    }
}

let signalResult = signal("Green")
console.log(signalResult)