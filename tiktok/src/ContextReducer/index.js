import { useContext, useRef } from "react";
import { ContextTodo } from "./store/context";
import { todoInput, setTodos } from "./store/action";

function ContextReducer() {
    const context = useContext(ContextTodo);

    const inputRef = useRef()

    const [state, dispatch] = context;
    const { todos, todoinput } = state

    const handleAdd = () => {
        dispatch(setTodos(todoinput))
        dispatch(todoInput(''))
        inputRef.current.focus()
    }

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter text..."
                value={state.todoinput}
                onChange={(e) => dispatch(todoInput(e.target.value))}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ContextReducer;
