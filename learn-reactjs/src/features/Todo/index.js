import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TodoList from './components/TodoList';

function TodoFeature() {
  const location = useLocation();
  const navigate = useNavigate();

  const initTodoList = [
    { id: 1, title: 'code', status: 'new' },
    { id: 2, title: 'eat', status: 'completed' },
    { id: 3, title: 'ngủ', status: 'new' },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const param = queryString.parse(location.search);
    return param.status || 'all';
  });

  useEffect(() => {
    const queryParams = location.search;
    const params = queryString.parse(queryParams);
    setFilteredStatus(params.status || 'all');
  }, [location.search]);

  const handleClick = (todo) => {
    // console.log(todo);
    // clone current todoList to the new one
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    };

    setTodoList(newTodoList);
  };

  const handleClickShowAll = () => {
    // setFilteredStatus("all");

    const queryParams = { status: 'all' };
    const params = queryString.stringify(queryParams);
    navigate(`${location.pathname}?${params}`);
  };

  const handleClickShowCompleted = () => {
    // setFilteredStatus("completed");

    const queryParams = { status: 'completed' };
    const params = queryString.stringify(queryParams);
    navigate(`${location.pathname}?${params}`);
  };

  const handleClickShowNew = () => {
    // setFilteredStatus("new");

    const queryParams = { status: 'new' };
    const params = queryString.stringify(queryParams);
    navigate(`${location.pathname}?${params}`);
  };

  const renderTodoList = todoList.filter(
    (todo) => filteredStatus === 'all' || filteredStatus === todo.status
  );

  useEffect(() => {
    console.log('todoList: ', todoList);
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
