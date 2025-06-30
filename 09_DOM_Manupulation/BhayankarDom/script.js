//How to manipulate the html

// let h1 = document.querySelector('h1')

// console.log(h1.tagName)

// 1. Create a paragraph with text “mai tumse pyar nahi karta hun” and add background color to black and
// font color to green using javascript.


// let p = document.createElement('p')
// p.innerText = "mai tumse pyar karta hun"

// p.setAttribute('style' ,'background-color: black ; color : green ' )
// let body = document.querySelector('body')
// body.append(p)

// //2. Insert a button with text “click me” as the first element inside the paragraph created in 1st question.

// let button = document.createElement('button')

// button.innerText = "click me"

// p.prepend(button)

//3. Create a <div> tag in html and give it a class & some styling. Now create a new class in css and try
// to append this class to the <div> element.

// let div = document.querySelector('.box')
// div.setAttribute('class', `${div.getAttribute('class')} box2`)
// console.log(div.getAttribute('class'))


//Manipulating css
// let div = document.querySelector('div')
// div.setAttribute('class' , 'box') 

//1. Create a simple website with theme changing functionality.
// let btn = document.querySelector('button')
// let body = document.querySelector('body')

// let theme = 'light'

// btn.addEventListener('click' , ()=>{
//     if(theme === 'light'){
//         body.style.backgroundColor = "Black"
//         body.style.color = "white"
//         theme = 'dark'
//     }
//     else{
//         body.style.backgroundColor = "white"
//         body.style.color = "Black"
//         theme = 'light'
//     }
  
// })

//2 2. Solve first question by changing css class.
//  let btn = document.querySelector('button')
// let body = document.querySelector('body')

//    btn.addEventListener('click' , ()=>{
//     if(body.className === 'light'){
//         body.className = 'dark'
//     }else{
//         body.className = 'light'
//     }
//    })

//3. Solve the first question by toggle css class.

// let btn = document.querySelector('button')
// let body = document.querySelector('body')

//    btn.addEventListener('click' , ()=>{
//     body.classList.toggle('dark')
//    })