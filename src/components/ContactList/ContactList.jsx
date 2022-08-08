import { useContext } from 'react';
import css from './ContactList.module.css';
import { ContactsContext } from 'context/ContactsContext';
import { getFilteredContactsName } from 'hooks/useFilteredContacsName';

export const ContactList = () => {
  const { state, deleteContact } = useContext(ContactsContext);

  return (
    <>
      {state.items.length > 0 ? (
        <ul>
          {getFilteredContactsName(state).map(({ id, name, number }) => {
            return (
              <li key={id} className={css.contact}>
                <span className={css.name}>{name}:</span>
                <span className={css.number}>{number}</span>
                <button
                  className={css.button__del}
                  type="button"
                  onClick={() => deleteContact(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>No contacts in the phonebook</div>
      )}
    </>
  );
};
