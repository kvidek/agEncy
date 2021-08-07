import styles from '../styles/components/LinkButton.module.scss';

const LinkButton = ({ label }) => {
    return (
        <span className={styles['c-link']}>
            <span className={styles['c-link__label']}>{label}</span>
        </span>
    );
};

export default LinkButton;
