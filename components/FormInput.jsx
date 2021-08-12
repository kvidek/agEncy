import styles from '../styles/components/Form.module.scss';
import PropTypes from 'prop-types';

const FormInput = ({ name, type, placeholder }) => {
    return (
        <input
            id={name}
            name={name}
            type={type}
            className={styles['c-form__input']}
            placeholder={placeholder}
        />
    );
};

FormInput.defaultProps = {
    type: 'text',
    placeholder: '...',
};

FormInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
};

export default FormInput;
