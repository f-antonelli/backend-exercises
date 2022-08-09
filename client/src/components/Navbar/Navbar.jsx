import logo from '../../assets/logo.png';
import { routes } from '../../routes/routes';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <img src={logo} className={styles.img} alt='logo' />
        <ul className={styles.boxlinks}>
          {routes.map(({ to, name }) => (
            <li key={to} className={styles.links}>
              <NavLink to={to} className={styles.link}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
