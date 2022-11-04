import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";

Todolist.propType = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

Todolist.defaultProps = {
    todoList: [],
    onTodoClick: null,
};

function Todolist({ todoList, onTodoClick }) {
    const handleTodoClick = (todo) => {
        if (!onTodoClick) return;
        onTodoClick(todo);
    };

    return (
        <ul className="todo-list">
            {todoList.map((todo) => (
                <li
                    key={todo.id}
                    className={classnames({
                        "todo-item": true,
                        completed: todo.status === "completed",
                    })}
                    onClick={() => handleTodoClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default Todolist;
