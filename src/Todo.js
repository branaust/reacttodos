import React, { useContext } from 'react'
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm'
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import { TodosContext } from './contexts/todos.context'

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"

function Todo({ task, completed, id }) {
    const [isEditing, toggle] = useToggleState(false)

    const { dispatch } = useContext(TodosContext)

    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? <EditTodoForm task={task} id={id} toggle={toggle} /> :
                <>
                    <Checkbox
                        tabIndex={-1}
                        checked={completed}
                        onClick={() => dispatch({ type: "TOGGLE", id })} />
                    <ListItemText
                        style={{ textDecoration: completed ? "line-through" : "none" }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction >
                        <IconButton
                            aria-label="Delete"
                            onClick={() => dispatch({ type: "REMOVE", id })}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Edit"
                            onClick={toggle}
                        >
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }

        </ListItem>
    )
}


export default Todo