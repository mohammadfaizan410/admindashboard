import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
export default function SingleProduct() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imageContainer}>
                <Image src="/vercel.svg" alt="user image" fill />
            </div>
            <div>Iphone</div>
        </div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
            <label>Title</label>
            <input type="text" placeholder="jhone doe" name="title" required />
            <label>Price</label>
            <input type="number" placeholder="eg:100" name="price" required />
            <label>stock</label>
            <input type="number" placeholder="jhonedoe@gmail.com" name="stock" required />
            <label>Color</label>
            <input type="text" placeholder="enter color" name="color" required />
            <label>Size</label>
            <input type="number" placeholder="size" name="number" required />
           
            <label>Category</label>
            <select name="usertype" required defaultValue={"yes"}>
                <option value="kitchen">kitchen</option>
                <option value="Computer" >Computer</option>
           </select>
            <label>Description</label>
            <textarea name="description" rows={5} required placeholder="description"></textarea>
            <button type="submit" className={styles.button}>Update Product</button>
            </form>
        </div>
    </div>
  );
}