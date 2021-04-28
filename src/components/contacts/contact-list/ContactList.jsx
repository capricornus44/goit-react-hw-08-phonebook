import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { getFilteredContact } from '../../../redux/phonebook/contact-selectors';
import SingleContact from '../single-contact/SingleContact';
import './ContactList.scss';

const ContactList = () => {
  const contacts = useSelector(getFilteredContact);

  return (
    <TransitionGroup component="ul" className="contact_list">
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} classNames="list_item" timeout={250}>
          <SingleContact id={id} name={name} number={number} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};
