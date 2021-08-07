import Link from 'next/link';
import styles from '../styles/components/FooterMenu.module.scss';

const FooterMenu = () => {
    return (
        <ul className={styles['c-footer-menu']}>
            <li className={styles['c-footer-menu__item']}>
                <Link href="/about">
                    <a>
                        <span>About</span>
                    </a>
                </Link>
            </li>
            <li className={styles['c-footer-menu__item']}>
                <Link href="/work">
                    <a>
                        <span>Work</span>
                    </a>
                </Link>
            </li>
            <li className={styles['c-footer-menu__item']}>
                <Link href="/contact">
                    <a>
                        <span>Contact</span>
                    </a>
                </Link>
            </li>
        </ul>
    );
};

export default FooterMenu;
