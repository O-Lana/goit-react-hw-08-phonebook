// import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomeView } from 'views/HomeView';
import { RegisterView } from 'views/RegisterView';
import { LoginView } from 'views/LoginView';
import authOperations from 'redux/auth/authOperation';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
