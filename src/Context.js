import { createContext, useReducer, useContext } from 'react';
import contactsReducer, { initialState } from './ContactsReducer';

const ContactsContext = createContext(initialState);

export const ContactsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  const addContact = contact => {
    const updatedContact = state.items.push(contact);

    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        items: updatedContact,
      },
    });
  };

  const deleteContact = currentId => {
    const updatedContact = state.items.filter(({ id }) => id !== currentId);

    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        items: updatedContact,
      },
    });
  };

  //   const changeFilter = contact => {
  //     dispatch({
  //       type: 'CHANGE_FILTER',
  //       payload: {
  //         filter: contact,
  //       },
  //     });
  //   };

  const value = {
    filter: state.filter,
    items: state.items,
    addContact,
    deleteContact,
  };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};

const useContacts = () => {
  const context = useContext(ContactsContext);

  if (context === undefined) {
    throw new Error('useContacts must be used within Context');
  }

  return context;
};

export default useContacts;
