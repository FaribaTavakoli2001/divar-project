import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { deleteCategory, getCategory } from '../../services/admin'
import Loader from '../module/Loader'
function CategoryList() {
    const { data , isPending  } = useQuery({
        queryKey: ['get-category'] , 
        queryFn: getCategory
    })
    console.log({  isPending , data })

    // deleting category (exercise)
    const {  mutate } = useMutation({
        mutationFn: deleteCategory
    })

    const deletHandler = (id) => {
        mutate(id)
        console.log()
    }

  return (
    <div>
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