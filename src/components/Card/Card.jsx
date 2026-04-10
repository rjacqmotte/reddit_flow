import styles from './Card.module.css';

export const Card = ({ title, body, imageUrl }) => {
    return (
        <div className={styles.cardContainer}>
            <h2>{title}</h2>
            { imageUrl && (
                <div className={styles.cardImageContainer}>
                <img 
                    className={styles.cardImage}
                    src={imageUrl}
                    alt='article image'/>
            </div>
            )}
            <p>{body}</p>
            <div className={styles.cardExpendZone}>
                {/* <button className={styles.cardExpendButton}/> */}
            </div>
        </div>
    )
};