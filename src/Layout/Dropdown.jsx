import React from 'react'
import Cookies from 'universal-cookie';
import { MdLogout } from "react-icons/md";

import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../services/user';
import { Link } from 'react-router-dom';

import styles from './dropdown.module.css'
function Dropdown() {

  const { refetch , data , isPending } = useQuery({
    queryKey:['profile'],
    queryFn:getProfile,
  })

  const cookie = new Cookies()
  const logoutHandler = () => {
    cookie.remove('accessToken')
    cookie.remove('refreshToken')
    refetch()
    // navigate('/')
   }
   if(!data) {
    console.log('logout')
   } else{
    console.log('user still login')
   }

  return (
    <div className={styles.dropdown}>
        <ul>
            <Link to='/auth' >
            <li> 
            <MdLogout 
            size={25} color='gray'
            onClick={logoutHandler} />
            <span>خروج</span>
            </li>
            </Link>
        </ul>
    </div>
  )
}

export default Dropdown