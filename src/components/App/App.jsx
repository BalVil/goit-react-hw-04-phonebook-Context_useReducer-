import { nanoid } from 'nanoid';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize';
import css from './App.module.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { usePersistReducer } from 'hooks/usePersistReducer';

export const contactsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'DELETE_CONTACT':
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.payload),
      };

    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      throw new Error(`No case for type ${action.type} found in Reducer.`);
  }
};

export const App = () => {
  const [state, dispatch] = usePersistReducer();

  const handleAddContact = ({ name, number }) => {
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

  const changeFilter = e =>
    dispatch({ type: 'CHANGE_FILTER', payload: e.target.value });

  const getFilteredContact = () => {
    const normalizedFilter = state.filter.toLowerCase();

    return state.items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={css.container}>
      <section className={css.section}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Contacts</h2>
        <Filter value={state.filter} onChange={changeFilter} />
        {state.items.length > 0 ? (
          <ContactList
            contacts={getFilteredContact()}
            onDeleteContact={deleteContact}
          />
        ) : (
          <div>No contacts in the phonebook</div>
        )}
      </section>
      <ToastContainer autoClose={3000} transition={Slide} />
    </div>
  );
};
