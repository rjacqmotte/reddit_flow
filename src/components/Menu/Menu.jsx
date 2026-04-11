/** in the menu, there is the main interactions with de user:
 * - searchTerm;
 * - navButton;
 * - maybe others things like parameters or log session out...
 * This menu is thinking mobil first and aim to offer nice ux on mobil
   */

import { SearchForm } from '../SearchForm/SearchForm';
import styles from './Menu.module.css';

export const Menu = () => {
    return (
        <div className={styles.menuContainer}>
            <SearchForm/>
        </div>
    );
};