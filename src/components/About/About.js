import styles from './About.module.scss';
import Container from '../Container/Container'

const About = () => {
  return(
    <Container>
      <div className={styles.wrapper}>
        <h1>about</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </Container>
  );
};

export default About;