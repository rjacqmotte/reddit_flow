// Card wrap and display each article in the articles flow view.
// it detects overflow.  
import styles from './Card.module.css';
import { useRef, useEffect, useState } from 'react';

export const Card = ({ id, title, body, imageUrl }) => {
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
  }, [title, body, imageUrl]);

  return (
    <div ref={viewRef} className={styles.cardContainer}>
      <div ref={contentRef} className={styles.cardContentContainer}>
        <h2>{title}</h2>
        {imageUrl && (
          <div className={styles.cardImageContainer}>
            <img
              className={styles.cardImage}
              src={imageUrl}
              alt="article image"
            />
          </div>
        )}
        <p>{body}</p>
        {hasOverFlow && (
          <div className={styles.cardExpendZone}>
            <button className={styles.cardExpendButton}>Read Article</button>
          </div>
        )}
      </div>
    </div>
  );
};
