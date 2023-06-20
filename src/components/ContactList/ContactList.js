// import { useEffect } from 'react';
import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../app/operations';
import { selectContacts, selectStatusFilter } from '../../app/selectors';

export function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  const contacts = useSelector(selectContacts);

  const normalizedFilter = filter.toLowerCase().trim();
  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

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
