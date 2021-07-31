import Head from 'next/head';
import 'isomorphic-fetch';
import Link from 'next/link';
import Image from 'next/image';
import { attributes } from '../content/home.md';
import importWorkPosts from '../lib/importWorkPosts';

const Home = ({ postList }) => {
    let { title, subtitle, featured_work } = attributes;

    const featuredPosts = postList.filter(post => featured_work.includes(post.attributes.slug));

    console.log(featuredPosts);

    return (
        <>
            <Head title={'agEncy'}>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <div>
                <h1 className={'u-a2'}>{title}</h1>
                <p className="u-b0">{subtitle}</p>
                {featuredPosts && (
                    <ul>
                        {featuredPosts.map((workItem, k) => (
                            <Link key={k} href={`work/${workItem.slug}`}>
                                <li key={k}>
                                    <a>
                                        <h3>{workItem.attributes.title}</h3>
                                        <p>{workItem.attributes.subtitle}</p>
                                        <Image
                                            alt={workItem.attributes.title}
                                            src={`/${workItem.attributes.image}`}
                                            layout="responsive"
                                            width={320}
                                            height={240}
                                        />
                                    </a>
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

Home.getInitialProps = async () => {
    console.log('getInitialProps');

    const postList = await importWorkPosts();
    return { postList };
};

export default Home;
