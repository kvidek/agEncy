import Meta from '../components/Meta';
import { attributes } from '../content/contact.md';
import Navigation from '../components/Navigation';

const contact = () => {
    let { title, subtitle } = attributes;

    return (
        <div>
            <Meta title="Contact" />

            <Navigation />

            <h1 className="u-a2">{title}</h1>
            <p className="u-b0">{subtitle}</p>
        </div>
    );
};

export default contact;
