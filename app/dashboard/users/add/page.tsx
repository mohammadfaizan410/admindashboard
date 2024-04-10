import styles from "@/app/ui/dashboard/users/addUser/adduser.module.css";
export default function addUser(){
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" placeholder="name" name="name" required />
                <input type="email" placeholder="email" name="email" required />
                <input type="password" placeholder="password" name="password" required />
                <input type="phone" placeholder="phone" name="phone" />
                <select name="usertype" required>
                    <option value="general">is Admin</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <select name="isActive" required>
                    <option value="general">is Active</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <textarea placeholder="address" id="address" rows={16} name="description" required />
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}