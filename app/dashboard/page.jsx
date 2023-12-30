import dynamic from 'next/dynamic';
const React = dynamic(()=>import('react')) 
import Card from '../ui/dashboard/card/card'
import styles from '../ui/dashboard/dashboard.module.css'
import Transaction from '../ui/dashboard/transaction/transaction'
import Chart from '../ui/dashboard/chart/chart'
import Footer from '../ui/dashboard/foooter/footer'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card/>
          <Card/>
          <Card/>
      </div>
      <Transaction/>
      <Chart/>
      </div>
      <div className={styles.side}>
      <Rightbar/>
      </div>
    </div>
  )
}

export default Dashboard