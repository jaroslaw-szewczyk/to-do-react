import styles from './Lists.module.scss';

import ListForm from '../ListForm/ListForm';

import { useSelector, useDispatch } from 'react-redux';
import { getAllLists, removeList } from '../../redux/listsRedux';
import { Link } from 'react-router-dom';


const Lists = () => {

  const dispatch = useDispatch();
  
  const lists = useSelector(state => getAllLists(state));

  const idListToRemove = (listId) => {
    dispatch(removeList(listId));
  }

  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>
      {lists.map(list => (
        <Link key={list.id} to={`/list/${list.id}`} className={styles.listLink}>
          <h3>{list.title}</h3>
          <p>{list.description}</p>
          <i className={`fa fa-trash ${styles.listtTrashIcon}`} onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            idListToRemove(list.id);
          }}></i>
        </Link>
      ))}
      <ListForm />
    </section>
  );
};


export default Lists;
