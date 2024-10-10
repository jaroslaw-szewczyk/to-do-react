import styles from './ColumnForm.module.scss'
import { useState } from 'react';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {

  const [value, setValue] = useState('');
  const [iconValue, setIconValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.action({title: value, icon: iconValue});
    setValue('');
    setIconValue('');
  }

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label>Title:</label> 
      <TextInput type="text" value={value} onChange={e => setValue(e.target.value)}/>
      <label>Icon:</label>
      <TextInput type="text" value={iconValue} onChange={e => setIconValue(e.target.value)}/>
      <Button>add column</Button>
    </form>
  );
};

export default ColumnForm;