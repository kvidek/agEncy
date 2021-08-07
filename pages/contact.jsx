import Meta from '../components/Meta';
import { attributes } from '../content/contact.md';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const contact = () => {
    let { title, subtitle } = attributes;

    return (
        <>
            <Meta title="Contact" />

            <Navigation />

            <Header variant={'dark'} title={title} subtitle={subtitle} />

            <Footer showCta={false} />
        </>
    );
};

export default contact;
