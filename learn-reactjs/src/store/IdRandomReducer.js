const initState = {
  list: [],
  isActive: null,
};

const IdRandomReducer = (state = initState, action) => {
  switch (action.type) {
    case "add_IdRandom":
      const newState = [...state.list];
      newState.push(action.payload);

      return { ...state, list: newState };
    case "set_active":
      const newActive = action.payload.id;
      
      return { ...state, isActive: newActive };
    default:
      return state;
  }
};

export default IdRandomReducer;
