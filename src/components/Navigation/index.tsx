
import styles from './Navigation.module.css';
import { navList } from '../../data/navList';
import ShoppingCart from '../ShoppingCart';

type ChildNavigationType = {
    id: number,
    link: string,
    title: string
}
type SingleNavigationType = {
    link: string,
    title: string,
    childs?: ChildNavigationType[]
}
const SingleNavigation = ({prop}: {prop: SingleNavigationType}) => {
    const hasChild = prop.childs && prop.childs.length > 0 ? styles.has_child : '';
    return (
        <>
            <li className={hasChild} >
                <a className={styles.nav_link} href={prop.link}>{prop.title}</a>
                {
                    prop.childs && prop.childs.length > 0 ? (
                        <>
                            <div className={styles.nav_child}>
                                {
                                     prop.childs.map((child) => {
                                        return <a key={`Childs_${child.id}`} href={child.link}>{child.title}</a>
                                     })
                                }
                            </div>
                        </>
                    ): null
                }
            </li>
        </>
        
    )
}
const Navigation = () => {
  return (
    <nav className="items-center inline-flex">
        <ul className={`${styles.nav_list} flex items-center`}>
            {
                navList.map((item) => (
                    <SingleNavigation key={`SingleNavigation_${item.id}`} prop={item} />
                ))
            }
        </ul>
        <ShoppingCart />
    </nav>
  )
}

export default Navigation