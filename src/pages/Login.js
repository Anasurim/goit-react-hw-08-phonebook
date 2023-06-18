import { Helmet } from 'react-helmet';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form autoComplete="off">
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
