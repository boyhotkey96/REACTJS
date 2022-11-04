import PropTypes from "prop-types";
import "./TodoRenderList.Module.scss";

TodoRenderList.propTypes = {
    todoList: PropTypes.array,
    onHandleClick: PropTypes.func,
};

TodoRenderList.defaultProps = {
    todoList: [],
    onHandleClick: null,
};

function TodoRenderList({ todoList, onHandleClick }) {
    const handleClick = (todo) => {
        onHandleClick && onHandleClick(todo);
    };

    return (
        <ul className="todo-list">
            {todoList.map((todo) => (
                <li
                    className="todo-item"
                    key={todo.id}
                    onClick={() => handleClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoRenderList;
