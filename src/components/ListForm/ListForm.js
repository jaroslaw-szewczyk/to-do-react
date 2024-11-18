import styles from './ListForm.module.scss';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addList } from '../../redux/store';

const ListForm = (props) => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({title, description}));
    setTitle('');
    setDescription('');
  }

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <label>Title:</label> 
      <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)}/>
      <label>Description:</label>
      <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)}/>
      <Button>add list</Button>
    </form>
  );
};

export default ListForm;
