import React from 'react'
import styles from './Button.module.css';

type ButtonType = {
    icon?: React.ReactNode,
    label: string,
    className?: string,
    onClick?: () => void,
    typeName ?: "button" | "submit" | "reset" | undefined
}
const Button = ({icon='', label='Default', className = '', onClick, typeName='button'}:ButtonType) => {
    return (
        <button onClick={onClick} className ={className !== '' ? `${styles.btn} ${styles[className]}` : styles.btn} type={typeName}>{icon} {label} </button>
    )
}

export default Button