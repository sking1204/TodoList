//This version works up until the retrieval from local storage

//QUERIES

const todoForm =document.querySelector('.todo-form')
const todoFormInput=document.querySelector('input#task.todo-list-input')
const todoList=document.querySelector('ul.todo-list')
const todoValue=todoFormInput.value;
let savedTodo=[];
let localStorageObj =localStorage.getItem("todos");
let localStorObjstr=JSON.parse(localStorageObj);


// //SET UP EVENT LISTENER FOR FORM AND PREVENT DEFAULT CLEARING OF FORM

todoForm.addEventListener('submit',function(e){
    e.preventDefault();
    addNewTodo();
    

   
    

   
    
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
    const removeBtn=document.createElement('button');     
    removeBtn.innerText="X";     
    newTodoItem.append(removeBtn);
    removeBtn.addEventListener("click",function(){
    removeBtn.parentElement.remove();
        for(let i=0; i<savedTodo.length;i++){
            if(savedTodo[i] === todoFormInput.value){
                savedTodo.splice(i,1);
            }
        }
        localStorage.setItem("todos", JSON.stringify(savedTodo))
        });

        
   

    savedTodo.push(todoFormInput.value);

    localStorage.setItem("todos", JSON.stringify(savedTodo))

    //Maybe wright a function....something like loop over
    //values in local storage and if the there is a value in
    //local storage then add the value to the saved todo array???
    //NOT SURE, LOST HERE
    

    // const localValueStr =localStorage.getItem("todos");

    // const localValueJSON=JSON.parse(localValueStr)
    
    // console.log({localValueJSON})
   
}

// function addRemoveBtn (){
//     const removeBtn=document.createElement('button');     
//     removeBtn.innerText="X";     
//     todoList.append(removeBtn); 
//     removeBtn.addEventListener("click",function(){
//     removeBtn.parentElement.remove();
//     })   
   
// }

// function removeListItem(){
//     addRemoveBtn.addEventListener("click",function(){
//     addRemoveBtn.parentElement.remove();

// })
// }
//////////////////////
//Mentor Help
// localStorage.setItem("todos", JSON.stringify(savedTodo))

// const localValueStr =localStorage.getItem("todos");

// const localValueJSON=JSON.parse(localValueStr)

// console.log({localValueJSON})