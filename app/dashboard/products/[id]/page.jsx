import styles from '@/app/ui/dashboard/products/singleproduct/singleproduct.module.css'
import Image from 'next/image'

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt="" width={280} height={280} fil/>
            </div>
            Iphone
        </div>
        <div className={styles.formContainer}>
          <form action='' className={styles.form}>
            <label >Title</label>
            <input type="text" name='Title' placeholder='Niranjan'/>
            <label >Prize</label>
            <input type="text" name='prize' placeholder='9000'/>
            <label >Stock</label>
            <input type="number" name='stock' />
            <label >Color</label>
            <input type="text" name='color' placeholder='Blue'/>
            <label >Address</label>
            <textarea type="text" name='desc' placeholder='Description'/>
            
            <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleProductPage