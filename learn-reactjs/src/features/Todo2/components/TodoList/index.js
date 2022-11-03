import PropTypes from "prop-types";
import clsx from "clsx";
import './styles.scss'

function TodoList({ todoList, onHandleClick }) {
    TodoList.propTypes = {
        todoList: PropTypes.array,
        onHandleClick: PropTypes.func
    };

    const handleClick = (id) => {
        if (!onHandleClick) return;
        onHandleClick(id)
    }

    return (
        <ul className="todo-list">
            {todoList.map((todo, index) => (
                <li
                    key={index}
                    className={clsx({ 'todo-item': true, completed: todo.status === "completed" })}
                    onClick={() => handleClick(todo.id)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
