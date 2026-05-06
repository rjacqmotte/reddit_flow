/** Display the flow of articles to scroll. default page. */
import { useEffect, useState } from 'react';
import { fetchPopular } from '../../services/redditServices';
import { Card } from '../../components/Card/Card';
import styles from './articles.module.css';

export const Articles =  () => {
    const [articles, setArticles] = useState([]);
    const [fetchError, setFetchError] = useState(false);
    useEffect(() => {
        const fetchArticles = async () => {
            try {
            const articles = await fetchPopular();
            setArticles(articles);
            } catch(error) {
                console.error(error.message);
                setFetchError(true);
            };
        };
        fetchArticles();
    }, []);

    return (
        <div className={styles.articlesContainer}>
            { fetchError ? <h2>Error - Something get wrong : /</h2> : (<ul className={styles.ArticlesList}>
                {articles && articles.map((article, index) => (
                    <li key={index} className={styles.ArticleItem}>
                        <Card article = {article.data} />
                    </li>
                ))}
            </ul>)
            }
        </div>
    );
};