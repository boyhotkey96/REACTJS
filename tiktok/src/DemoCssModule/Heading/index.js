import React from 'react'
import styles from './Heading.module.css'

function Heading() {
    return (
        <div className={`${styles.heading} ${styles.uppercase}`}>
            Heading: Demo Css Module..
        </div>
    )
}

export default Heading