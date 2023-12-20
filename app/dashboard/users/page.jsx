import Search from '@/app/ui/dashboard/search/search'
import styles from '@/app/ui/dashboard/users/users.module.css'
import Link from 'next/link'
import noavatar from '@/public/noavatar.png'
import Image from "next/image"
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { fetchUser } from '@/app/lib/data'
import { deleteUser } from '@/app/lib/action'

const UsersPage = async({searchParams}) => {
  const  q = searchParams.q||"";
  const users = await fetchUser(q);
  

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search for user..."}/>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user)=>(
            <tr key={user.id}>
            <td>
              <div className={styles.user}>
                <Image 
                  src={noavatar} 
                  width={40} 
                  height={40} 
                  className={styles.userImage}/>
                  {user.username}
              </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4,16)}</td>
              <td>{user.isAdmin ? "Admin":"Client"}</td>
              <td>{user.isActive ? "Active" :"Not Active"}</td>
              <td>
                <div className={styles.buttons}>
                <Link href='/dashboard/users/test'>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <form action={deleteUser}>
                  <input name='id' value={user.id} hidden/>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </form>                </div>
              </td>
              </tr>
              ))}
          </tbody>
        
      </table>
      <Pagination/>
    </div>
  )
}

export default UsersPage