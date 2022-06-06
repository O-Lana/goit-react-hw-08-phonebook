import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending]: state => {
      state.error = null;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected]: (state, action) => {
      state.error = !action.payload.message
        ? 'User registration failed'
        : action.payload.message;
    },
    [authOperations.logIn.pending]: state => {
      state.error = null;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected]: (state, action) => {
      state.error = !action.payload.message
        ? 'Authorization failed. Please check you email and password.'
        : action.payload.message;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.refreshUser.pending]: state => {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.refreshUser.rejected]: state => {
      state.isFetchingCurrentUser = false;
    },
  },
});
