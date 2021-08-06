import Link from 'next/link';
import styles from '../styles/components/Navigation.module.scss';
import Menu from './Menu';

const Navigation = () => {
    return (
        <nav className={styles['o-navigation']}>
            <div className={styles['c-navigation']}>
                <div className={styles['c-navigation__left']}>
                    <div className="c-logo">
                        <Link href="/">Home</Link>
                    </div>
                </div>
                <div className="c-navigation__right">
                    <Menu />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
