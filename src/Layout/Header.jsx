import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './Header.module.css'
import Dropdown from './Dropdown';



function Header() {

  const [ isopen , setIsopen ] = useState(false)

  // console.log({data , isPending})

  // const navigate = useNavigate()

  const isOpenHandler = () => {
    setIsopen( prev => !prev)
  } 
  
  return (
    <header className={styles.header}>
        <div>
        <Link to='/'>
        <img src='divar.svg' className={styles.logo}/>
        </Link>
        <Link to='/location'>
        <span>
            <img src='location.svg'/>
            <p>تهران</p>
        </span>
        </Link>
        </div>
        <div>
            <span 
            className={styles.toggleButton}
            onClick={isOpenHandler}>
            <img src='profile.svg'/>
            <p>دیوار من</p>
            </span>
           {
            isopen && <Dropdown />
           }
            <Link to='/dashboard' className={styles.button}>ثبت آگهی</Link>
        </div>
    </header>
  )
}

export default Header