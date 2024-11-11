import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <nav>
      <Container className={styles.navContainer}>
        <a><i className={`fa fa-tasks ${styles.navIcon}`}></i></a>
        <ul>
          <li><a href='home'>home</a></li>
          <li><a href='favorite'>favorite</a></li>
          <li><a href='about'>about</a></li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;