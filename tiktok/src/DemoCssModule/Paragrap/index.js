import React from 'react'
import styles from './Paragrap.module.css'

function Paragrap() {
    return (
        <div className={[styles.paragrap, styles.green].join(' ')}>
            This is Paragrap
        </div>
    )
}

export default Paragrap