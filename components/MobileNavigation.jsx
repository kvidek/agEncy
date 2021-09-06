import styles from '../styles/components/MobileNavigation.module.scss';
import Menu from './Menu';

const MobileNavigation = () => {
    return (
        <nav className={styles['o-mobile-navigation']}>
            <div className={styles['c-mobile-navigation']}>
                <Menu type={'mobile'} />
            </div>
        </nav>
    );
};

export default MobileNavigation;
