/** Display the flow of articles to scroll. default page. */
import { Card } from '../../components/Card/Card';
import styles from './articles.module.css';

export const Articles =  ({ articles }) => {


    return (
        <div className={styles.articlesContainer}>
            <ul className={styles.ArticlesList}>
                {articles &&articles.map((article, index) => (
                    <li key={index} className={styles.ArticleItem}>
                        <Card article = {article.data} />
                    </li>
                ))}
            </ul>
        </div>
    );
};