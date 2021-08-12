import styles from '../styles/components/Form.module.scss';
import PropTypes from 'prop-types';

const FormFieldset = ({ children }) => {
    return <div className={styles['c-form__fieldset']}>{children}</div>;
};

FormFieldset.defaultProps = {
    children: null,
};

FormFieldset.propTypes = {
    children: PropTypes.node,
};

export default FormFieldset;
