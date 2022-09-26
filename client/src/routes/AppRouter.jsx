import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Navigation from './Navigation';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/*' element={<Navigation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
