import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize';
import css from './App.module.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  return (
    <div className={css.container}>
      <section className={css.section}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </section>
      <section className={css.section}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
      <ToastContainer autoClose={3000} transition={Slide} />
    </div>
  );
};
