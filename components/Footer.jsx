import styles from '../styles/components/Footer.module.scss';
import Link from 'next/link';
import FooterMenu from './FooterMenu';

const Footer = () => {
    return (
        <footer className={styles['o-footer']}>
            <div className={styles['c-footer']}>
                <div className={styles['c-footer__top']}>
                    <h4 className="u-a2 u-fw-400">Interested in partnering with us?</h4>
                    <Link href="/about">
                        <a className="c-link">
                            <span className="c-link__label">Reach out to us</span>
                        </a>
                    </Link>
                </div>
                <div className={styles['c-footer__bottom']}>
                    <div className={styles['c-footer__bottom-left']}>
                        <FooterMenu />

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
