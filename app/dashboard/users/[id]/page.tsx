import styles from "@/app/ui/dashboard/users/singleuser/singleuser.module.css";
import Image from "next/image";
export default function SingleUser() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imageContainer}>
                <Image src="/vercel.svg" alt="user image" fill />
            </div>
            <div>Jhon Doe</div>
        </div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
            <label>Username</label>
            <input type="text" placeholder="jhone doe" name="username" required />
            <label>Email</label>
            <input type="email" placeholder="jhonedoe@gmail.com" name="email" required />
            <label>Password</label>
            <input type="password" placeholder="jhonedoe@gmail.com" name="password" required />
            <label>Phone</label>
            <input type="text" placeholder="phone" name="username" required />
            <label>Address</label>
            <textarea placeholder="address" id="address" rows={3} name="address" required />
            <label>Is Admin</label>
            <select name="usertype" required defaultValue={"yes"}>
                <option value="general">is Admin</option>
                <option value="yes" >Yes</option>
                <option value="no">No</option>
            </select>
            <label>Is Active</label>
            <select name="isActive" required defaultValue={"no"}>
                <option value="general">is Active</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <button type="submit" className={styles.button}>Update User</button>
            </form>
        </div>
    </div>
  );
}