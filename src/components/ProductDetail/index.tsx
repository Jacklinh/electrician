import React from 'react';
import styles from './ProductDetail.module.css';
import { policyProduct } from '../../data/policyProduct';
import Button from '../Button';
import {FaShoppingCart} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";
import AttrColor from '../AttrColor';

const SingleProductName = ({name}:{name: string}) => {
    return (
        <h1 className={styles.product_name}>
            {name}
        </h1>
    )
}
const SingleProductPrice = ({price,promo_price=0}:{price:number,promo_price?:number}) => {
    return (
        <div className={styles.product_price}>
            {
                promo_price > 0 ? <><strong>{promo_price}đ</strong><del>{price}đ</del></> : <><strong>{price}đ</strong></>
            }
            
        </div>
    )
}

type SinglePolicyProps = {
    image: string,
    label: string,
    content: string
}
const SinglePolicy = ({policyProp}:{policyProp:SinglePolicyProps}) => {
    return (
        <li className='flex gap-4'>
            <img width="20" height="20" src={policyProp.image} alt="guarantee" />
            <strong>{policyProp.label}:</strong>
            {policyProp.content}
        </li>
    )
}
const ProductDetail = () => {
    // state Heart
    const [heart,setHeart] = React.useState(false);
    const classHeart = heart ? `btn_dark_active` : 'btn_dark';
    const onHandleHeart = () => {
        setHeart(!heart);
    }
    // state Cart
    const [cart,setCart] = React.useState(false);
    const onHandleCart = () => {
        setCart(!cart);
    }
    // state close
    const onHandleCartClose = () => {
        setCart(false)
    }
  return (
    <div id={styles.product_details}>
        <SingleProductName name='Samsung Galaxy S21 FE 5G (8GB/128GB)' />
        <SingleProductPrice price={16990000} promo_price={12490000} />
        <AttrColor />
        <ul className={styles.policy}>
            {
                policyProduct.map((item,index) => <SinglePolicy key={`policyProduct_${index}`} policyProp={item} />)
            }
        </ul>
        <div className={`${styles.product_actions} flex`}>
            <Button label='Thêm Giỏ Hàng' icon={<FaShoppingCart />} onClick={onHandleCart} />
            {
                cart && (
                    <div className="modal">
                        <div className="modal_dialog">
                            <div className="modal_content shadow-xl">
                                <div className="modal_body">
                                    <p>Đã thêm vào giỏ hàng thành công !</p>
                                </div>
                                <div className="modal_footer">
                                    <Button label='Close' className='btn_close' onClick={onHandleCartClose} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <Button label='Yêu thích' icon={<FaHeart />} onClick={onHandleHeart} className={classHeart}/>
        </div>
        <div className={styles.call_info}>
            Hoặc gọi ngay để đặt mua: 1900 1080 (8:00-20:00)
        </div>
        
    </div>
  )
}

export default ProductDetail