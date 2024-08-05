import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getDetailesPost } from '../services/user'

function DetailesPage() {
    const { id } = useParams()
    // console.log(id)
  
    const { data , refetch } = useQuery({
        queryKey: ['get-details-post' ],
        queryFn:getDetailesPost ,
        enabled: !id
      })

      const filteredData = data?.filter(item => item.id);
      console.log(filteredData)
 

  return (
    <div>DetailesPage : {id}</div>
  )
}

export default DetailesPage