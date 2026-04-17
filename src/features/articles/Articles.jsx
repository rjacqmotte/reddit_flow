/** Display the flow of articles to scroll. default page. */
import { Card } from '../../components/Card/Card';
import styles from './articles.module.css';

export const Articles =  ({ articles = {} }) => {
    return (
        <div className={styles.articlesContainer}>
            <ul className={styles.ArticlesList}>
                {Object.values(articles || {}).map((article) => (
                    <li key={article.id} className={styles.ArticleItem}>
                        <Card 
                            title={article.title}
                            body={article.body}
                            imageUrl={article.imageUrl}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};