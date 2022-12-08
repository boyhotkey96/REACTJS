const addNumberRanom = (payload) => {
  return { type: "add_number_random", payload };
};

const setActiveId = (payload) => {
  return { type: "set_active_id", payload };
};

export { addNumberRanom, setActiveId };
