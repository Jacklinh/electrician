
import {FaShoppingCart} from "react-icons/fa";
import styles from './ShoppingCart.module.css';
const ShoppingCart = () => {
  return (
    <div className={styles.header_cart}>
        <i><FaShoppingCart /></i>
        <span>0</span>
    </div>
  )
}

export default ShoppingCart