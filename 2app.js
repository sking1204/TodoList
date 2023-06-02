//QUERIES

const todoForm =document.querySelector('.todo-form')
const todoFormInput=document.querySelector('input#task.todo-list-input')
const todoList=document.querySelector('ul.todo-list')

// //SET UP EVENT LISTENER FOR FORM AND PREVENT DEFAULT CLEARING OF FORM

todoForm.addEventListener('submit',function(e){
    e.preventDefault();
    addNewTodo();
    addRemoveBtn();


//  const newTodoItem =document.createElement('li');
//  newTodoItem.innerText = todoFormInput.value;
//  todoListItem.append(newTodoItem)

})


// CREATE A NEW LI FOR THE TODOLIST (for now we will put this inside our todoForm function)
//SETTING the text of the newTodoItem. If we type todoFormInput.value into the console, we should see whatever we 
//submitted in the form:
//Now we want to append the new LI to our todoList

//FUNCTIONS

function addNewTodo(){
    const newTodoItem =document.createElement('li');
    newTodoItem.innerText = todoFormInput.value;     
    todoList.append(newTodoItem);
}

function addRemoveBtn (){
    const removeBtn=document.createElement('button');     
    removeBtn.innerText="X";     
    todoList.append(removeBtn);
   
}