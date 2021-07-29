import Head from 'next/head';
import { attributes } from '../content/home.md';

const Home = () => {
    let { title, cats } = attributes;

    return (
        <>
            <Head title={'agEncy'}>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <article>
                <h1 className={'u-a2'}>{title}</h1>
                <ul>
                    {cats.map((cat, k) => (
                        <li key={k}>
                            <h2>{cat.name}</h2>
                            <p>{cat.description}</p>
                        </li>
                    ))}
                </ul>
            </article>
        </>
    );
};

export default Home;
