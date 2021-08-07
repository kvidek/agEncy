import styles from '../styles/components/Header.module.scss';
import PropTypes from 'prop-types';

const Header = ({ variant, title, subtitle }) => {
    return (
        <header
            className={`${styles['c-header']} ${
                variant === 'light' ? styles['c-header--' + variant] : ''
            }`}
        >
            <div className={styles['c-header__heading']}>
                <h1 className="u-a2">{title}</h1>
                <p className="u-b0">{subtitle}</p>
            </div>
        </header>
    );
};

Header.defaultProps = {
    variant: 'dark',
};

Header.propTypes = {
    variant: PropTypes.string,
};

export default Header;
