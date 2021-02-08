import React, { useContext } from 'react'
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import { TodosContext } from './contexts/todos.context'

import Divider from "@material-ui/core/Divider"
import Todo from './Todo'

function TodoList() {
    const { todos } = useContext(TodosContext)
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <>
                            <Todo
                                {...todo}
                                key={todo.id}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        )
    else
        return null
}

export default TodoList