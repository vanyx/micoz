import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';
import Dashcam from '../pages/Dashcam';
import Parameters from '../pages/Parameters';
import { useAuth } from '../context/AuthContext';
import AppLayout from '../layouts/AppLayout';

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />}
      />

      {isAuthenticated ? (
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashcam" element={<Dashcam />} />
          <Route path="/parametres" element={<Parameters />} />
        </Route>
      ) : (
        <>
          <Route path="/dashboard" element={<Navigate to="/" replace />} />
          <Route path="/dashcam" element={<Navigate to="/" replace />} />
          <Route path="/parametres" element={<Navigate to="/" replace />} />
        </>
      )}
    </Routes>
  );
}