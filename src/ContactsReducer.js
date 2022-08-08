const contactsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        items: [...state.items, payload],
      };

    case 'DELETE_CONTACT':
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== payload),
      };

    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: payload,
      };

    default:
      throw new Error(`No case for type ${type} found in Reducer.`);
  }
};
export default contactsReducer;
