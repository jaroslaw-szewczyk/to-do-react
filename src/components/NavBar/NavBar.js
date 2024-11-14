import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Container className={styles.navContainer}>
        <a><i className={`fa fa-tasks ${styles.navIcon}`}></i></a>
        <ul>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/'>home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='favorite'>favorite</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='about'>about</NavLink></li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;