import React from 'react'
import TextField from "@material-ui/core/TextField"
import useInputState from './hooks/useInputState'

function EditTodoForm({ task, editTodo, id, toggle }) {
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value)
            toggle()
            reset()
        }}>
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
            />
        </form>
    )
}

export default EditTodoForm