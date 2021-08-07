import Meta from '../components/Meta';
import { attributes } from '../content/about.md';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

const about = () => {
    let { title, subtitle } = attributes;

    return (
        <div>
            <Meta title="About" />

            <Navigation variant={'dark'} />

            <Header variant={'light'} title={title} subtitle={subtitle} />
        </div>
    );
};

export default about;
