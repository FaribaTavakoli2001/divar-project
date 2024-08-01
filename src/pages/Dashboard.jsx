import React from 'react'
import AddPost from '../components/template/AddPost'
import PostList from '../components/template/PostList'

function Dashboard() {
  return (
    <div>
      <AddPost />
      <PostList />
    </div>
  )
}

export default Dashboard