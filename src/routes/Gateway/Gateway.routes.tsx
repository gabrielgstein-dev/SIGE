import { Routes, Route } from 'react-router-dom';
import { AuthenticatedRoutes } from '../Authenticated/Authenticated.routes';
import { NotAuthenticatedRoutes } from '../NotAuthenticated/NotAuthenticated.routes';

export const Gateway: React.FC = () => {
  const token = '';

  if (!token) {
    return (
      <Routes>
        <Route path='*' element={<NotAuthenticatedRoutes />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path='*' element={<AuthenticatedRoutes />} />
    </Routes>
  );
};
