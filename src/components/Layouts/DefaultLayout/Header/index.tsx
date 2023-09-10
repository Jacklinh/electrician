import Navigation from '../../../Navigation';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
        <div className="container mx-auto px-4">
            <div className="justify-between flex">
              <div className="justify-start ">
                  <a href="#" className={styles.logo}>Electrician</a>
              </div>
              <Navigation />
            </div>
        </div>
    </header>
  )
}

export default Header