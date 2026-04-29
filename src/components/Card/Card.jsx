// Card wrap and display each article in the articles flow view.
// it detects overflow.
import styles from './Card.module.css';
import { useRef, useEffect, useState } from 'react';

export const Card = ({ article }) => {
  const contentRef = useRef(null);
  const viewRef = useRef(null);
  const [hasOverFlow, setHasOverFlow] = useState(false);

  useEffect(() => {
    // check if overflowed
    const content = contentRef.current;
    const view = viewRef.current;
    if (content && view) {
      setHasOverFlow(content.scrollHeight > view.clientHeight);
    }
  }, [article]);

  return (
    <div ref={viewRef} className={styles.cardContainer}>
      <div ref={contentRef} className={styles.cardContentContainer}>
        {/* Reddit renvoie parfois des valeurs spéciales ('self', 'default', 'nsfw', 'spoiler') à la place d'une URL. On les filtre pour éviter une image cassée. */}
        {article.thumbnail &&
          !['self', 'default', 'nsfw', 'spoiler'].includes(
            article.thumbnail
          ) && (
            <div className={styles.cardImageContainer}>
              <img
                className={styles.cardImage}
                src={article.thumbnail.replace(/&amp;/g, '&')}
                alt="article image"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        <div className={styles.cardText}>
          <h2>{article.title}</h2>
          <p>{article.subreddit}</p>
        </div>
        {hasOverFlow && (
          <div className={styles.cardExpendZone}>
            <button className={styles.cardExpendButton}>Read Article</button>
          </div>
        )}
      </div>
    </div>
  );
};
