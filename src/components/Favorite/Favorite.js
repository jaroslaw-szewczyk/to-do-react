import styles from './Favorite.module.scss';
import Container from '../Container/Container'

const Favorite = () => {
  return(
    <Container>
      <div className={styles.wrapper}>
        <h1>Favorite</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </Container>
  );
};

export default Favorite;