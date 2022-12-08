import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumberRanom, setActiveId } from "~/store/action";
import RandomList from "./components/RandomList";

const getNumberRandom = (number) => {
  if (typeof number === "number") {
    return Math.trunc(Math.random() * number);
  }
};

function NumbersRandomStorage() {
  const { list } = useSelector((store) => store.numberRe);
  const { activeId } = useSelector((store) => store.numberRe);
  const dispatch = useDispatch();

  const handleAddNumberRandom = () => {
    const numberRandom = `0000${getNumberRandom(100000)}`.slice(-5);
    const itemObj = {
      id: Math.random(),
      title: `Số đặc biệt ${numberRandom}`,
    };

    dispatch(addNumberRanom(itemObj));
  };

  useEffect(() => {
    const newState = { list, activeId };
    localStorage.setItem("number-random", JSON.stringify(newState));
  }, [list, activeId]);

  const handleItemClick = (id) => {
    dispatch(setActiveId(id));
  };

  return (
    <>
      <h1>Numbers Random Storage</h1>
      <button onClick={handleAddNumberRandom}>Add numbersRandom</button>
      <RandomList
        list={list}
        activeId={activeId}
        onItemClick={handleItemClick}
      />
    </>
  );
}

export default NumbersRandomStorage;
