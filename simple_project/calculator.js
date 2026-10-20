const addbtn = document.getElementById("add-button");
const todoInput = document.getElementById("todo-input");

const todoItemscontainer = document.getElementById("todo-items-container");

addbtn.addEventListener("click",()=>{
    const value = todoInput.value;

    const li = document.createElement('li'); 
     li.innerText = value;

     const delbutton =  document.createElement('button');
     delbutton.innerText = 'X';

     delbutton.addEventListener('click', function(){
        li.remove();
     });

     li.appendChild(delbutton); 
     todoItemscontainer.appendChild(li);
     todoInput.value = '';
});