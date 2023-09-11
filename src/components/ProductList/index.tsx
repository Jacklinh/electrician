
import styles from '../../pages/Product/Product.module.css';
import {productsList} from '../../data/productsList';
type SingleProductProps = {
    thubnail: string,
    title: string,
    price: number,
    promoPrice: number
}
const SingleProductItem = ({product}: {product: SingleProductProps}) => {
    const discount = product.promoPrice > 0 ? Math.round(100 - ((product.promoPrice*100)/product.price)) : 0;
    return (
        <> 
            <div className={styles.product_item}>
                {discount > 0 ? <span className={styles.discount}>-{discount}%</span> : null}
                <img src={product.thubnail} alt=""/>
                <h3>{product.title}</h3>
                <div className={styles.price}>
                    {product.promoPrice > 0 ? (<><strong>{product.promoPrice} đ</strong><del>{product.price} đ</del></>) : <strong>{product.price} đ</strong>}
                </div>
            </div>
        </>
    )
}
const ProductList = () => {
  return (
    <div className={`${styles.product_wrapper} flex`}>
        {
            productsList.map((item)=><SingleProductItem key={`productsList_${item.id}`} product={item}/>)
        }
    </div>
  )
}

export default ProductList