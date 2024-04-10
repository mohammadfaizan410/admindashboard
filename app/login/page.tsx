import styles from "@/app/ui/login/login.module.css"
export default function LoginPage() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h1>Login</h1>
                <input type="text" placeholder="username" name="username" required />
                <input type="password" placeholder="password" name="password" required />
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
}