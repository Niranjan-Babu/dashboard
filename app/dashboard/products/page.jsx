import Search from '@/app/ui/dashboard/search/search'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Link from 'next/link'
import noproduct from '@/public/noproduct.jpg'
import Image from "next/image"
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { fetchProduct } from '@/app/lib/data'
import { deleteProduct } from '@/app/lib/action'

const ProductsPage =async({searchParams}) => {
  const  q = searchParams.q||"";
  const products = await fetchProduct(q);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search for products"}/>
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product)=>(
            <tr key={product.id}>
            <td>
              <div className={styles.product}>
                <Image 
                  src={noproduct} 
                  width={40} 
                  height={40} 
                  className={styles.productImage}/>
                  {product.title}
              </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4,13)}</td>
              <td>{product.stock}</td>
              
              <td>
                <div className={styles.buttons}>
                <Link href='/dashboard/products/test'>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <form action={deleteProduct}>
                  <input name='id' value={product.id} hidden/>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </form>
                </div>
              </td>
              </tr>
              ))}
          </tbody>
        
      </table>
      <Pagination/>
    </div>
  )
}

export default ProductsPage