import Head from 'next/head';
import 'isomorphic-fetch';
import Link from 'next/link';
import { attributes } from '../content/home.md';
import importWorkPosts from '../lib/importWorkPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import WorkList from '../components/WorkList';
import WorkItem from '../components/WorkItem';
import Intro from '../components/Intro';
import evenOdd from '../helpers/evenOdd';

const Home = ({ postList }) => {
    // console.log(attributes);
    // console.log(postList);

    const { title, subtitle, intro, featured_work } = attributes;

    const featuredPosts = postList.filter(post => featured_work.includes(post.attributes.slug));

    return (
        <>
            <Head title={'agEncy'}>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>

            <Header variant={'dark'} title={title} subtitle={subtitle} />

            {intro && <Intro intro={intro} />}

            <Container>
                <WorkList>
                    <h2 className="u-a3 u-fw-400">Featured work</h2>
                    {featuredPosts &&
                        featuredPosts.map((post, k) => {
                            const { title, subtitle, image } = post.attributes;

                            return (
                                <Link key={k} href={`work/${post.slug}`}>
                                    <a>
                                        <WorkItem
                                            title={title}
                                            subtitle={subtitle}
                                            image={image}
                                            orientation={evenOdd(k)}
                                        />
                                    </a>
                                </Link>
                            );
                        })}
                </WorkList>
            </Container>

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
