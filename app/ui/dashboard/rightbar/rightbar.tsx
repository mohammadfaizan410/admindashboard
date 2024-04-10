import { MdPlayCircleFilled } from 'react-icons/md';
import styles from './bar.module.css';
import Image from 'next/image';
export default function RightBar() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/vercel.svg" alt='image' width={50} height={50} />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}> ** Available now</span>
                    <h3 className={styles.title}>Do you wanna know the secrets of a dashbaord?</h3>
                    <span className={styles.subtitle}>Takes only minutes to read</span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Ut
                    </p>
                   <button className={styles.button}>
                    <MdPlayCircleFilled size={20} />
                    <div>Watch Now</div>
                   </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/vercel.svg" alt='image' width={50} height={50} />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>Available now</span>
                    <h3 className={styles.title}>Do you wanna know the secrets of a dashbaord?</h3>
                    <span className={styles.subtitle}>Takes only minutes to read</span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Ut
                    </p>
                   <button className={styles.button}>
                    <MdPlayCircleFilled size={20} />
                    Watch Now
                   </button>
                </div>
            </div>
        </div>
    )
}
