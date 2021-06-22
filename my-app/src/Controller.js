import {useState} from "react";

function Controller(props){

    const [newName, setNewName] = useState('')

    const [openController, setOpenController] = useState(false)

    const saveButtonHandler = () => {
        props.addNewName(newName)
        setNewName('')
    }

    return(
        <div>

            <button onClick={() => setOpenController(!openController)}>Add new Name</button>
            {
                openController &&
            <>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/>
            <button onClick={saveButtonHandler}>Save</button>
            </>
            }

        </div>
    )
}
export default Controller;