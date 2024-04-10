"use client";
import styles  from './search.module.css';
import { MdSearch } from 'react-icons/md';
import { useSearchParams, useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ChangeEvent } from 'react';

export default function Search({props}:{
    props: {
        placeholder: string;
    }
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)
    if(e.target.value){
      params.set(`q`, e.target.value)
    }else{
      params.delete('q')
    }
    replace(`${pathname}?${params}`)
  }
  return (
    <div className={styles.container}>
        <div className={styles.search}>
      <MdSearch />
      <input type="text" placeholder={props.placeholder} className={styles.input} onChange={
        (e:ChangeEvent<HTMLInputElement>) => handleChange(e)
      }/>
        </div>
    </div>
  );
}