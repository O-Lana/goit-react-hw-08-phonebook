import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts, getFilterValue } from 'redux/filterSlice';

export const Filter = () => {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <div>
      <div>
        Find contacts by name
        <input type="text" value={value} onChange={handleChangeFilter} />
      </div>
    </div>
  );
};
