import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

function TodoFeature() {
    const initTodoList = [
        { id: 1, title: "code", status: "new" },
        { id: 2, title: "eat", status: "completed" },
        { id: 3, title: "ngủ", status: "new" },
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState("all");

    const handleClick = (todo, index) => {
        // console.log(todo, index);
        // clone current todoList to the new one
        const newTodoList = [...todoList];

        // toggle state
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === "new" ? "completed" : "new",
        };

        setTodoList(newTodoList);
    };

    const handleClickShowAll = () => {
        setFilteredStatus("all");
    };
    const handleClickShowCompleted = () => {
        setFilteredStatus("completed");
    };
    const handleClickShowNew = () => {
        setFilteredStatus("new");
    };

    const renderTodoList = todoList.filter(
        (todo) => filteredStatus === "all" || filteredStatus === todo.status
    );

    useEffect(() => {
        console.log("todoList: ", todoList);
    }, [todoList]);

    return (
        <div>
            <h2>Todo List</h2>
            <TodoList todoList={renderTodoList} onTodoClick={handleClick} />
            <div>
                <button onClick={handleClickShowAll}>Show All</button>
                <button onClick={handleClickShowCompleted}>Show Completed</button>
                <button onClick={handleClickShowNew}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;