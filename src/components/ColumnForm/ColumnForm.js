import styles from './ColumnForm.module.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'ADD_COLUMN', payload: {title, icon}});
    setTitle('');
    setIcon('');
  }

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label>Title:</label> 
      <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)}/>
      <label>Icon:</label>
      <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)}/>
      <Button>add column</Button>
    </form>
  );
};

export default ColumnForm;