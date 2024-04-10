import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css"
export default function addProduct(){
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" placeholder="title" name="title" required />
                <select name="category" required>
                    <option value="general">Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" placeholder="price" name="price" required />
                <input type="number" placeholder="stock" name="stock" required />
                <input type="text" placeholder="color" name="color" required />
                <input type="text" placeholder="size" name="size" required />
                <textarea placeholder="description" id="description" rows={16} name="description" required />
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}