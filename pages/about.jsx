import Meta from '../components/Meta';
import { attributes } from '../content/about.md';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const about = () => {
    let { title, subtitle } = attributes;

    return (
        <>
            <Meta title="About" />

            <Navigation variant={'dark'} />

            <Header variant={'light'} title={title} subtitle={subtitle} />

            <Footer />
        </>
    );
};

export default about;
