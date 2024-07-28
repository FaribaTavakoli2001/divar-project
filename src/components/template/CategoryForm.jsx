import React, { useState } from 'react'
import { addCategory } from '../../services/admin'
import { useMutation } from '@tanstack/react-query'

import styles from './Categoryform.module.css'

function CategoryForm() {
    const {data , mutate , isPending , error } = useMutation({
        mutationFn:addCategory
    })
    // console.log({data ,mutate , isPending , error})
    
    
    const [form , setForm ] = useState({
        name: '',
        slug:'',
        icon:'',
    })
    
    const submitHandler = (event) => {
        event.preventDefault();
        if(!form.name || !form.slug || !form.icon) return;
        mutate(form)
    }
    
    const changeHandler = (event) => {
        setForm({...form , [event.target.name]: event.target.value })
    }
    
  return (
    <form 
    className={styles.form}
    onChange={changeHandler} 
    onSubmit={submitHandler}>
        <h3>دسته بندی جدید</h3>
        {!!error && <p>ثبت آگهی با مشکل مواجه شده است</p>}
        {
            data?.status === 201 && <p> آگهی با موفقیت اضافه شد.</p>
        }
        <label htmlFor="name">اسم دسته بندی</label>
        <input type="text" name='name' id='name' />
          <label htmlFor="slug">اسلاگ</label>
        <input 
        type='text'
        name='slug'
        id='slug'
        />
          <label htmlFor="icon">آیکون</label>
        <input 
        type='text'
        name='icon'
        id='icon'
        />
        <button type='submit'
        disabled={isPending}
        >ایجاد</button>
        
    </form>
  )
}

export default CategoryForm