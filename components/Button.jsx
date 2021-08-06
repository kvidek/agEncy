import styles from '../styles/components/Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ isDisabled, type, variant, label, onClick }) => {
    return (
        <button
            type={type}
            disabled={isDisabled}
            className={`${styles['c-button']} ${styles['c-button--' + variant]}`}
            onClick={onClick}
        >
            <span className={styles['c-button__label']}>{label}</span>
        </button>
    );
};

Button.defaultProps = {
    type: 'button',
    variant: 'primary',
    label: 'Continue',
    isDisabled: false,
    onClick: null,
};

Button.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
