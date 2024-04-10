import Link from "next/link";
import styles from "../../ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { UserInterface } from "@/app/models/models";
import { getUsers, totalUsers } from "@/app/lib/data";
export default async function UsersPage({searchParams}: {
    searchParams: {
        q?: string,
        page?:string,
    }
}) {
    const query = searchParams.q || "";
    const page = searchParams.page || "1";
    const allusers: UserInterface[] = await getUsers(query,page);
    const totalUsersCount: number = await totalUsers();
    console.log(query)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search props={{
                    placeholder: "Search users..."
                }
                }/>
                <Link href="/dashboard/users/add">
                <button className={styles.addButton}>Add User</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allusers.map((user) => {
                            return (
                                <tr key={user._id}>
                                    <td>
                                        <div className={styles.user}>
                                        <Image src="/vercel.svg" alt="user" width={40} height={40} className={styles.userImage}/>
                                        <div className={styles.userName}>{user.username.split("-")[0]}</div>
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.email}</td>
                                    <td className={styles.role}>{user.user_type}</td>
                                    <td>
                                        <div className={styles.buttons}>
                                        <Link href={`/dashboard/users/${user.id}`}>
                                            <div className={`${styles.viewButton} ${styles.button}`}>View</div>
                                        </Link>
                                        <Link href="">
                                        <button className={`${styles.deleteButton} ${styles.button}`}>Delete</button>
                                        </Link>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>
            <Pagination
                params={{
                   totalUsers: totalUsersCount
                }}
            />
        </div>
    );
}