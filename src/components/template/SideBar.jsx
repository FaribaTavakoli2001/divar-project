import React from 'react'

import styles from './SideBar.module.css'

function SideBar({categories , oncategoryClick}) {

  // console.log({categories})

   
    
  return (
    <div className={styles.sidebar}>
        <h4> دسته ها</h4>
        <ul>
            {categories?.data.map (category => (
                <li key={category._id}
                onClick={() => {
                  console.log('Category clicked:', category._id); // لاگ برای بررسی کلیک
                  oncategoryClick(category._id)
                }}
                className={styles.categoryItem}>
                    <img src={`${category.icon}.svg`} />
                    <p>{category.name}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SideBar