import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {

  const { cards, searchPhrase }  = useSelector(state => ({
    cards: state.cards,
    searchPhrase: state.searchPhrase.toLowerCase()
  }));
  
  const filterCards = cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searchPhrase));

  return(
    <article className={styles.column}>
      <span className={styles.icon + ' fa fa-' + props.icon}></span><h2 className={styles.title}>{props.title}</h2>
      <ul className={styles.cards}>
        {filterCards.map(card => 
          <Card 
          key={card.id} 
          {...card} />)}
      </ul>
      <CardForm columnId={props.id}/>
    </article>
  );
};

export default Column;