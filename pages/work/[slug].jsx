import Meta from '../../components/Meta';
import Image from 'next/image';
import 'isomorphic-fetch';
import importWorkPosts from '../../lib/importWorkPosts';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const workPost = post => {
    console.log('post: ', post);
    const { title, subtitle, image } = post.attributes;

    return (
        <>
            <Meta title={title} />

            <Navigation variant={'dark'} />

            <Header variant={'light'} title={title} subtitle={subtitle} />

            <Image alt={title} src={`/${image}`} layout="responsive" width={640} height={420} />

            <Footer />
        </>
    );
};

export default workPost;

export const getStaticProps = async context => {
    // console.log('context: ', context);
    const { params } = context;

    // console.log('params: ', params);

    const post = await import(`../../content/workPosts/${params.slug}.md`).catch(error =>
        console.error(error)
    );

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            ...post,
        },
    };
};

export const getStaticPaths = async () => {
    const postList = await importWorkPosts();
    // const paths = postList.map(post => ({ params: { slug: `/work/${post.slug}` } }));
    const paths = postList.map(({ slug }) => `/work/${slug}`);

    // console.log('paths: ', paths);

    return {
        paths,
        fallback: false,
    };
};
