import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { filterContact } from '../../../redux/phonebook/contact-actions';
import { filterSelector } from '../../../redux/phonebook/contact-selectors';
import './Filter.scss';

const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onFilterContact = event => {
    dispatch(filterContact(event));
  };
  return (
    <div className="filter_container">
      <label className="filter_label">
        Filter
        <input
          className="filter_input"
          type="text"
          name="filter"
          placeholder="Find contacts by name"
          value={filter}
          onChange={onFilterContact}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }).isRequired,
  ),
  filter: PropTypes.string,
  filterContact: PropTypes.func,
};
