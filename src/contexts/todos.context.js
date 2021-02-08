import React, { createContext } from 'react'
import useTodoState from '../hooks/useTodoState'

const defaultTodos = [
    { id: 1, task: "Get Teeth Cleaning", completed: true },
    { id: 2, task: "Get Cavitys filled", completed: true },
    { id: 3, task: "Get Temp Crown", completed: true },
    { id: 4, task: "Get New Tooth", completed: false }
]

export const TodosContext = createContext()

export function TodosProvider(props) {
    const todosStuff = useTodoState(
        defaultTodos
    );
    return (
        <TodosContext.Provider value={todosStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}