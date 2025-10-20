import { useState } from "react";

export default function ToDoInput(props){
    const {handleAddTodos, ToDoValue, setToDoValue} = props;

    return (
        <header>
           <input value={ToDoValue} onChange={(e) => {
                setToDoValue(e.target.value);
           }} type="text" placeholder="Добавить задачу" />
           <button onClick={() => {
            handleAddTodos(ToDoValue)
            setToDoValue('')
           }}>Добавить</button>
        </header>
    )
}
