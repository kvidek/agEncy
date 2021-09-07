import { useState } from 'react';
import styles from '../styles/components/MobileNavigation.module.scss';
import Menu from './Menu';

const MobileNavigation = () => {
    const [showMobileNavigation, setShowMobileNavigation] = useState(false);

    return (
        <>
            <span
                className={`${styles['c-hamburger']} ${
                    showMobileNavigation ? styles['c-hamburger--opened'] : ''
                }`}
                aria-label="Menu"
                aria-controls="navigation"
                onClick={() => setShowMobileNavigation(!showMobileNavigation)}
            >
                <i
                    className={`${styles['c-hamburger__line']} ${styles['c-hamburger__line--top']}`}
                ></i>
                <i
                    className={`${styles['c-hamburger__line']} ${styles['c-hamburger__line--center-a']}`}
                ></i>
                <i
                    className={`${styles['c-hamburger__line']} ${styles['c-hamburger__line--center-b']}`}
                ></i>
                <i
                    className={`${styles['c-hamburger__line']} ${styles['c-hamburger__line--bottom']}`}
                ></i>
            </span>
            <div
                className={`${styles['c-mobile-navigation']} ${
                    showMobileNavigation ? styles['c-mobile-navigation--opened'] : ''
                }`}
            >
                <Menu type={'mobile'} />
            </div>
        </>
    );
};

export default MobileNavigation;
