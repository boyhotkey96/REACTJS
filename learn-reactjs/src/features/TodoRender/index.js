import { useState } from "react";
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

    return (
        <div>
            <h1>React hooks: Todo List!</h1>
            <TodoRenderList todoList={todoList} onHandleClick={handleClick} />
        </div>
    );
}

export default TodoRender;
