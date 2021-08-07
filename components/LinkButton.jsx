import styles from '../styles/components/LinkButton.module.scss';

const LinkButton = ({ label }) => {
    return (
        <a className={styles['c-link']}>
            <span className={styles['c-link__label']}>{label}</span>
        </a>
    );
};

export default LinkButton;
