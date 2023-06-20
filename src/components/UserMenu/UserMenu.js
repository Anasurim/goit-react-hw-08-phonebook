import { useDispatch } from 'react-redux';
import { logOut } from '../../app/Auth/operations';
import { useAuth } from '../../hooks/index';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.userMenu}>
      <p>Hi {user.name}!</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
