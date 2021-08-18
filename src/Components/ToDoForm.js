
import React, {useState, useEffect, useRef} from "react"

function ToDoForm(props){
    const[input,setInput]=useState(props.edit ? props.edit.value: "");

    const inputRef=useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })

    const handleChange=e=>{
        setInput(e.target.value);
    }

    //not refresh web-seite when click on buttom
    const handleSubmit=e=>{
        e.preventDefault();


        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        })
    
    //for the input fiel to be emptied again
    setInput("")
    }

    

return(
    <form className="todo-form" onSubmit={handleSubmit}>
       {props.edit ? (  
        <>
            <input  
                type="text" 
                name="text"
                className="todo-input edit"
                placeholder="Update you item" 
                value={input}
                onChange={handleChange}
                ref={inputRef}
            /> 

            <button className="todoBtn edit">
            Update
            </button> 

        </>
        ): 
        ( 
        <>
            <input  
                type="text" 
                name="text"
                className="todo-input"
                placeholder="add a new task" 
                value={input}
                onChange={handleChange}
                ref={inputRef}
            /> 
            <button className="todoBtn">
            Add a new task
            </button> 
        </>
        )} 
       
        

    </form>

    )
}

export default ToDoForm;