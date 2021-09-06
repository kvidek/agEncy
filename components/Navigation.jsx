import styles from '../styles/components/Navigation.module.scss';
import Logo from './Logo';
import Menu from './Menu';
import MobileNavigation from './MobileNavigation';

const Navigation = ({ variant }) => {
    return (
        <>
            <nav className={styles['o-navigation']}>
                <div className={styles['c-navigation']}>
                    <div className={styles['c-navigation__left']}>
                        <Logo />
                    </div>
                    <div className="c-navigation__right">
                        <Menu variant={variant} />
                    </div>
                </div>
            </nav>
            <MobileNavigation />
        </>
    );
};

export default Navigation;
