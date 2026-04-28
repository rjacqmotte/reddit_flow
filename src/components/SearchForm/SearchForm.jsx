/** form input for searchTerm */

import styles from './SearchForm.module.css';

export const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <input className={styles.searchInput} type="text"></input>
      <div className={styles.searchButtonsContainer}>
        <button className={`${styles.searchButton} btn btn-filled`} type='submit'>Find</button>
        <button className={`${styles.paramButton} btn btn-filled`} type='button'>...</button>
      </div>
      
    </form>
  );
};
