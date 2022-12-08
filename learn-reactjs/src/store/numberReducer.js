const initState = JSON.parse(localStorage.getItem("number-random")) || { list: [], activeId: null, };

const numberReducer = (state = initState, action) => {
  switch (action.type) {
    case "add_number_random":
      const newList = [...state.list];
      newList.push(action.payload);
      console.log(newList);

      return { ...state, list: newList };
    case "set_active_id":
      const newActiveId = action.payload;

      return { ...state, activeId: newActiveId };
    default:
      return state;
  }
};

export default numberReducer;
