import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../app/selectors';
import Spinner from '../components/Spinner/Spinner';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Spinner />}
      <ContactList />
    </>
  );
}
