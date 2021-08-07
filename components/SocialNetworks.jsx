import styles from '../styles/components/SocialNetworks.module.scss';

const SocialNetworks = () => {
    return (
        <ul className={styles['c-social-networks']}>
            <li className={styles['c-social-networks__item']}>
                <a href="#" target="_blank">
                    Dribbble
                </a>
            </li>
            <li className={styles['c-social-networks__item']}>
                <a href="#" target="_blank">
                    Facebook
                </a>
            </li>
            <li className={styles['c-social-networks__item']}>
                <a href="#" target="_blank">
                    Instagram
                </a>
            </li>
            <li className={styles['c-social-networks__item']}>
                <a href="#" target="_blank">
                    LinkedIn
                </a>
            </li>
        </ul>
    );
};

export default SocialNetworks;
