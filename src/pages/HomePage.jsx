import React, { useState } from 'react'
import SideBar from '../components/template/SideBar'
import Main from '../components/template/Main'
import Loader from '../components/module/Loader'
import { useQuery } from '@tanstack/react-query'
import { getAllPosts , getPostsByCategory } from '../services/user'
import { getCategory } from '../services/admin'
 
function HomePage() {

  const [selectedCategory , setSelectedCategory ] = useState(null)

  const { data: posts , isPending: postPending } = useQuery({
    queryKey:['post-list' , selectedCategory],
    queryFn: () => 
      selectedCategory ? getPostsByCategory(selectedCategory) : getAllPosts(),
  })
  const categoryHandler = (categoryId) => {
    console.log('Selected category ID:', categoryId);
    setSelectedCategory(categoryId)
  }
  console.log(posts)
  

  const { data: categories , isPending: categoryPending  } = useQuery({
    queryKey:['get-category'],
    queryFn:getCategory,
})


  return (
    <>
    { postPending || categoryPending ? (<Loader />) :
    (<div style={{
      display:'flex'
    }}>
      <SideBar categories={categories} oncategoryClick={categoryHandler} />
      <Main post={posts} />
    </div>)
    }
    </>
  )
}

export default HomePage