import React from 'react';
import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../app/contactsSlice';

export function ContactList() {
  const contacts = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase().trim();
  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  return (
    <ul className={css.contactList}>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.listItem}>
            <p className={css.listName}>
              {name}: {number}
            </p>

            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={css.listButton}
            >
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}
