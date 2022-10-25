import { useReducer } from "react"
import TodolistContext from "./TodolistContext"
import Reducer, {initState} from "./Reducer"
import Logger from "./Logger"

function TodolistProvider({ children }) {

    const [state, dispatch] = useReducer(Logger(Reducer), initState)

    return (
        <TodolistContext.Provider value={[state, dispatch]}>
            {children}
        </TodolistContext.Provider>
    )
}

export default TodolistProvider