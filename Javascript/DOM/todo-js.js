const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");

const todoItemsContainer = document.getElementById("todo-items-container");

addBtn.addEventListener('click', () => {
    const value = todoInput.value;

    const li = document.createElement("li");  //li hawa me hai

    li.innerText = value; //li me user value daalo

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'X';

    deleteBtn.addEventListener("click", ()=>{
        li.remove();
    })


    li.appendChild(deleteBtn);

    todoItemsContainer.appendChild(li);
    todoInput.value = ""; 
})