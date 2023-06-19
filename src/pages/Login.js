import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { logIn } from 'app/Auth/operations';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
}

{
  /* <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
  <label className={css.label}>
    Email
    <input type="email" name="email" />
  </label>
  <label className={css.label}>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log In</button>
</form>; */
}
