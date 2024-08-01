import React from 'react'
import { sp } from '../../utils/replaceNumber'

import styles from './Main.module.css'

function Main({post}) {
    const BaseUrl = import.meta.env.VITE_APP_BASE_URL;

    console.log({post})
  return (
    <div className={styles.container}>
        {post.data.posts.map(post => (
            <div className={styles.card} key={post._id}>
                <div className={styles.info}>
                    <p>{post.options.title}</p>
                    <div>
                        <p>{sp(post.amount)} تومان</p>
                        <span>{post.options.city}</span>
                    </div>
                </div>
                <img src={`${BaseUrl}${post.images[0]}`}/>
            </div>
        ))}
    </div>
  )
}

export default Main