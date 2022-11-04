import { useEffect, useState } from "react";
import TodoForm from "../TodoForm";
import TodoRenderList from "./components/TodoRenderList";
import "./components/TodoRenderList.Module.scss";

function TodoRender() {
    const [todoList, setTodoList] = useState([
        { id: 1, title: "I love easy front-end" },
        { id: 2, title: "We love easy front-end" },
        { id: 3, title: "They love easy front-end" },
    ]);

    const handleClick = (todo) => {
        const index = todoList.findIndex((x) => x.id === todo.id);
        if (index === -1) return;

        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);

        setTodoList(newTodoList);
    };

    const handleTodoForm = (formValues) => {
        console.log(formValues)

        // clone todoList
        const newTodoList = [...todoList]

        // create new id
        const newId = newTodoList.length === 0 ? 1 : newTodoList[newTodoList.length - 1].id + 1
        formValues = {
            id: newId,
            ...formValues
        }
        newTodoList.push(formValues)

        setTodoList(newTodoList)
    }

    useEffect(() => {
        console.log(todoList)
    }, [todoList])

    return (
        <div>
            <h1>React hooks: Todo List!</h1>
            <TodoForm onHandleTodoForm={handleTodoForm} />
            <TodoRenderList todoList={todoList} onHandleClick={handleClick} />
        </div>
    );
}

export default TodoRender;