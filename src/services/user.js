import api from "../configs/api";


const getProfile = () => api.get('user/whoami')
.then( res => res || false)

const getPosts = () => api.get('post/my')


const getAllPosts = () => api.get('')

const getDetailesPost = (id) => api.get(`post/${id}`)

const getPostsByCategory = (categoryId) => api.get(`option/by-category/${categoryId}`)

export { getPostsByCategory , getProfile , getDetailesPost  , getPosts  , getAllPosts  }