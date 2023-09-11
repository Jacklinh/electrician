import React from 'react'
import styles from './AttrColor.module.css';
const SingleAttrColor = ({label}:{label: string}) => {
    const [attr, setAttr] = React.useState(false);
    const currentClass = attr ? `${styles.attr_item} ${styles.current}` : styles.attr_item;
    const handleClickAttr = () => {
        setAttr(!attr);
    }
    return (
        <span onClick={handleClickAttr} className={currentClass}>{label}</span>
    )
}
const AttrColor = () => {
  return (
    <div className={styles.product_attrs}>
        <div className={`${styles.attr_block} flex`}>
            <span>Màu Sắc: </span>
            <SingleAttrColor label='Đen' />
            <SingleAttrColor label='Hồng' />
            <SingleAttrColor label='Xanh' />
        </div>
    </div>
  )
}

export default AttrColor