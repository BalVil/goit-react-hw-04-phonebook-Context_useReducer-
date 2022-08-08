import { createContext } from 'react';
import { usePersistReducer } from 'hooks/usePersistReducer';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

export const ContactsContext = createContext();

const ContactsProvider = ({ children }) => {
  const [state, dispatch] = usePersistReducer();

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const sameName =
      state.items.findIndex(
        item => item.name.toLowerCase() === name.toLowerCase()
      ) !== -1;

    if (sameName) {
      toast.warn(`${name} is already in contacts `);
      return;
    }

    dispatch({ type: 'ADD_CONTACT', payload: contact });
  };

  const deleteContact = currentId => {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: currentId,
    });
  };

  const changeFilter = e => {
    dispatch({
      type: 'CHANGE_FILTER',
      payload: e.target.value,
    });
  };

  const value = {
    state,
    addContact,
    deleteContact,
    changeFilter,
  };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
