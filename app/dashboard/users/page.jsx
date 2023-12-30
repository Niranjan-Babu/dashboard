import Search from '@/app/ui/dashboard/search/search'
import styles from '@/app/ui/dashboard/users/users.module.css'
import Link from 'next/link'
import noavatar from '@/public/noavatar.png'
import Image from "next/image"
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { fetchBlog,fetchUser } from '@/app/lib/data'
import { deleteBlog } from '@/app/lib/action'

const UsersPage = async({searchParams}) => {
  const  q = searchParams?.q||"";
  const page = searchParams?.page||1;
  const {users,count} = await fetchUser(q,page);
  

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search for user..."}/>
      </div>
      <table className={styles.table}>
          <thead>
            <tr>
              <td>Username</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {users?.map((user)=>(
            <tr key={user.id}>
            <td>
              <div className={styles.user}>
                <Image 
                  src={noavatar} 
                  width={40} 
                  height={40} 
                  className={styles.userImage}
                  priority={true} />
                  {user.creatername}
              </div>
              </td>
              <td>{user.createremail}</td>
              <td>{user.createdAt?.toString().slice(4,16)}</td>
              
              <td>
                <div className={styles.buttons}>
                <form action={deleteBlog}>
                  <input name='id' value={user.id} hidden/>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </form>                </div>
              </td>
              </tr>
              ))}
          </tbody>
        
      </table>
      <Pagination count={count}/>
    </div>
  )
}

export default UsersPage