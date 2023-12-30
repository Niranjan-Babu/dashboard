import styles from '@/app/ui/dashboard/products/singleproduct/singleproduct.module.css'
import { updateBlog } from '@/app/lib/action'
import { fetchSingleBlog } from '@/app/lib/data';

const SingleProductPage = async({params}) => {
  const {id} = params;
  const blog = await fetchSingleBlog(id);
  return (
    <div className={styles.container}>
    <div className={styles.formContainer}>
      <form action={updateBlog} className={styles.form}>
        <input type="text" hidden name='id' value={blog.id}/>
        <label >Title</label>
        <input type="text" name='title' placeholder={blog.title}/>
        <label >User Email</label>
        <input type="email" name='createremail' placeholder={blog.createremail}/>
        <label >Blog Content</label>
        <textarea type="text" name='Address'row={20}  placeholder={blog.content} disabled></textarea>
        <label >Is Admin ?</label>
        <select name='category' id='category'>
          <option value={blog.category}>{blog.category}</option>
          <option value="general">General</option>
          <option value="ittech">IT</option>
          <option value="others">Others</option>
        </select>   
        <button>Update</button>
        </form>
    </div>
</div>
  )
}

export default SingleProductPage