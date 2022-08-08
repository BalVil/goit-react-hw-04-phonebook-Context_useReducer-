import { useContext } from 'react';
import css from './Filter.module.css';
import { ContactsContext } from 'context/ContactsContext';

export const Filter = () => {
  const { state, changeFilter } = useContext(ContactsContext);

  return (
    <label className={css.label}>
      <p className={css.label__title}>Find contacts by name</p>
      <input
        type="text"
        value={state.filter}
        onChange={changeFilter}
        name="filter"
      />
    </label>
  );
};
