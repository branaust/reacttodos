import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import useInputState from './hooks/useInputState'

function TodoForm({ addTodo }) {
    const [todo, updateTodo, resetTodo] = useInputState("")

    return (
        <Paper>
            <form onSubmit={(e) => {
                e.preventDefault();
                addTodo(todo);
                resetTodo()
            }}>
                <TextField value={todo} onChange={updateTodo} />
            </form>
        </Paper >
    )
}


export default TodoForm