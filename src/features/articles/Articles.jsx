/** Display the flow of articles to scroll. default page. */
import { useEffect, useState } from 'react';
import { fetchPopular } from '../../services/redditServices';
import { Card } from '../../components/Card/Card';
import styles from './articles.module.css';

export const Articles =  () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchArticles = async () => {
            const articles = await fetchPopular();
            setArticles(articles);
        };
        fetchArticles();
    }, []);

    return (
        <div className={styles.articlesContainer}>
            <ul className={styles.ArticlesList}>
                {articles && articles.map((article, index) => (
                    <li key={index} className={styles.ArticleItem}>
                        <Card article = {article.data} />
                    </li>
                ))}
            </ul>
        </div>
    );
};