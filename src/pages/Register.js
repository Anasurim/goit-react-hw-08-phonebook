import { useDispatch } from 'react-redux';
import { register } from 'app/Auth/operations';
import css from './Register.module.css';

export default function SignUp() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.formLabel}>
          Username
          <input className={css.formInput} type="text" name="name" />
        </label>
        <label className={css.formLabel}>
          Email
          <input className={css.formInput} type="email" name="email" />
        </label>
        <label className={css.formLabel}>
          Password
          <input className={css.formInput} type="password" name="password" />
        </label>
        <button className={css.formButton} type="submit">
          Register
        </button>
      </form>
    </>
  );
}
