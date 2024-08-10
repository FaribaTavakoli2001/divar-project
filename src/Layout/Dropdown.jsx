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
  console.log(data)

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
              data ? (
                <Link to='/auth' >
                <li onClick={logoutHandler}> 
            <MdLogout 
            size={25} color='gray'
             />
            <span>خروج</span>
            </li>
            </Link>
              ) : (
                <Link to='/auth'>
                <li>
                  <span>ورود</span>
                </li>
                </Link>
              )
            }
            {
              data.data?.role == 'ADMIN' && (
               <Link to='/admin'>
                 <li>پنل ادمین</li>
               </Link>
              )
            }
            {
              data.data?.role == 'USER' && (
                <Link to='/dashboard/my'>
                <li>آگهی های من</li></Link>
              )
            }
        </ul>
    </div>
  )
}

export default Dropdown