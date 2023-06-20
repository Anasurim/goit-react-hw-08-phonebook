import { useDispatch } from 'react-redux';
import { logOut } from '../../app/Auth/operations';
import { useAuth } from '../../hooks/index';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>{user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
