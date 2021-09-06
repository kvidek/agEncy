import Link from 'next/link';
import Button from './Button';
import PropTypes from 'prop-types';
import styles from '../styles/components/Menu.module.scss';

const Menu = ({ type }) => {
    return (
        <ul className={`${styles['c-menu']} ${type ? styles['c-menu--' + type] : ' '}`}>
            <li className={styles['c-menu__item']}>
                <Link href="/about">
                    <a>
                        <span>About</span>
                    </a>
                </Link>
            </li>
            <li className={styles['c-menu__item']}>
                <Link href="/work">
                    <a>
                        <span>Work</span>
                    </a>
                </Link>
            </li>
            <li className={styles['c-menu__item']}>
                <Link href="/contact">
                    <a>
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
