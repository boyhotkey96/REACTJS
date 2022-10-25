import { TODO_INPUT, TODOS } from './constant'

export const initState = {
    todos: [],
    todoinput: ''
}

const Reducer = (state, action) => {
    switch (action.type) {
        case TODO_INPUT:
            return { ...state, todoinput: action.payload }
        case TODOS:
            return { ...state, todos: [...state.todos, action.payload] }
        default:
            throw new Error('Invalid action!')
    }
}

export default Reducer
