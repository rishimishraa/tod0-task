const addBtn =document.getElementById('add-btn');
const todoInput =document.getElementById('todo-input');
const todoitesmcont =document.getElementById('todo-items-cont');
const removeAllelemnt =document.getElementById('remove-element');


addBtn.addEventListener('click',  function() {
    const value = todoInput.value;
    const li = document.createElement('li') // li tag 


    li.innerText = value;
    const delButton = document.createElement('button');
    delButton.innerText = ' X';
    delButton.addEventListener('click', function () {
        li.remove();

    })
    li.appendChild(delButton);

    todoitesmcont.appendChild(li);
    todoInput.value= '';
    
    
    

});

removeAllelemnt.addEventListener('click', function () {
    todoitesmcont.innerHTML = '';
})