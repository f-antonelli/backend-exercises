import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import ProtectedRoute from '../components/ProtectedRoute';
import { routes } from './routes';

const Navigation = () => {
  return (
    <>
      <Navbar />
      <ProtectedRoute>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </ProtectedRoute>
    </>
  );
};

export default Navigation;
