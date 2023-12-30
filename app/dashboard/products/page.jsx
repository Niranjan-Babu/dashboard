import Search from '@/app/ui/dashboard/search/search'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Link from 'next/link'
import noproduct from '@/public/noproduct.jpg'
import Image from "next/image"
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { fetchBlog} from '@/app/lib/data'
import { deleteBlog } from '@/app/lib/action'

const ProductsPage =async({searchParams}) => {
  const  q = searchParams?.q||"";
  const page = searchParams?.page||1;
  const {blogs,count} = await fetchBlog(q,page);

  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search for products"}/>
      </div>
      <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>User Email</td>
              <td>Created</td>
              <td>Action</td>
            </tr>
            
          </thead>
          <tbody>
            {blogs?.map((product)=>(
            <tr key={product.id}>
            <td>
              <div className={styles.product}>
                  {product.title}
              </div>
              </td>
              <td>{product.createremail}</td>
              <td>{product.createdAt?.toString().slice(4,13)}</td>
              
              
              <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/products/${product.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <form action={deleteBlog}>
                  <input name='id' value={product.id} hidden/>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </form>
                </div>
              </td>
              </tr>
              ))}
          </tbody>
        
      </table>
      <Pagination count={count}/>
    </div>
  )
}

export default ProductsPage