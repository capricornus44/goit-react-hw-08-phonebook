import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { addContact } from '../../../redux/phonebook/contact-operations';
import { itemsSelector } from '../../../redux/phonebook/contact-selectors';
import 'react-toastify/dist/ReactToastify.css';
import './Form.scss';

const Form = () => {
  // const [state, setState] = useState(initState);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(itemsSelector);
  const dispatch = useDispatch();

  const handlerChange = ({ target }) => {
    const { value, name } = target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handlerSubmit = e => {
    e.preventDefault();

    const contact = { name, number };
    const isExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    const reset = () => {
      setName('');
      setNumber('');
    };

    if (isExists) {
      toast.error('This contact is already exist');
      reset();
      return;
    }

    dispatch(addContact(contact));
    reset();
  };

  return (
    <>
      <form className="form" onSubmit={handlerSubmit}>
        <label className="form_label">
          Name
          <input
            className="form_input"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="John Smith"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handlerChange}
          />
        </label>
        <label className="form_label">
          Number
          <input
            className="form_input"
            type="tel"
            name="number"
            value={number}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{3})"
            placeholder="+48-796-287-373"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            onChange={handlerChange}
          />
        </label>
        <button type="submit" className="form_button">
          Add contact
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  filter: PropTypes.string,
  addContact: PropTypes.func,
};

export default Form;
