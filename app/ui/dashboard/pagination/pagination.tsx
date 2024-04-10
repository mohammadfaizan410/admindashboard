"use client"
import styles from './pagination.module.css';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
export default function Pagination({params}: {
    params:{
        totalUsers:Number
    }
}) {
const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();
  const page = searchParams.get("page") || "1"
  const ITEM_PER_PAGE = 10;
  const hasprev = ITEM_PER_PAGE * (Number(page) - 1) > 0;
  const hasMorePages = ITEM_PER_PAGE * (+page) < params.totalUsers.valueOf();
  return (
        <div className={styles.container}>
            <button className={styles.button} disabled={!hasprev} onClick={(e) => {
                    e.preventDefault();
                    const updatedSearchParams = new URLSearchParams(searchParams);
                    updatedSearchParams.set('page', (Number(page) - 1).toString()) 
                    replace(`${pathname}?${updatedSearchParams}`);
                }
            }>Prev</button>
            <button
                className={styles.button}
                disabled={!hasMorePages}
                onClick={(e) => {
                    e.preventDefault();
                    const updatedSearchParams = new URLSearchParams(searchParams);
                    updatedSearchParams.set('page', (Number(page) + 1).toString()) 
                    replace(`${pathname}?${updatedSearchParams}`);
                }}
            >
                Next
            </button>

        </div>
    )
}