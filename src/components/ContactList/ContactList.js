import { useEffect } from 'react';
import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../service/fetchContact';
import { selectContacts, selectStatusFilter } from '../../app/selectors';

export function ContactList() {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const normalizedFilter = filter.toLowerCase().trim();
  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {filterContacts.map(({ id, name, phone }) => {
        return (
          <li key={id} className={css.listItem}>
            <p className={css.listName}>
              {name}: {phone}
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
