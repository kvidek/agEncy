import styles from '../styles/components/Form.module.scss';
import PropTypes from 'prop-types';

const FormTextarea = ({ placeholder, required }) => {
    return (
        <textarea
            name="custom-message"
            id="custom-message"
            cols="30"
            rows="8"
            className={styles['c-form__textarea']}
            placeholder={placeholder}
            required={required}
        ></textarea>
    );
};

FormTextarea.defaultProps = {
    placeholder: '...',
};

FormTextarea.propTypes = {
    placeholder: PropTypes.string,
};

export default FormTextarea;
