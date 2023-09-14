import React from 'react'
import styles from './AttrColor.module.css';
import { attrColor } from '../../data/attrColor';

const SingleAttrColor = ({label, active=false, onClick}:{label: string, active?: boolean, onClick?: () => void}) => {
    const currentClass = active ? `${styles.attr_item} ${styles.current}` : styles.attr_item;
    return (
        <span onClick={onClick} className={currentClass}>{label}</span>
    )
}
const AttrColor = () => {
    const [attr, setAttr] = React.useState(1);
    const handleClickAttr = (id:number) => {
        setAttr(id);
    }
  return (
    <div className={styles.product_attrs}>
        <div className={`${styles.attr_block} flex`}>
            <span>Màu Sắc: </span>
            {
                attrColor.map((item) =>  <SingleAttrColor onClick={()=>handleClickAttr(item.id) } active={attr === item.id ? true : false} key={`SingleAttrColor_${item.id}`} label={item.label} />)
            }
        </div>
    </div>
  )
}

export default AttrColor