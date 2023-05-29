let todoList = document.querySelector('ul');
// let todoInput = document.querySelector("#task") 
let formtext =document.getElementById('task')
let todoForm = document.querySelector('#todoForm')
let savedTodo = [];

//We want to loop over the li creation and appending process
for (let i=0; i< savedTodo.length; i++){
    
}

todoForm.addEventListener('submit', function (e) {
    e.preventDefault();


    
    const newTodo = document.createElement('li');     
    newTodo.innerText =formtext.value;




     savedTodo.push({ task: newTodo.innerText});

    localStorage.setItem("todos", JSON.stringify(savedTodo))

    const localValueStr =localStorage.getItem("todos");
    const localValueJSON=JSON.parse(localValueStr)
    
    console.log({localValueJSON})

    console.log(Object.values({localValueJSON}))






    
 
    const removeBtn=document.createElement('button');
    removeBtn.innerText="X";

    todoList.append(newTodo);
    newTodo.append(removeBtn);   


    todoForm.reset(); 


  newTodo.addEventListener("click", function() {
    newTodo.classList.toggle('completed');

     
  })
  removeBtn.addEventListener("click",function(){
  removeBtn.parentElement.remove();
  })


  //This works up to a point but running into an issue with accessing an object
  //inside of an array
  
  for(let task in savedTodo){
    console.log (savedTodo[task]);
  }
    

  
})







 

  
    
  

    

      