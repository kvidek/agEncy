import Meta from '../components/Meta';
import { attributes } from '../content/about.md';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

const about = () => {
    const { title, subtitle, intro, benefits } = attributes;

    return (
        <>
            <Meta title="About" />

            <Navigation variant={'dark'} />

            <Header variant={'light'} title={title} subtitle={subtitle} />

            <Container>
                <div className="c-intro">
                    <span className="u-b1 u-uppercase">{intro.eyebrow}</span>
                    <p className="u-b0">{intro.intro_text}</p>
                </div>
            </Container>
            <Container>
                <div className="c-benefits">
                    <h2 className="u-a3 u-fw-400">{benefits.title}</h2>

                    <ul>
                        {benefits.benefits_list.map((benefit, k) => {
                            return (
                                <li key={k}>
                                    <h4 className="u-b1 u-uppercase">{benefit.name}</h4>
                                    <p className="u-b0">{benefit.text}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Container>

            <Footer />
        </>
    );
};

export default about;
