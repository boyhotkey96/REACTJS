import React from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

function Button({ type, value }) {
    console.log(styles[type])

    const btnType = clsx(styles.btn, {
        [styles[type]]: type,
        'd-flex': false
    })

    return (
        <button className={btnType}>{value}</button>
    )
}

export default Button