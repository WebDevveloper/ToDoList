import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
import { useState, useEffect } from "react";


function App() {
  const [todos, setTodos] = useState([])
  const [ToDoValue, setToDoValue] = useState('')

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({ todos:
      newList
    }))
  }

  function handleAddTodos(newTodo){
    const newToDoList = [...todos, newTodo]
    persistData(newToDoList)
    setTodos(newToDoList)
  }

  function handleDeleteTodo(index){
    const newToDoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newToDoList)
    setTodos(newToDoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index];
    setToDoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])
  
  return (
    <>
      <ToDoInput ToDoValue={ToDoValue} setToDoValue={setToDoValue} handleAddTodos={handleAddTodos} />
      <ToDoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}/>
    </>
  )
}

export default App
