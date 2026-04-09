/** Nav button to go to topics. Also logic and animation for beautiful mobil interface.
 * it could manage others menus and buttons, like parameters and log session out.
 */

import styles from './NavButton.module.css';

export const NavButton = () => {
    return (
        <button className={styles.NavButtonTopics}>Topics</button>
    );
};
