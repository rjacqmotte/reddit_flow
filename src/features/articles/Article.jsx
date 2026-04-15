// display one article with all its comments and metadata.
import { useParams } from "react-router-dom";
import styles from './article.module.css';

export const Article = ({ articles }) => {
    const { articleId } = useParams();
    const { imageUrl, title, body } = articles[articleId];
    
    return (
        <article className={styles.articleConatiner}>
            {imageUrl && (
                <div className={styles.articleImageContainer}>
                <img src={imageUrl} alt='article image'/>
            </div>
            )}
            <h2>{title}</h2>
            <p>{body}</p>
        </article>
    );
};
