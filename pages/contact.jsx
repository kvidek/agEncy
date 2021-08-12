import Meta from '../components/Meta';
import { attributes } from '../content/contact.md';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Form from '../components/Form';
import styles from '../styles/components/Form.module.scss';

const contact = () => {
    let { title, subtitle } = attributes;

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (window.location.search.includes('success=true')) {
            setSuccess(true);
        }
    }, []);

    return (
        <>
            <Meta title="Contact" />

            <Navigation />

            <Header variant={'dark'} title={title} subtitle={subtitle} />

            <Container>
                {success ? (
                    <div className={styles['c-form-thank-you']}>
                        <p className="u-b0" style={{ color: 'green' }}>
                            Thank you! Your message was sent and we will reply asap...
                        </p>
                    </div>
                ) : (
                    <Form />
                )}
            </Container>

            <Footer showCta={false} />
        </>
    );
};

export default contact;
