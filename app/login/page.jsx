import React from 'react'
import styles from '@/app/ui/login/login.module.css'

const Loginpage = () => {
  return (
    <div className={styles.container}>
      
      <form className={styles.form}>
      <h1>Login</h1>
        <input type='text' name='email' />
        <input type='password' name='password'/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Loginpage