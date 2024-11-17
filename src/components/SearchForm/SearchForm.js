import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchiString } from '../../redux/store';

const SearchForm = () => {

  const setSearchPhraseFromState = useSelector(state => state.searchPhrase);

  const dispatch = useDispatch();

  const [searchPhrase, setSearchPhrase] = useState(setSearchPhraseFromState);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchiString({searchPhrase}));
  }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder='Search...' 
              value={searchPhrase}
              onChange={e => setSearchPhrase(e.target.value)}
              />
            <Button>
              <span className='fa fa-search'/>
            </Button>
        </form>
    );
  };

  export default SearchForm;