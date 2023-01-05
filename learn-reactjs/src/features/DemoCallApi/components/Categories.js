function Categories(props) {
  const { categories, onHandleClick, checkList, onHandleRemoveCheckList } =
    props;
  console.log(checkList);

  const handleClickItem = (id) => {
    if (onHandleClick) {
      onHandleClick(id);
    }
  };

  const handleRemoveCheckList = () => {
    if (onHandleRemoveCheckList) {
      onHandleRemoveCheckList('remove');
    }
  };

  return (
    <>
      <ul>
        {categories.map((categori) => (
          <li
            style={{
              cursor: 'pointer',
              color: checkList.includes(categori.id) ? 'deeppink' : null,
              textDecoration: checkList.includes(categori.id)
                ? 'line-through'
                : null,
            }}
            key={categori.id}
            onClick={() => handleClickItem(categori.id)}
          >
            {categori.id} - {categori.title}
          </li>
        ))}
      </ul>
      <button onClick={handleRemoveCheckList}>All No Check</button>
    </>
  );
}

export default Categories;
