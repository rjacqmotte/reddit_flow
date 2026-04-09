/** form input for searchTerm */

import styles from './SearchForm.module.css';

export const SearchForm = () => {
  return (
    <form className={styles.menuSearchForm}>
      <input className={styles.menuSearchInput} type="text"></input>
    </form>
  );
};
