import Head from 'next/head';
import 'isomorphic-fetch';
import Link from 'next/link';
import Image from 'next/image';
import { attributes } from '../content/home.md';
import importWorkPosts from '../lib/importWorkPosts';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = ({ postList }) => {
    // console.log(attributes);
    // console.log(postList);

    const { title, subtitle, featured_work } = attributes;

    const featuredPosts = postList.filter(post => featured_work.includes(post.attributes.slug));

    return (
        <>
            <Head title={'agEncy'}>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>

            <Navigation />

            <Header variant={'dark'} title={title} subtitle={subtitle} />

            <div>
                {featuredPosts && (
                    <ul>
                        {featuredPosts.map((post, k) => {
                            const { title, subtitle, image } = post.attributes;

                            return (
                                <Link key={k} href={`work/${post.slug}`}>
                                    <li key={k}>
                                        <a>
                                            <h3 className={'u-a2'}>{title}</h3>
                                            <p className={'u-b0'}>{subtitle}</p>
                                            <Image
                                                alt={title}
                                                src={image}
                                                layout="responsive"
                                                width={320}
                                                height={240}
                                            />
                                        </a>
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                )}
            </div>

            <Footer />
        </>
    );
};

export default Home;

export const getStaticProps = async () => {
    const postList = await importWorkPosts();

    if (!postList) {
        return {
            notFound: true,
        };
    }

    return {
        props: { postList },
    };
};
