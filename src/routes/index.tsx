import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';
import { Home, Login } from '../pages';
import { ProtectedRoute } from '../HOCs/ProtectedRoute';

export const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return (
    <>
      {
        // isAuthLoading&&
        <Routes>
          {/* <Route index element={<Login />} /> */}
          <Route path="login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      }
    </>
  );
};
