// import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomeView } from 'views/HomeView';
import { RegisterView } from 'views/RegisterView';
import { LoginView } from 'views/LoginView';
import { ContactsView } from 'views/ContactsView';
import authOperations from 'redux/auth/authOperation';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomeView />} /> */}
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
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            }
          />
          {/* <Route path="contacts" element={<ContactsView />} /> */}
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route path="register" element={<RegisterView />} />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginView />
              </PublicRoute>
            }
          />
          {/* <Route path="login" element={<LoginView />} /> */}
          <Route
            path="*"
            element={
              <PublicRoute>
                <Navigate to="/" />
              </PublicRoute>
            }
          />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
};
