// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = ({ Child }) => {
  /*const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
*/
  return Child;
};
