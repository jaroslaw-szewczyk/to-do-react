import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredCards, removeColumn } from '../../redux/columnsReducer';

const Column = props => {
  
  const dispatch = useDispatch();

  const cards = useSelector(state => getFilteredCards(state, props.id));
  const idColumnToRemove = () => {
    dispatch(removeColumn(props.id));
  }

  return(
    <article className={styles.column}>
      <i className={`${styles.trashIcon} fa fa-trash`} onClick={idColumnToRemove}></i>
      <span className={styles.icon + ' fa fa-' + props.icon}></span><h2 className={styles.title}>{props.title}</h2>
      <ul className={styles.cards}>
        {cards.map(card => 
          <Card 
          key={card.id} 
          {...card} />)}
      </ul>
      <CardForm columnId={props.id}/>
    </article>
  );
};

export default Column;