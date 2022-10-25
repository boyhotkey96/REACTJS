import { useReducer } from 'react'
import { ContextTodo } from './context'
import Reducer, { initState } from './reducer'
import Logger from './Logger'

function Provider({ children }) {

    const [state, dispatch] = useReducer(Logger(Reducer), initState)

    return (
        <ContextTodo.Provider value={[state, dispatch]}>
            {children}
        </ContextTodo.Provider>
    )
}

export default Provider