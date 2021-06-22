import './App.css';
import {v4 as uuidv4} from 'uuid';
import {useState} from "react";
import Todo from "./Todo";
import Controller from "./Controller";


function App() {

    const initialState = [
        {id: uuidv4(), name: 'Maria'},
        {id: uuidv4(), name: 'Steve'},
        {id: uuidv4(), name: 'Alice'},
        {id: uuidv4(), name: 'David'}
    ]

    const [todos, setTodos] = useState(initialState);

    const deleteName = (id) => {
        const newList = todos.filter(el =>{
            return id !== el.id
        })
        setTodos(newList)
    }

    const moveName = (index, nextIndex) => {
        const newList = [...todos];
        const currentEl = newList[index];
        newList[index] = newList[nextIndex];
        newList[nextIndex] = currentEl;
        setTodos(newList)
    }

    const addNewName = (newName) => {
        const newEl = {id: uuidv4(), name: newName};
        const newList = [...todos, newEl];
        setTodos(newList)
    }

    const editNewName = (editName, id) => {
        const newList = todos.map(el => {
            if(id === el.id) return {...el, name: editName}
            return el;
        })
        setTodos(newList)
    }

    return (
        <div className="App">
            <h2>To-do list</h2>
            <Controller  addNewName={addNewName} />

            {todos.map((el, index) => <Todo
            key={el.id}
            element={el}
            index={index}
            todos={todos}
            deleteName={deleteName}
            moveName={moveName}
            editNewName={editNewName}
            />)}

        </div>
    );
}



export default App;
