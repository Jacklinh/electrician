import React from 'react';
import styles from './ProductParameter.module.css';
import { parameterList } from '../../data/parameterList';
import Button from '../Button';

type ParameterProp = {
    label: string,
    content: string
}
const SingleProductParameter = ({props}:{props: ParameterProp}) => {
    return (
        <li className={styles.pro}>
            <span>{props.label}:</span>
            <span>{props.content}</span>
        </li>
    )
}
const ProductParameter = () => { 
    const [detail, setDetail] = React.useState(false);
    const handleClickDetail = () => {
        setDetail(true);
    }
    const handleClickDetailClose = () => {
        setDetail(false);
    }
  return (
    <div id={styles.product_parameter}>
        <section className={styles.tableparameter} id={styles.tableparameter}>
            <h2 className="section_subtitle">Thông số sản phẩm</h2>
            <ul className={styles.parameter}>
                {
                    parameterList.map((item)=> <SingleProductParameter key={`SingleProductParameter_${item.id}`} props={item} />)
                }
            </ul>
            <div className={styles.viewparameterfull} id={styles.showall_parameter} onClick={handleClickDetail}>
                Xem chi tiết
            </div>
            {
                detail && (
                    <div className="modal">
                        <div className="modal_dialog">
                            <div className="modal_content shadow-xl">
                                <div className="modal_body">
                                    <ul className={styles.parameter}>
                                        {
                                            parameterList.map((item)=> <SingleProductParameter key={`SingleProductParameter_${item.id}`} props={item} />)
                                        }
                                    </ul>
                                </div>
                                <div className="modal_footer">
                                    <Button label='Close' className='btn_close' onClick={handleClickDetailClose} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    </div>
  )
}

export default ProductParameter