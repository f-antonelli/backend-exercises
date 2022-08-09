import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';

export const routes = [
  {
    to: '/',
    path: '/',
    Component: HomePage,
    name: 'Home',
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
