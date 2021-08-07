import Meta from '../components/Meta';
import { attributes } from '../content/contact.md';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

const contact = () => {
    let { title, subtitle } = attributes;

    return (
        <div>
            <Meta title="Contact" />

            <Navigation />

            <Header variant={'dark'} title={title} subtitle={subtitle} />
        </div>
    );
};

export default contact;
