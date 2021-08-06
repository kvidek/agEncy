import Link from 'next/link';
import styles from '../styles/components/Navigation.module.scss';
import Logo from './Logo';
import Menu from './Menu';

const Navigation = ({ variant }) => {
    return (
        <nav className={styles['o-navigation']}>
            <div className={styles['c-navigation']}>
                <div className={styles['c-navigation__left']}>
                    <Logo variant={variant} />
                </div>
                <div className="c-navigation__right">
                    <Menu variant={variant} />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
