import React from 'react'
import styles from'./transactoin.module.css'
import Image from 'next/image'
import noavatar from '@/public/noavatar.png'
const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transaction</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}><Image 
                src={noavatar}
                alt="" 
                width={40} 
                height={40}
                className={styles.userImage}
                priority={true} 
              />
              Niranjan</div>
            </td>
            <td >
              <span className={`${styles.status} ${styles.pending}`}>pending</span>
            </td>
            <td>14.02.2023</td>
            <td>$3.20 </td>
          </tr><tr>
            <td>
              <div className={styles.user}><Image 
                src={noavatar}
                alt="" 
                width={40} 
                height={40}
                className={styles.userImage}
                priority={true} 
              />
              Niranjan</div>
            </td>
            <td >
              <span className={`${styles.status} ${styles.cancelled}`}>cancelled</span>
            </td>
            <td>14.02.2023</td>
            <td>$3.20 </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}><Image 
                src={noavatar}
                alt="" 
                width={40} 
                height={40}
                className={styles.userImage}
                priority={true} 
              />
              Niranjan</div>
            </td>
            <td >
              <span className={`${styles.status} ${styles.pending}`}>pending</span>
            </td>
            <td>14.02.2023</td>
            <td>$3.20 </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}><Image 
                src={noavatar}
                alt="" 
                width={40} 
                height={40}
                className={styles.userImage}
                priority={true} 
              />
              Niranjan</div>
            </td>
            <td >
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td>14.02.2023</td>
            <td>$3.20 </td>
          </tr>
        </tbody>
      </table>

      </div>
  )
}

export default Transaction