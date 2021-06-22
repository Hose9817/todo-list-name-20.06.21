import {useState} from "react";

function Todo(props){

    const [editName, setEditName] = useState('')

    const editButtonHandler = () => {
        props.editNewName(editName,
            props.element.id)
        setEditName('')
    }


    return(
        <div>
            <h5>{props.element.name}</h5>
            <button onClick={() => props.deleteName(props.element.id)}>Delete</button>
            <button disabled={props.index===0} onClick={() => props.moveName(props.index, props.index-1)}>Up</button>
            <button disabled={props.index===props.todos.length-1} onClick={() => props.moveName(props.index, props.index+1)}>Down</button>
            &nbsp;
            <label> new name: </label>
            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)}/>
            <button onClick={editButtonHandler}>Edit</button>

        </div>
    )
}


export default Todo;