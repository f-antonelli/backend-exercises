import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { routes } from './routes';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
