import React from 'react';
import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../app/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label className={css.filterLabel}>
      <span className={css.filterTitle}>Find contacts by name</span>
      <input
        type="text"
        value={filter}
        onChange={onChange}
        className={css.filterInput}
      ></input>
    </label>
  );
}
