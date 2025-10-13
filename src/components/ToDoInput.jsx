import { useState } from "react";

export default function ToDoInput(props){
    const {handleAddTodos, ToDoValue, setToDoValue} = props;

    return (
        <header>
           <input value={ToDoValue} onChange={(e) => {
                setToDoValue(e.target.value);
           }} type="text" placeholder="Something..." />
           <button onClick={() => {
            handleAddTodos(ToDoValue)
            setToDoValue('')
           }}>Add</button>
        </header>
    )
}