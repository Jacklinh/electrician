import React from 'react'
import styles from './Button.module.css';

type ButtonType = {
    icon?: React.ReactNode,
    label: string,
    className?: string,
}
const Button = ({icon='', label='Default', className = ''}:ButtonType) => {
    return (
        <button className ={className !== '' ? `${styles.btn} ${styles[className]}` : styles.btn} type="button">{icon} {label} </button>
    )
}

export default Button