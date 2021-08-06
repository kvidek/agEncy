import Meta from '../components/Meta';
import { attributes } from '../content/about.md';

const about = () => {
    let { title, subtitle } = attributes;

    return (
        <div>
            <Meta title="About" />
            <h1 className="u-a2">{title}</h1>
            <p className="u-b0">{subtitle}</p>
        </div>
    );
};

export default about;
