/*

5 phases of dom manupulation:

1. DOM ✅
2. Selection of HTML Elements ✅
3. How to change or manupulate HTML ✅
4. CSS Ko kaise change kar skte hai ✅
5. Event Listeners (event ko kaise suna jaaaye)

*/

// let h1 = document.querySelector('h1');

// h1.addEventListener('click' , ()=>{
//     h1.style.backgroundColor = 'yellow'
//     h1.innerHTML = 'Mera Namm Vishal Hai'
//     h1.style.color = 'black'
   
// })

// console.log(h1)

let box = document.querySelector('p')

let btn = document.querySelector('button');
let offButton = document.querySelector('.offButton');
btn.addEventListener('click' , ()=>{
    box.style.scale = "1"
})
 
offButton.addEventListener('click' , ()=>{
    box.style.scale = "0.5"
})