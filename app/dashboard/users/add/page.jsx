import { addUser } from '@/app/lib/action'
import styles from '@/app/ui/dashboard/users/addUserPage.module.css'

const AddUserPage = () => {
  return (
    <div className={styles.container}>
        <form action={addUser}className={styles.form} autocomplete="off">
          <input type='text' placeholder='UserName' name='username' required/>
          <input type='email' placeholder='Email' name='email' required/>
          <input type='password'  placeholder='Password' name='password' required/>
          <input type='tel' placeholder='Phone Number' name='phonenumber' required/>
          <select name='cat' id='cat'>
            <option value="">Is Admin?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
            
          </select>
          <select name='cat' id='cat'>
            <option value="">Is Active?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
            
          </select>
          <textarea  name='address' id='address'    rows="16"
            placeholder='Address'></textarea>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddUserPage