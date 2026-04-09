import styles from './Card.module.css';

export const Card = ({ title, body, imageUrl }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImageContainer}>
                <img 
                    className={styles.cardImage}
                    src={imageUrl}
                    alt='article image'/>
            </div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
};