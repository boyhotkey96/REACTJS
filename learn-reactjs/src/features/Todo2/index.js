import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function Todo2() {
    const initTodoList = [
        { id: 1, title: "eat", status: "new" },
        { id: 2, title: "code", status: "completed" },
        { id: 3, title: "sleep", status: "new" },
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredTodo, setFilteredTodo] = useState("all");

    useEffect(() => {
        console.log(todoList);
    }, [todoList]);

    const handleClick = (index) => {
        // console.log(index)
        const newTodoList = [...todoList];
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === "new" ? "completed" : "new",
        };

        setTodoList(newTodoList);
    };

    const handleShowAll = () => {
        setFilteredTodo("all");
    };
    const handleShowCompleted = () => {
        setFilteredTodo("completed");
    };
    const handleShowNew = () => {
        setFilteredTodo("new");
    };

    const renderTodo = todoList.filter(
        (todo) => filteredTodo === "all" || filteredTodo === todo.status
    );

    return (
        <div>
            <TodoList todoList={renderTodo} onHandleClick={handleClick} />
            <button onClick={handleShowAll}>Show all</button>
            <button onClick={handleShowCompleted}>Show completed</button>
            <button onClick={handleShowNew}>Show new</button>
        </div>
    );
}

export default Todo2;
