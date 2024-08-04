// import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
// import { getDetailesPost } from '../services/user'
function DetailesPage() {
    const { id } = useParams()
    // console.log(id)
  
    // const { data , isPending , refetch } = useQuery({
    //     queryKey: ['get-details-post' ],
    //     queryFn:getDetailesPost ,
    // })
    // console.log({data , isPending})
 

  return (
    <div>DetailesPage : {id}</div>
  )
}

export default DetailesPage