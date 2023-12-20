import { addProduct } from '@/app/lib/action'
import styles from '@/app/ui/dashboard/products/addProductPage.module.css'

const AddProductPage = () => {
  return (
    <div className={styles.container}>
        <form action={addProduct} className={styles.form} autocomplete="off">
          <input type='text' placeholder='Title' name='title' required/>
          <select name='cat' id='cat'>
            <option value="">Choose a Category..</option>
            <option value="Kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <input type='number' inputMode='numeric' placeholder='Price' name='price' required/>
          <input type='number' inputMode='numeric' placeholder='Stock' name='stock' required/>
          <input type='text' placeholder='Color' name='color' required/>
          <input type='text' placeholder='Size' name='size' required/>
          <textarea  name='desc' id='desc'    rows="16"
            placeholder='Description'></textarea>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddProductPage