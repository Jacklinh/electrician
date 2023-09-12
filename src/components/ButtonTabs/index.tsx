import React from 'react'
import styles from './ButtonTabs.module.css';
import { tabs } from '../../data/tabs';

const ButtonTabs = ({type}:{type?: string}) => {
    const [currentTab, setCurrentTab] = React.useState(0);
    const handleClickTab = (index: any) => {
        setCurrentTab(index)
    }
    return (
        <div className={`${styles.box_button_tabs} ${styles[`${type}`]} mb-[80px]`}>
            <h4 className='uppercase mb-[40px]'>{type} tabs </h4>
            <ul className={styles.tabs}>
                {
                    tabs[0].tabList.map((item,index) => {
                        const classActive = currentTab === index ? styles.active :  '';
                        return (
                            <li className={classActive} key={`titleTab_${item.id}`} onClick={() => handleClickTab(index)}>
                                <p className={styles.tab_title}><span>{item.tabTitle}</span></p>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className={styles.content}>
                {
                    tabs[0].tabList.map((item,index) => {
                        const classActive = currentTab === index ? styles.active :  '';
                        return (
                            <li className={classActive} key={`contentTab_${item.id}`}>
                                <div className={styles.tab_content}>
                                    <p>{item.tabContent}</p>
                                </div>
                            </li>
                        )
                    })
                }
                
                
            </ul>
        </div>
    )
}

export default ButtonTabs