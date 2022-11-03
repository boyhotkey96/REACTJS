import PropTypes from "prop-types";
import classnames from "classnames";
import './styles.scss'

function TodoList({ todoList, onHandleClick }) {
    TodoList.propTypes = {
        todoList: PropTypes.array,
        onHandleClick: PropTypes.func
    };

    const handleClick = (index) => {
        if (!onHandleClick) return;
        onHandleClick(index)
    }

    return (
        <ul className="todo">
            {todoList.map((todo, index) => (
                <li
                    key={todo.id}
                    className={classnames({ 'completed': todo.status === "completed" })}
                    onClick={() => handleClick(index)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
