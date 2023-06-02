const todoPage = document.querySelector('.todo-list-page');
const header = document.querySelector('.header');
const todoForm =document.querySelector('.todo-form');
const todoFormInput =document.querySelector('.todo-form input[type="text"]')
// const todoFormInput =document.querySelector('.todo-list-input [type="text"')
//using todoFormInput doesn't return expected selection
const submitBtn =document.querySelector('.todo-form input[type="submit"]');
const todoList= document.querySelector ('.todo-list');
const todoListItemPlaceholder = document.querySelector('.todo-list-item-placeholder');

//SET UP EVENT LISTENER FOR FORM AND PREVENT DEFAULT CLEARING OF FORM

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
})