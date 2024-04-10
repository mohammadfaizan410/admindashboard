import type { Metadata } from "next"
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import styles from "../ui/dashboard/dashboard.module.css";

export const metadata: Metadata = {
  title: "Dashbaord",
  description: "Main dashboard page for the admin dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
      <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
      {children}
      </div>
    </div>
  );
}
