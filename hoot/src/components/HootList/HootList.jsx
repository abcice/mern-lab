import HootListItem from '../HootListItem/HootListItem';
import styles from './HootList.module.scss';

export default function HootList({ hoots }) {
  const hootItems = hoots.map(h => (
    <HootListItem 
      hoot={h} 
      key={h._id} 
    />
  ));

  return (
    <main className={styles.HootList}>
      {hootItems.length ? (
        hootItems
      ) : (
        <span className={styles.noHoots}>No previous hoots</span>
      )}
    </main>
  );
}
