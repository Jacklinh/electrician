import styles from './Footer.module.css';
import { tagCoud } from '../../../../data/tagCloud';
import { footerLinks } from '../../../../data/footerLinks';

const FooterLinks = ({ href, value }: { href: string, value: string }) => {
    return (
        <li><a href={href}>{value}</a></li>
    )
}
const TagCloud = ({ link, value }: { link: string, value: string }) => {
    return (
        <li><a href={link}>{value}</a></li>
    )
}
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={`${styles.footer_row} flex`}>
                    <div className={styles.footer_col}>
                        <h4 className={styles.widget_title}>About Us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et dapibus lacus.</p>
                    </div>
                    <div className={styles.footer_col}>
                        <h4 className={styles.widget_title}>Contact Info</h4>
                        <ul className={styles.contact_info}>
                            <li>
                                <span className={styles.contact_info_label}>123 Street Name City, England</span>
                            </li>
                            <li>
                                <span className={styles.contact_info_label}>Address:</span>123 Street Name,
                                City, England
                            </li>
                            <li>
                                <span className={styles.contact_info_label}>Phone:</span><a href="tel:">(123) 456-7890</a>
                            </li>
                            <li>
                                <span className={styles.contact_info_label}>Email:</span>
                                <a href="mailto:mail@example.com">mail@example.com</a>
                            </li>
                            <li>
                                <span className={styles.contact_info_label}>Working Days/Hours:</span> Mon- Sun / 9:00 AM - 8:00 PM
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer_col}>
                        <h4 className={styles.widget_title}>Customer Serviceo</h4>
                        <ul className={styles.links}>
                            {
                                footerLinks.map((item, index) => (
                                    <FooterLinks key={`footerLinks_${index}`} href={item.href} value={item.value} />
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.footer_col}>
                        <h4 className={styles.widget_title}>Poppular Tags</h4>
                        <ul className={`${styles.tagcloud} flex gap-4 flex-wrap`}>
                            {
                                tagCoud.map((item, index) => (
                                    <TagCloud key={`tagCoud_${index}`} link={item.link} value={item.value} />
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.footer_bottom}>
                    <div className={styles.copyright}>
                        © Aptech eCommerce. 2022. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer