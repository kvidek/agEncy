import Head from 'next/head';
import 'isomorphic-fetch';
import Link from 'next/link';
import Image from 'next/image';
import { attributes } from '../content/home.md';

const importWorkPosts = async () => {
    // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
    // second flag in require.context function is if subdirectories should be searched
    const markdownFiles = require
        .context('../content/workPosts', false, /\.md$/)
        .keys()
        .map(relativePath => relativePath.substring(2));

    return Promise.all(
        markdownFiles.map(async path => {
            const markdown = await import(`../content/workPosts/${path}`);
            return { ...markdown, slug: path.substring(0, path.length - 3) };
        })
    );
};

const Home = ({ postList }) => {
    let { title, subtitle, featured_work } = attributes;

    console.log(featured_work);

    const filteredPostList = [];

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
                                <h3>{workItem}</h3>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

home.getInitialProps = async () => {
    console.log('getInitialProps');

    const postList = await importWorkPosts();
    return { postList };
};

export default Home;
