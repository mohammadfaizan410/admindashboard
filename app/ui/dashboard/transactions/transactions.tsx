import styles from './transactions.module.css';
import Image from 'next/image';
export default function Transactions() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transaction</h2>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/vercel.svg" alt="user" width={40} height={40} className={styles.userImage}/>
                            <div className={styles.userName}>John Doe</div>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.pending} ${styles.status}`}>pending</span>
                        </td>
                        <td>12/12/2021</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/vercel.svg" alt="user" width={40} height={40} className={styles.userImage}/>
                            <div className={styles.userName}>John Doe</div>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.done} ${styles.status}`}>pending</span>
                        </td>
                        <td>12/12/2021</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/vercel.svg" alt="user" width={40} height={40} className={styles.userImage}/>
                            <div className={styles.userName}>John Doe</div>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.cancelled} ${styles.status}`}>pending</span>
                        </td>
                        <td>12/12/2021</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/vercel.svg" alt="user" width={40} height={40} className={styles.userImage}/>
                            <div className={styles.userName}>John Doe</div>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.pending} ${styles.status}`}>pending</span>
                        </td>
                        <td>12/12/2021</td>
                        <td>$200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/vercel.svg" alt="user" width={40} height={40} className={styles.userImage}/>
                            <div className={styles.userName}>John Doe</div>
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.pending} ${styles.status}`}>pending</span>
                        </td>
                        <td>12/12/2021</td>
                        <td>$200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}