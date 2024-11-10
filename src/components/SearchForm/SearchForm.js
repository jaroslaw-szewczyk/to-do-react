import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {

  const dispatch = useDispatch();

  const [searchPhrase, setSearchPhrase] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'SEARCH', payload: {searchPhrase}});
  }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder='Search...' onChange={e => setSearchPhrase(e.target.value)}/>
            <Button>
              <span className='fa fa-search'/>
            </Button>
        </form>
    );
  };

  export default SearchForm;