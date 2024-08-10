import React from 'react'
import { sp } from '../utils/replaceNumber'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getDetailesPost } from '../services/user'
import Loader from '../components/module/Loader'
import styles from './Detailes.module.css'
function DetailesPage() {
  const BaseUrl = import.meta.env.VITE_APP_BASE_URL;
  const { id  } = useParams()

    // console.log(id)
    const { data  , isPending } = useQuery({
        queryKey: ['get-details-post',id],
        queryFn:() => getDetailesPost(id) ,
        // enabled: !id
      })
    console.log(data)
    

      if(isPending) <Loader />
      const post = data?.data.post;
      
  return (
    <>
    {
      data && (
        <>
      <div className={styles.container}>
        <div className={styles.info}>
         <div className={styles.title}> <h5>{post.options?.title}</h5></div>
          <p className={styles.date}>{new Date(post.createdAt).toLocaleDateString('fa-IR')}</p>
          <span className={styles.city}>{post.options?.city}</span>
          <p className={styles.amount}>{sp(post.amount)} تومان</p>
        </div>
        <img className={styles.image} src={`${BaseUrl}${post.images[0]}`}  />
      </div>
      </>
      )
    }
      
    </>
  )
}

export default DetailesPage