import { Navigate } from 'react-router-dom';

// Redirect to Home component
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
