import PropTypes from 'prop-types'

Todolist.propType = {
    todoList: PropTypes.array,
}

Todolist.defaultProps = {
    todoList: []
}

function Todolist({ todoList }) {
    return (
        <ul>
            {todoList.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    )
}

export default Todolist