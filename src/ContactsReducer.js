export const initialState = {
  items: [{ id: 'id-1', name: 'user', number: '000-00-00' }],
  filter: '',
};

const contactsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_CONTACT':
      console.log('ADD_CONTACT', payload);

      return {
        ...state,
        items: payload.items,
      };
    case 'DELETE_CONTACT':
      console.log('DELETE_CONTACT', payload);

      return {
        ...state,
        items: payload.items,
      };
    case 'CHANGE_FILTER':
      console.log('CHANGE_FILTER', payload);

      return {
        ...state,
        filter: payload.filter,
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default contactsReducer;
