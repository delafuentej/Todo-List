
import React, {useState} from "react";
import Todo from "./ToDo";
import ToDoForm from "./ToDoForm";


function ToDoList(){
    const[todos, setTodos]=useState([]);


    
    const addToDo=todo=>{

        //to format the text ==>to avoid the insertion in the input field of blank text 
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos=[todo,...todos]

        setTodos(newTodos);

        /* console.log(todo,...todos) */
    };
    const completeTodo=id=>{
        let updatedTodos=todos.map(todo=>{
                if(todo.id===id){
                    todo.isComplete= !todo.isComplete;
                }
                return todo;
            })
            setTodos(updatedTodos)
    }

    const updateTodo=(id,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(pre=>pre.map(item=>(item.id===id ? newValue : item)));

    };

    const removeTodo=id=>{
        let removedToDo=[...todos].filter(todo=>todo.id !== id);
        setTodos(removedToDo);
    }

    

    return(
        <div>
            <h2>Pending Tasks</h2>
            <ToDoForm onSubmit={addToDo}/>
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
        </div>


    )

}

export default ToDoList;