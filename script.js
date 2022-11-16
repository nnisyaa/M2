const textInputField = document.querySelector
('#text-input-field');
const addButton = document.querySelector('#add-button');
const secondContainer =  document.querySelector('.second-container');

addButton.addEventListener('click',()=>{
    if(textInputField.ariaValueMax.trim().length=='')
    return;



const todoItem = document.createElement('div');
todoItem.classList.add('todo-item');

secondContainer.appendChild(todoItemContainer);

const todoText = document.createElement('p');;
todoText.id = 'todo-text';
todoText.innerText = textInputField.value; 
todoItem.appendChild(todoText);


textInputField = ""
})