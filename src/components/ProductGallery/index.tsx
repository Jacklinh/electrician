import React from 'react';
import styles from './ProductGallery.module.css';
import { productGallery } from '../../data/productGallery';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const ProductGallery = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const maxCurrent = productGallery.length;
    const handleClickPrev = () => {
        setCurrentIndex(prev => {
            if(currentIndex === 0){
                return 0;
            }else {
                return prev - 1;
            }
        });
    }
    const handleClickNext = () => {
        setCurrentIndex(next => {
            if(currentIndex === maxCurrent - 1) {
                return maxCurrent - 1;
            }else {
                return next + 1;
            }
        });
    }
    return (
        <div id={styles.gallery}>
            <div className={styles.gallery_inner}>
                <div className={styles.gallery_item}>
                    <p><img src={productGallery[currentIndex].image} width={400} height={400} alt="" /></p>
                </div>
            </div>
            <button onClick={handleClickPrev} className={`${styles.btn_control} ${styles.prev}`}><HiChevronLeft /></button>
            <button onClick={handleClickNext} className={`${styles.btn_control} ${styles.next}`}><HiChevronRight /></button>
        </div>
    )
}

export default ProductGallery