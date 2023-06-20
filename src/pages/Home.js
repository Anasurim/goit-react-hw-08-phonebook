import { useAuth } from 'hooks/index';
import { AuthNav } from 'components/AuthNav/AuthNav';
import css from './Home.module.css';
import phonebookImage from './phonebook.png';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.home}>
      <h1>Your Phonebook</h1>

      <img src={phonebookImage} alt="Phonebook" width="200" />

      <p>Welcome to your personal Phonebook:</p>
      <p>
        Connect with Ease! Discover a new way to stay connected with our
        intuitive Phonebook app. Find contacts effortlessly, sync across
        devices, and enjoy smart insights for meaningful conversations. Join our
        revolution and unlock seamless communication.
      </p>

      {!isLoggedIn && <AuthNav />}
    </div>
  );
}
