import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
