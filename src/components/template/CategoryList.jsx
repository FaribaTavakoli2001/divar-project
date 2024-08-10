import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteCategory, getCategory } from '../../services/admin'
import React from 'react'
import Loader from '../module/Loader'
import styles from './CategoryList.module.css'
import { useParams } from 'react-router-dom'

function CategoryList() {
    const { categoryId } = useParams()

    const queryClient = useQueryClient()
    
    const { data , isPending  } = useQuery({
        queryKey: ['get-category'] , 
        queryFn: getCategory
    })

    // deleting category (exercise)
    const { error ,  mutate } = useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => queryClient.invalidateQueries('categories')
    })
    console.log({error})

    const deletHandler = (id) => {
        mutate(id)
    }

  return (
    <div className={styles.list}>
        {isPending ? <Loader/> : data.data.map(i => 
        <div key={i._id}>
            <img src={`${i.icon}.svg`}/>
            <h5>{i.name}</h5>
            <p>slug : {i.slug}</p>
            <button onClick={() => deletHandler(i._id)}>delete</button>
        </div>)}
    </div>
  )
}

export default CategoryList