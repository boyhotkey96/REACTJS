import TodoList from './components/TodoList'

TodoFeature.propTypes = {

}

function TodoFeature(props) {
    const todoList = [
        { id: 1, title: 'code' },
        { id: 2, title: 'eat' },
        { id: 3, title: 'ngủ' },
    ]

    return (
        <div>
            <h2>Todo List</h2>
            <TodoList todoList={todoList} />
        </div>
    )
}

export default TodoFeature