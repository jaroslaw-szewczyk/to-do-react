import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addFavorite, removeCard } from '../../redux/cardsReducer';

const Card = props => {

  const dispatch = useDispatch();

  const setFavorite = () => {
    dispatch(addFavorite( props.id ));
  }

  const idCardToRemove = () => {
    dispatch(removeCard(props.id));
  }

  return (
    <li className={styles.card}>{props.title}
      <div>
        <i className={clsx('fa fa-star-o', props.isFavorite === true && styles.active)} onClick={setFavorite}></i>
        <i className="fa fa-trash" onClick={idCardToRemove}></i>
      </div>
    </li>
  );
};

export default Card;