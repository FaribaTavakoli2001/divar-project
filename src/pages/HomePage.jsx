import React from 'react'
import SideBar from '../components/template/SideBar'
import Main from '../components/template/Main'
import Loader from '../components/module/Loader'
import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../services/user'
import { getCategory } from '../services/admin'

function HomePage() {
  const { data: posts , isPending: postPending } = useQuery({
    queryKey:['post-list'],
    queryFn: getAllPosts,
  })
  const { data: categories , isPending: categoryPending  } = useQuery({
    queryKey:['get-category'],
    queryFn:getCategory,
})
// console.log({posts})

  return (
    <>
    { postPending || categoryPending ? (<Loader />) :
    (<div style={{
      display:'flex'
    }}>
      <SideBar categories={categories} />
      <Main post={posts} />
    </div>)
    }
    </>
  )
}

export default HomePage