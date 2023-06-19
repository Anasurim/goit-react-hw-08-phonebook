import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <NavLink to="/register">Sign Up</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </>
  );
};
