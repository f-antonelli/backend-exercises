import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { routes } from './routes';

const Navigation = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  );
};

export default Navigation;
