import React from 'react'
import TextField from "@material-ui/core/TextField"
import useInputState from './hooks/useInputState'
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import IconButton from "@material-ui/core/IconButton"
import DoneIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';

function EditTodoForm({ task, editTodo, id, toggle }) {
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value)
            toggle()
            reset()
        }}
            style={{ marginLeft: "1rem", width: "60%" }}
        >
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                autoFocus
            />
            <ListItemSecondaryAction>
                <IconButton onClick={() => {
                    toggle()
                }}>
                    <CancelIcon />
                </IconButton>
                <IconButton>
                    <DoneIcon onClick={(e) => {
                        e.preventDefault();
                        editTodo(id, value)
                        toggle()
                        reset()
                    }} />
                </IconButton>
            </ListItemSecondaryAction>
        </form>
    )
}

export default EditTodoForm