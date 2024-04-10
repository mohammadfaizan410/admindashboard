import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/products/products.module.css"
export default function ProductsPage() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search props={{
                    placeholder: "Search Products..."
                }
                }/>
                <Link href="/dashboard/products/add">
                <button className={styles.addButton}>Add Product</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Created At</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                            <Image src="/vercel.svg" alt="user" width={40} height={40} className={styles.productImage}/>
                            <div className={styles.productname}>Iphone 13</div>
                            </div>
                        </td>
                        <td>This is the best product</td>
                        <td>{Date.now()}</td>
                        <td>1990</td>
                        <td>100</td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/dashboard/products/test">
                                <button className={`${styles.viewButton} ${styles.button}`}>View</button>
                            </Link>
                            <Link href="">
                            <button className={`${styles.deleteButton} ${styles.button}`}>Delete</button>
                            </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    );
}