import styles from '../styles/components/Footer.module.scss';
import Link from 'next/link';
import FooterMenu from './FooterMenu';
import SocialNetworks from './SocialNetworks';
import LinkButton from './LinkButton';

const Footer = () => {
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
                        <SocialNetworks />

                        <div className={styles['c-footer__credits']}>
                            <p className="u-b0">© inSuper. All rights reserved 2020</p>
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
