import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

export const routes = [
  {
    to: '/',
    path: '/',
    Component: HomePage,
    name: 'Home',
  },
  {
    to: '/login',
    path: '/login',
    Component: LoginPage,
    name: 'Login',
  },
  {
    to: '/register',
    path: '/register',
    Component: RegisterPage,
    name: 'Register',
  },
  {
    to: '/products',
    path: '/products',
    Component: ProductsPage,
    name: 'Products',
  },
  {
    to: '/cart',
    path: '/cart',
    Component: CartPage,
    name: 'Cart',
  },
];
