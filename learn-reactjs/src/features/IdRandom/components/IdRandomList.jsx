import './style.scss';

function IdRandomList(props) {
  const { list, isActive, onItemClick } = props;

  const handleClick = (item) => {
    if (onItemClick) {
      onItemClick(item)
    }
  }

  return (
    <>
      <ul className="random-list">
        {list.map((item) => (
          <li 
            key={item.id} 
            className={item.id === isActive ? "active" : null}
            onClick={() => handleClick(item)}
          >
              {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default IdRandomList;
