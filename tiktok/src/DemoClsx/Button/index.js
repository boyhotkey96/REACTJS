import React from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'

function Button({ type, value, disable }) {
    console.log(`${styles[`btn-${type}`]}`)

    const btnType = clsx(styles.btn, {
        [styles[`btn-${type}`]]: type,
        [styles.disable]: disable,
        'd-flex': false,
    })

    return (
        <button className={btnType}>{value}</button>
    )
}

export default Button