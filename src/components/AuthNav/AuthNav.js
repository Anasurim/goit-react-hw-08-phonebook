import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <>
      <div className={css.authNav}>
        <NavLink className={css.authNavLink} to="/register">
          Sign Up
        </NavLink>
        <NavLink className={css.authNavLink} to="/login">
          Log In
        </NavLink>
      </div>
    </>
  );
};
