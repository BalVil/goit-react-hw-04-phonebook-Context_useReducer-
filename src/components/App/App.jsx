import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize';
import css from './App.module.css';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const LS_KEY = 'contacts';
const initialContact = [{ id: 'id-1', name: 'user', number: '000-00-00' }];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(LS_KEY, initialContact);
  const [filter, setFilter] = useState('');

  const handleAddContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const sameName =
      contacts.findIndex(
        item => item.name.toLowerCase() === name.toLowerCase()
      ) !== -1;

    if (sameName) {
      toast.warn(`${name} is already in contacts `);
      return;
    }

    setContacts(prev => [...prev, contact]);
  };

  const changeFilter = e => setFilter(e.target.value);

  const getFilteredContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = currentId => {
    setContacts(contacts.filter(({ id }) => id !== currentId));
  };

  return (
    <div className={css.container}>
      <section className={css.section}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length > 0 ? (
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
