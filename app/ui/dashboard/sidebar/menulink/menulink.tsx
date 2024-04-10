"use client"
import { usePathname } from "next/navigation";
import styles from "./menulink.module.css";
import Link from "next/link";
export default function MenuLink({props}: {
    props: {
        icon: any;
        title: string;
        link: string;
    }
}){
    const pathname = usePathname();
    return(
       <Link href={props.link} className={`${styles.container } ${pathname === props.link && styles.active}`}>
        {props.icon}
        {props.title}
       </Link>
    )
}