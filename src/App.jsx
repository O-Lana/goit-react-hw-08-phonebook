import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomeView } from './views/HomeView';
import { RegisterView } from './views/RegisterView';
import { LoginView } from 'views/LoginView';
import { ContactsView } from 'views/ContactsView';
import { errorUser, getIsFetchingCurrentUser } from 'redux/auth/authSelector';
import authOperations from 'redux/auth/authOperation';
import PublicRoute from 'components/Routes/PublicRoute';
import PrivateRoute from 'components/Routes/PrivateRoute';
import { Toaster, toast } from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const error = useSelector(errorUser);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast(error);
    }
  }, [error]);

  return (
    !isFetchingCurrentUser && (
      <>
        {error && (
          <Toaster
            position="top-center"
            toastOptions={{
              className: '',
              style: {
                border: '1px solid #f54d7f',
                padding: '16px',
                color: '#f54d7f',
              },
            }}
            autoClose={3000}
          />
        )}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomeView />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectPath="/login">
                  <ContactsView />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute redirectPath="/contacts" restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute redirectPath="/contacts" restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="*"
              element={
                <PublicRoute>
                  <Navigate to="/contacts" />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      </>
    )
  );
};
