
import React, {useState} from "react";
import ToDoForm from "./ToDoForm";
import {CgCloseR} from "react-icons/cg";
import {FaEdit} from "react-icons/fa";


const Todo=({todos, completeTodo,removeTodo,updateTodo})=>{
    const [edit,setEdit]=useState({
        id:null,
        value:""
    });

    const submitUpdate=value=>{
        updateTodo(edit.id,value);
        setEdit({
            id:null,
            value:""
        })
    }

    if(edit.id){
        return <ToDoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return todos.map((todo,index)=>(
        <div 
        className={todo.isCompleted ? "todo-row complete": "todo-row"}
        key={index}
        >
            <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
                {todo.text}
            </div>

            <div className="icons">
                <CgCloseR onClick={()=>{
                    removeTodo(todo.id)
                }}
                className="delete-icon" />


                <FaEdit onClick={()=>{
                    setEdit({
                        id:todo.id,
                        value:todo.text
                    })
                }}
                className="edit-icon"
                />
            </div>
        </div>
    ));

};


export default Todo;