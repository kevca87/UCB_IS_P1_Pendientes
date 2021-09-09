const todo_input = document.querySelector("#todo-input");
const form = document.querySelector("#form");
const todo_out = document.querySelector("#todo-out");

/*
var greetings = {
        0:{
            "male":"Hola amigo",
            "female":"Hola amiga"
        },
        1:{
            "male":"Que tal",
            "female":"Que tal"
        },
        2:{
            "male":"Como esta Don",
            "female":"Como esta Sra."
        }
    }
*/

form.addEventListener("submit",event=>{
    event.preventDefault();
    todo_out.innerHTML = todo_input.value;
})