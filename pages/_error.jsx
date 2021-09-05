import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import Container from '../components/Container';
import styles from '../styles/components/Error.module.scss';
import Button from '../components/Button';
import Link from 'next/link';

const error = ({ statusCode }) => {
    return (
        <div className={styles['o-error-message']}>
            <Meta title={`Error ${statusCode}`} />
            <Navigation />

            <Container>
                {statusCode ? (
                    <div className={styles['c-error-message']}>
                        <h3 className="u-a3">{statusCode}</h3>
                        <p className="u-b0">error occurred on server</p>
                    </div>
                ) : (
                    <div className={styles['c-error-message']}>
                        <p className="u-b0">An error occurred on client</p>
                    </div>
                )}
                <Link href="/">
                    <a>
                        <Button type={'button'} variant={'primary'} label={'Go to homepage'} />
                    </a>
                </Link>
            </Container>
        </div>
    );
};

error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default error;
