import styles from '../styles/components/Menu.module.scss';
import Link from 'next/link';
import Button from './Button';

const Menu = () => {
    return (
        <ul className={styles['c-menu']}>
            <li className={styles['c-menu__item']}>
                <Link href="/about">About</Link>
            </li>
            <li className={styles['c-menu__item']}>
                <Link href="/work">Work</Link>
            </li>
            <li className={styles['c-menu__item']}>
                <Link href="/contact">
                    <Button variant={'primary'} label={"Let's get started"} />
                </Link>
            </li>
        </ul>
    );
};

export default Menu;
