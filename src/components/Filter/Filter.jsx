import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="filter">
      <p className={css.label__filter}>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} id="filter" />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
