import styles from '../styles/components/SocialNetworks.module.scss';

const SocialNetworks = ({ networks }) => {
    console.log(networks);

    return (
        <>
            {networks && (
                <ul className={styles['c-social-networks']}>
                    {networks.map((network, n) => {
                        const { name, link } = network;

                        return (
                            <li key={n} className={styles['c-social-networks__item']}>
                                <a href={link} target="_blank">
                                    {name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};

export default SocialNetworks;
