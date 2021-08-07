import Meta from '../components/Meta';
import { attributes } from '../content/about.md';
import Navigation from '../components/Navigation';

const about = () => {
    let { title, subtitle } = attributes;

    return (
        <div>
            <Meta title="About" />

            <Navigation />

            <h1 className="u-a2">{title}</h1>
            <p className="u-b0">{subtitle}</p>
        </div>
    );
};

export default about;
