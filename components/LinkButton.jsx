import styles from '../styles/components/LinkButton.module.scss';

const LinkButton = ({ label, variant }) => {
    return (
        <span className={`${styles['c-link']} ${styles['c-link--' + variant]}`}>
            <span className={styles['c-link__label']}>{label}</span>
        </span>
    );
};

export default LinkButton;
