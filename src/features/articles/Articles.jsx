/** Display the flow of articles to scroll. default page. */
import { Card } from '../../components/Card/Card';
import { mockArticles } from "../../mock/mockArticles";
import styles from './articles.module.css';

export const Articles =  () => {
    return (
        <div className='articlesContainer'>
            <ul className={styles.ArticlesList}>
                {Object.values(mockArticles).map((article) => (
                    <li key={article.id}>
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