import styles from './HootListItem.module.scss';

export default function HootListItem({ hoot }) {
  return (
    <div className={styles.HootListItem}>
      <p className={styles.text}>{hoot.text}</p>
      <span className={styles.author}>— {hoot.user?.name || "Anonymous"}</span>
    </div>
  );
}
