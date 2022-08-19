import { Routes, Route } from 'react-router-dom';
import { AuthenticatedRoutes } from '../Authenticated/Authenticated.routes';

export const Gateway: React.FC = () => {
  return (
    <Routes>
      <Route path='*' element={<AuthenticatedRoutes />} />
    </Routes>
  );
};
