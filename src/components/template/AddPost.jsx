import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getCategory } from '../../services/admin'

import styles from './AddPost.module.css'
import { getCookie } from '../../utils/cookie'
import axios from 'axios'
import toast from 'react-hot-toast'
 function AddPost() {

    const [form , setForm ] = useState({
        title:'',
        content:'',
        city:'',
        amount:null,
        images:null,
    })

    const { data  } = useQuery({
        queryKey: ['get-category'] , 
        queryFn: getCategory
    })
    // console.log({data})

    const changeHandler = (event) => {
        const name = event.target.name
        if ( name !== 'images'){
            setForm({ ...form , [name] : event.target.value })
        }
        else {
            setForm({ ...form , [name] : event.target.files[0]})
        }

    }

    const addHandler = (event) => {
        event.preventDefault();
        // console.log(form)
        // add post to backend with fromdata *** important 
        const formData = new FormData();
        for (let i in form ) {
            formData.append(i , form[i])
        }
        const token = getCookie('accessToken');

        axios.post(`${import.meta.env.VITE_APP_BASE_URL}post/create`,formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `bearer ${token}`
            }

        }).then(res => toast.success(res.data.message))
        .catch(error => toast.error("This didn't work."))
    }

  return (
    <>
    <form 
    className={styles.form}
    onChange={changeHandler}>
        <h3>افزودن آگهی</h3>
        <label htmlFor='title'>عنوان</label>
        <input type="text"
        name='title'
        id='title' />
        <label htmlFor='content'>توضیحات</label>
        <textarea name="content" id="content" />
        <label htmlFor='city'>شهر</label>
        <input type="text"
        name='city'
        id='city' />
        <label htmlFor='amount'>قیمت </label>
        <input type="number"
        name='amount'
        id='amount' />
        <label htmlFor='category'>دسته بندی </label>
        <select name='category' id='category'>
            { data?.data.map( i => (
                <option key={i._id} value={i._id}>{i.name}</option>
            ))}
        </select>
        <label htmlFor='images'>عکس</label>
        <input type="file"
        name='images'
        id='images' />
        <button onClick={addHandler}>افزودن</button>
    </form>
    </>
  )
}

export default AddPost;