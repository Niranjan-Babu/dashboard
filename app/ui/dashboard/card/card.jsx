import {MdSupervisedUserCircle} from 'react-icons'
import styles from './card.module.css';
const Card = () => {
  return (
    <div className={styles.container}>

      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.273</span>
        <span className={styles.detial}>
          <span className={styles.positive}>12%</span>more than previous week
        </span>
      </div>
    </div>
  )
}

export default Card