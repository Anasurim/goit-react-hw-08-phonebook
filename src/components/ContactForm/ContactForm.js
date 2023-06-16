import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactFor.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../app/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from '@reduxjs/toolkit';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(5),
      name: name,
      number: number,
    };
    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isNameExists) {
      Notify.failure(`${newContact.name} already exists.`);
    } else {
      dispatch(addContact(newContact));
    }

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.formLabel}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          className={css.formInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.formLabel}>
        Phone
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          className={css.formInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  filter: PropTypes.string,
};
