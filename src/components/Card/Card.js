import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/store';

const Card = props => {

  const dispatch = useDispatch();

  const setFavorite = () => {
    dispatch(addFavorite({id: props.id}));
  }

  //nalezy zmienieć isFavorite na true lub false;

  return (
    <li className={styles.card}>{props.title}
      <i className={clsx('fa fa-star-o', props.isFavorite === true && styles.active)} onClick={setFavorite}></i>
    </li>
  );
};

export default Card;