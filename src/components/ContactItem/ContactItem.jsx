import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <li className={css.contact}>
      <span className={css.name}>{name}:</span>
      <span className={css.number}>{number}</span>
      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
