import './style.scss';

function RandomList(props) {
  const { list, activeId, onItemClick } = props;

  const handleClick = (id) => {
    onItemClick(id);
  };

  return (
    <ul className="numberrandom-list">
      {list.map((item) => (
        <li
          className={item.id === activeId ? "active" : null}
          key={item.id}
          onClick={() => handleClick(item.id)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default RandomList;
