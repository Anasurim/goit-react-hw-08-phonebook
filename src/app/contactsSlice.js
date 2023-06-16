import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: defaultContacts,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        const newContact = action.payload;
        state.items.push(newContact);
      },
    },

    deleteContact(state, action) {
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const persistedContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
