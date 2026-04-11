/** form input for searchTerm */

import styles from './SearchForm.module.css';

export const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <input className={styles.searchInput} type="text"></input>
      <div className={styles.searchButtonsContainer}>
        <button className={styles.searchButton} type='submit'>Find</button>
        <button className={styles.paramButton} type='button'>...</button>
      </div>
      
    </form>
  );
};
