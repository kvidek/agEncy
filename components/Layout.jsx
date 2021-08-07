import Meta from './Meta';
import styles from '../styles/components/Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <main className={styles['o-page']}>
                <div className={styles['o-page__inner']}>{children}</div>
            </main>
        </>
    );
};

export default Layout;
