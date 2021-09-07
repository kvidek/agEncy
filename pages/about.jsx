import Meta from '../components/Meta';
import { attributes } from '../content/about.md';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Benefits from '../components/Benefits';

const about = () => {
    const { title, subtitle, intro, benefits } = attributes;

    return (
        <>
            <Meta title="About" />

            <Header variant={'light'} title={title} subtitle={subtitle} />

            {intro && <Intro intro={intro} />}

            <Benefits benefits={benefits} />

            <Footer />
        </>
    );
};

export default about;
