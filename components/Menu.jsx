import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from './Button';
import PropTypes from 'prop-types';
import styles from '../styles/components/Menu.module.scss';

const Menu = ({ type }) => {
    const router = useRouter();

    return (
        <ul className={`${styles['c-menu']} ${type ? styles['c-menu--' + type] : ' '}`}>
            <li className={styles['c-menu__item']}>
                <Link href="/about">
                    <a className={router.pathname === '/about' ? styles['is-active'] : ''}>
                        <span>About</span>
                    </a>
                </Link>
            </li>
            <li className={styles['c-menu__item']}>
                <Link href="/work">
                    <a className={router.pathname === '/work' ? styles['is-active'] : ''}>
                        <span>Work</span>
                    </a>
                </Link>
            </li>
            <li className={styles['c-menu__item']}>
                <Link href="/contact">
                    <a className={router.pathname === '/contact' ? styles['is-active'] : ''}>
                        <Button variant={'secondary'} label={"Let's get started"} />
                    </a>
                </Link>
            </li>
        </ul>
    );
};

Menu.defaultProps = {
    type: null,
    variant: 'light',
};

Menu.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
};

export default Menu;
