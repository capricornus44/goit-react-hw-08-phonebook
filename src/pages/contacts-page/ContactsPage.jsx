import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import { getContacts } from '../../redux/phonebook/contact-operations';
import { itemsSelector } from '../../redux/phonebook/contact-selectors';
import Form from '../../components/contacts/contact-form/Form';
import Filter from '../../components/contacts/contact-filter/Filter';
import ContactList from '../../components/contacts/contact-list/ContactList';
import './ContactsPage.scss';

const Contacts = () => {
  const contacts = useSelector(itemsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="app_container">
      {/* APPLICATION TITLE */}
      <CSSTransition
        in={true}
        appear={true}
        classNames="title_slider"
        timeout={500}
        unmountOnExit
      >
        <h1 className="app_title">Phonebook</h1>
      </CSSTransition>

      {/* APPLICATION FORM */}
      <section className="section">
        <Form />
      </section>

      {/* CONTACTS FILTER */}
      <CSSTransition
        in={contacts.length > 1}
        classNames="filter_animation"
        timeout={250}
        unmountOnExit
      >
        <section className="section">
          <Filter />
        </section>
      </CSSTransition>

      {/* CONTACTS LIST */}
      <ContactList />

      {/* ALERT NOTIFICATION */}
      <ToastContainer autoClose={2500} position="top-right" type="error" />
    </div>
  );
};

export default Contacts;
