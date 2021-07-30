import Head from 'next/head';
import { attributes } from '../content/home.md';

const Home = () => {
    let { title, subtitle, featured_work } = attributes;

    return (
        <>
            <Head title={'agEncy'}>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <div>
                <h1 className={'u-a2'}>{title}</h1>
                <p className="u-b0">{subtitle}</p>
                {featured_work && (
                    <ul>
                        {featured_work.map((workItem, k) => (
                            <li key={k}>
                                <h2>{workItem}</h2>
                                <p>{workItem}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Home;
