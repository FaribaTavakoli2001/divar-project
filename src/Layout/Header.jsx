import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdLogout } from "react-icons/md";
import Cookies from 'universal-cookie';
import styles from './Header.module.css'

function Header() {

  const navigate = useNavigate()
  const cookie = new Cookies()
  
 
  const logoutHandler = () => {
    cookie.remove('accessToken')
    cookie.remove('refreshToken')
    navigate('/')
   }
  return (
    <header className={styles.header}>
        <div>
        <Link to='/'>
        <img src='divar.svg' className={styles.logo}/>
        </Link>
        <span>
            <img src='location.svg'/>
            <p>تهران</p>
        </span>
        </div>
        <div>
            <Link to='/auth'>
            <span>
            <img src='profile.svg'/>
            <p>دیوار من</p>
            </span>
            </Link>
            <Link to='/dashboard' className={styles.button}>ثبت آگهی</Link>
            <Link to='/' >
            <MdLogout 
            size={30} color='gray'
            onClick={logoutHandler} />
            </Link>
        </div>
    </header>
  )
}

export default Header