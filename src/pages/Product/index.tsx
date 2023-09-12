
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import styles from './Product.module.css';
import ProductGallery from '../../components/ProductGallery';
import ProductDetail from '../../components/ProductDetail';
import ProductParameter from '../../components/ProductParameter';
import ProductList from '../../components/ProductList';
import ReviewsForm from '../../components/ReviewsForm';
import Button from '../../components/Button';
import Posts from '../../components/Posts';
import ButtonTabs from '../../components/ButtonTabs';

const Product = () => {
    return (
        <>
            <DefaultLayout>
                <div className={`${styles.product_info_wrapper} flex mb-[60px]`}>
                    <ProductGallery />
                    <ProductDetail />
                    <ProductParameter />
                </div>
                <section className={`${styles.main_wrapper} flex`}>
                    <div className={styles.col_main}>
                        <section>
                            <h2 className={styles.section_subtitle}>Phụ kiện tương thích</h2>
                            <ProductList />
                        </section>
                        <section>
                            <h2 className={styles.section_subtitle}>Bài viết đánh giá</h2>
                            <article className={styles.product_description}>
                                <h3>
                                    Đón năm mới rộn ràng cùng với series Galaxy S21 đến từ
                                    Samsung. Phiên bản tiêu chuẩn cho series lần này là Samsung
                                    Galaxy S21 5G, nổi bật với thiết kế tràn viền, cụm camera ấn
                                    tượng cho đến hiệu năng mạnh mẽ hàng đầu.
                                </h3>

                                <h3>“Bộ cánh” mới nổi bật và sang trọng</h3>

                                <p>
                                    Nổi bật với cụm camera sau được thiết kế đầy mới lạ, phần
                                    khuôn hình chữ nhật chứa bộ 3 camera ôm trọn cạnh trái của
                                    chiếc smartphone, viền khuôn cong uyển chuyển, hạn chế tối đa
                                    độ nhô ra so với mặt lưng, mang lại cái nhìn tổng thể hài hòa,
                                    độc đáo.
                                </p>
                            </article>
                        </section>
                        <section>
                            <h2 className={styles.section_subtitle}>Đánh giá Sản phẩm</h2>
                            <ReviewsForm />
                        </section>
                        <ButtonTabs type='button' />
                        <ButtonTabs type='text' />
                        <ButtonTabs type='vertical' />
                    </div>
                    <div className={styles.col_sidebar}>
                        <section className={styles.callback_support}>
                            <h2 className={styles.section_subtitle}>Gọi lại tư vấn</h2>
                            <div className={styles.call_form}>
                                <p>Bạn muốn chúng tôi gọi lại tư vấn, vui lòng điền số điện thoại vào form dưới đây</p>
                                <input type="text" name="mobile" placeholder="Số điện thoại của bạn" />
                                <Button label='Đăng ký' />
                            </div>
                        </section>
                        <section className={styles.article_list_box}>
                            <h2 className={styles.section_subtitle}>Tin tức liên quan</h2>
                            <Posts />
                        </section>
                    </div>
                </section>
                
            </DefaultLayout>
        </>
    )
}

export default Product