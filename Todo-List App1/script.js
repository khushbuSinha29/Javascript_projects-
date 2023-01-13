// console.log('testing');

const button = document.querySelector('.btn');


let itemList = [];
button.addEventListener('click', ()=>{
    addItem(); 
})

const addItem = () =>{
    const input = document.querySelector('.textContent').value;
    if(input.length > 0 )
        renderItem(input);
    document.querySelector('.textContent').value = '';
    deleteItem();
}

const renderItem = (item) =>{
    const html = `
    <div class='innerText--Container'>
 
       <p>${item}</p>
      
       <ion-icon name="trash-outline" class="delete" ></ion-icon>
      
    </div>
    `
    document.querySelector('.item-container').insertAdjacentHTML('beforeend',html);
   
}

function deleteItem(){
    const deleteBtn = document.querySelectorAll('.delete');
    deleteBtn.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            e.target.parentNode.classList.add('hideItem');
        })
    })

}

