let listContainer = document.querySelector('.listContainer');
let addInput = document.querySelector('#addInput');
let addBtn = document.querySelector('.addBtn');

 let list = [];

 

 function renderList(arr){
    listContainer.innerHTML = ''
    arr.map(obj =>{
        let divElem = document.createElement('div');
        divElem.classList.add('list');
        divElem.innerHTML = `
         <p>${obj.text}</p>
         
        `
        let buttonElem = document.createElement('buttom');
        buttonElem.innerText = '❌';
        buttonElem.onclick = ()=>{
             handleRemoveList(obj.id)
        }
        divElem.appendChild(buttonElem);
        listContainer.append(divElem);
     })
 }

 renderList(list);


 function handleAddList(){

    let obj = {
        id : Date.now(),
        text : addInput.value
    }
    list.unshift(obj);
    renderList(list);
    addInput.value = '';
    
 }

 function handleRemoveList(id){
    let filteredList = list.filter(obj =>{
        return obj.id !== id;
    })

    list = filteredList;
    renderList(list)
    
 }


 addBtn.addEventListener('click' , handleAddList);
