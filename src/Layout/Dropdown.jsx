import React from 'react'
import Cookies from 'universal-cookie';
import { MdLogout } from "react-icons/md";

import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../services/user';
import { Link } from 'react-router-dom';

import styles from './dropdown.module.css'
import toast from 'react-hot-toast';
function Dropdown() {

  const { refetch , data , isPending } = useQuery({
    queryKey:['profile'],
    queryFn:getProfile,
  })
  console.log(data.data.role)

  const cookie = new Cookies()
  const logoutHandler = () => {
    cookie.remove('accessToken')
    cookie.remove('refreshToken')
    refetch()
  if(!data) toast.success('خارج شدید')
    // navigate('/')
   }
  

  return (
    <div className={styles.dropdown}>
        <ul>
           {
            data && (
              <li onClick={logoutHandler}> 
              <Link to='/auth' >
              <MdLogout 
              size={20} color='gray'
               />
              </Link>
              <span>خروج</span>
              </li>
            )
           }
            {
              data.data.role == 'ADMIN' ? (
                <Link to='/admin'>
                <li>پنل ادمین</li>
                </Link>
              ) : (
                <Link to='/dashboard/my'>
                  <span>آگهی های من</span>
                </Link>
              )
            }
            
        </ul>
    </div>
  )
}

export default Dropdown