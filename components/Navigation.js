import Link from 'next/link';
import styles from '../styles/components/Navigation.module.scss';

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
                    <ul className={styles['c-menu']}>
                        <li className={styles['c-menu__item']}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={styles['c-menu__item']}>
                            <Link href="/work">Work</Link>
                        </li>
                        <li className={styles['c-menu__item']}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
