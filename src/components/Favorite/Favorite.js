import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsReducer';

const Favorite = () => {

  const cards = useSelector(state => getFavoriteCards(state));
  console.log(cards);

  return(
    <section>
      <PageTitle>favorite</PageTitle>
      {
        (cards.length === 0) 
          ? 
            <p>No cards…</p> 
          : 
          <ul className={styles.favoriteList}>
          {cards.map(card => 
            <Card 
            key={card.id} 
            {...card} />)}
          </ul>
      }
    </section>
  );
};

export default Favorite;