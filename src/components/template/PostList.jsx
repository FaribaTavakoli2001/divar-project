import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getPosts } from '../../services/user'
import { sp } from '../../utils/replaceNumber'
import React from 'react'
import Loader from '../module/Loader'

import styles from './PostList.module.css'
import { getCookie } from '../../utils/cookie'
import axios from 'axios'

function PostList() {
    const BaseUrl = import.meta.env.VITE_APP_BASE_URL;
    const queryClient = useQueryClient()

    const {data , isPending } = useQuery({
        queryKey:['get-post-list'],
        queryFn: getPosts
    })
    console.log({data , isPending})

    const removePost = (id) => {
        const token = getCookie('accessToken');

        axios.delete(`${import.meta.env.VITE_APP_BASE_URL}/delete/${id}`, {
            headers: {
                Authorization: `bearer ${token}`
            }
        }).then(res => console.log(res))
        .catch(error => console.log(error))
    }

    const { mutate , error } = useMutation({
        mutationFn: removePost,
        onSuccess: () => queryClient.invalidateQueries('posts')
    })
    
    // console.log({mutate , error})

    const removePostHandler = (id) => {
        mutate(id)
    }
  return (
    <div className={styles.list}>
        {isPending ? <Loader /> : 
        <>
        <h3> آگهی های شما</h3>
        {
            data.data.posts.map((post) => (
                <div
                className={styles.post}
                key={post._id}>
                    <img src={`${BaseUrl}${post.images[0]}`}/>
                     <div>
                        <p>{post.options.title}</p>
                        <span>{post.options.content}</span>
                     </div>
                     <div className={styles.price}>
                        <p>{ new Date(post.createdAt).toLocaleDateString('fa-IR')}</p>
                        <span>{sp(post.amount)}تومان</span>
                        <button onClick={removePostHandler}>remove</button>
                     </div>
                </div>
            ))
        }
        </>}
    </div>
  )
}

export default PostList