import Link from 'next/link';
import FooterMenu from './FooterMenu';
import SocialNetworks from './SocialNetworks';
import LinkButton from './LinkButton';
import { attributes } from '../settings/settings.md';
import styles from '../styles/components/Footer.module.scss';

const Footer = () => {
    const { site_credits, social_networks } = attributes;

    return (
        <footer className={styles['o-footer']}>
            <div className={styles['c-footer']}>
                <div className={styles['c-footer__top']}>
                    <h4 className="u-a3 u-fw-400">Interested in partnering with us?</h4>
                    <Link href="/about">
                        <LinkButton label={'Reach out to us'} />
                    </Link>
                </div>
                <div className={styles['c-footer__bottom']}>
                    <div className={styles['c-footer__bottom-left']}>
                        <FooterMenu />
                        <SocialNetworks networks={social_networks} />

                        <div className={`${styles['c-footer__credits']} u-b1`}>
                            <p>{site_credits}</p>
                            <Link href="/privacy-policy">
                                <a>
                                    <span>Privacy policy</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
