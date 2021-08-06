import Meta from './Meta';
import Navigation from './Navigation';
import styles from '../styles/components/Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Navigation />
            <main className={styles['o-page']}>
                <div className={styles['o-page__inner']}>{children}</div>
            </main>
        </>
    );
};

export default Layout;
