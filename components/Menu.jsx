import Link from 'next/link';
import Button from './Button';
import PropTypes from 'prop-types';
import styles from '../styles/components/Menu.module.scss';

const Menu = ({ variant }) => {
    return (
        <ul className={`${styles['c-menu']} ${styles['c-menu--' + variant]}`}>
            <li className={styles['c-menu__item']}>
                <Link href="/about">About</Link>
            </li>
            <li className={styles['c-menu__item']}>
                <Link href="/work">Work</Link>
            </li>
            <li className={styles['c-menu__item']}>
                <Link href="/contact">
                    <Button
                        variant={variant === 'dark' ? 'primary' : 'secondary'}
                        label={"Let's get started"}
                    />
                </Link>
            </li>
        </ul>
    );
};

Menu.defaultProps = {
    variant: 'light',
};

Menu.propTypes = {
    variant: PropTypes.string,
};

export default Menu;
