let container = document.querySelector('.container')
let randomBtn = document.querySelector('.randomBtn')
let applyBtn = document.querySelector('.applyBtn')
let colorInput = document.querySelector('#colorInput')
let currentColor = document.querySelector('.currentColor')

const colorArray = ['red', 'blue', 'green', 'yellow', 'lightseagreen', 'cyan', 'tomato', 'lightcoral', 'acqua', 'white', 'black']

const generateRandomColor = ()=>{
    let randomColorIndex = Math.floor(Math.random() * colorArray.length)
    return colorArray[randomColorIndex]
}

const changeColor = (color)=>{
    container.style.backgroundColor = color;
    currentColor.innerHTML = color;
}

const handleRandomBtnClick = () => {
    let color = generateRandomColor();
    changeColor(color);
}

const handleApplyBtnClick = () => {
    const color = colorInput.value;
    changeColor(color);
}

randomBtn.addEventListener('click' , handleRandomBtnClick)
applyBtn.addEventListener('click' , handleApplyBtnClick)