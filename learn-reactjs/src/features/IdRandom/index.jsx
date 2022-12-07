import { useDispatch, useSelector } from "react-redux";
import IdRandomList from "./components/IdRandomList";

const getRandom = (number) => {
  return number ? Math.trunc(Math.random() * number) : null;
};

function IdRandom() {
  const dispatch = useDispatch();
  const list = useSelector((store) => store.idRandom.list);
  const isActive = useSelector(store => store.idRandom.isActive);

  const handleRandom = () => {
    const numberRandom = `0000${getRandom(10000)}`.slice(-4);
    const id = Math.random();

    const newItem = {
      id: id,
      title: `Giải đặc biệt ${numberRandom}`,
    };

    dispatch({ type: "add_IdRandom", payload: newItem });
  };

  const handleItemClick = (item) => {
    dispatch({ type: 'set_active', payload: item })
  }

  return (
    <>
      <h1>Random giải đặc biệt: </h1>
      <button onClick={handleRandom}>Add Random</button>       <IdRandomList
        list={list}
        isActive={isActive}
        onItemClick={handleItemClick} />
    </>
  );
}

export default IdRandom;
