"use client";
import styles  from './search.module.css';
import { MdSearch } from 'react-icons/md';
import { useSearchParams, useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({props}:{
    props: {
        placeholder: string;
    }
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();
  const handleChange = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)
    params.set("page","1")
    if(e.target.value){
      params.set(`q`, e.target.value)
    }else{
      params.delete('q')
    }
    replace(`${pathname}?${params}`)
  }, 400)
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