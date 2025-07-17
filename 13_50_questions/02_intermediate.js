//16. What’s the difference between parseInt and Number()?

// Number(): Searches the entire string for numbers. If it finds anything else, it will return NaN (short for Not a Number). parseInt() / parseFloat(): Returns the first number in the string, ignoring the rest. If there are no numbers at the beginning of the string, it will return NaN.

// console.log(parseInt("123.3453"))
// console.log(Number("123.3453"))


// console.log(parseInt("123.234px"))
// console.log(Number("123.234px"))


// console.log(parseInt("110", 16))
// console.log(Number("10"))


// 17. Why does 0.1 + 0.2 !== 0.3 in JavaScript?

// let a = 0.1 + 0.2 
// let b = 0.3

 // this is due to floating point precision issue as disccuss in next ques
// console.log(a , b)


//18. Explain floating-point precision issues in JavaScript.

//19. How would you handle high-precision decimal math in JS?
// 19.****
// let sum = Number((0.1 + 0.2).toFixed(4));

// console.log(sum !== 0.3)


// 19.**** alternative
// let Decimal = require('decimal.js')

// let num1 = Decimal(0.1);
// let num2 = Decimal(0.2);

// let sum = num1.plus(num2)

// console.log(Number(sum) === 0.3)


//20. What is the difference between slice and splice?

// let arr = [1,2,3,4, 8]

// let result = arr.slice(-3)

// console.log(result)

/*

1st difference - slice apka string and array dono ke sath kam karta hai lekin splice apka sirf or sirf array ke sath kam karta hai

2nd difference - slice apka originial array, string me koi change nahi karta hai lekin splice apka original array me change kar deta hai

3rd difference - slice apka sirf tukda kat ke de rha hota hai lekin splice apka tukda bhi katt ke de skta hai sath hi add bhi kar skta h elements ko and sath hi delete bhi kar skta hai elements ko


*/



//21. Create a function that reverse each word of a given sentence. E.g., Mai hun manas → sanam nuh iam

// let sentence = "Mai hun manas kumar lal"

// let finalResult = sentence.split(' ').map(word => {
//     let reverseWord = word.split('').reverse().join('')
//     return reverseWord
// }).join(' ')

// console.log(finalResult)
