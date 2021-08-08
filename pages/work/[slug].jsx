import Meta from '../../components/Meta';
import Image from 'next/image';
import 'isomorphic-fetch';
import importWorkPosts from '../../lib/importWorkPosts';
import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Container from '../../components/Container';

const workPost = post => {
    // console.log('post: ', post);
    const { title, subtitle, image, next_work } = post.attributes;

    let nextPost;

    if (next_work) {
        nextPost = post.postList.filter(post => next_work.includes(post.attributes.slug));
    }

    return (
        <>
            <Meta title={title} />

            <Navigation variant={'dark'} />

            <Header variant={'light'} title={title} subtitle={subtitle} />

            <Image alt={title} src={image} layout="responsive" width={640} height={420} />

            <Container>
                <div className="u-rt-editor" dangerouslySetInnerHTML={{ __html: post.html }} />
            </Container>

            {nextPost && (
                <div>
                    {nextPost.map((post, k) => {
                        const { title, subtitle, image } = post.attributes;

                        return (
                            <Link key={k} href={post.slug}>
                                <a>
                                    <h3 className="u-a3">Next project</h3>
                                    <p className="u-b0">{subtitle}</p>
                                    <Image
                                        alt={title}
                                        src={image}
                                        layout="responsive"
                                        width={320}
                                        height={240}
                                    />
                                </a>
                            </Link>
                        );
                    })}
                </div>
            )}

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

    const postList = await importWorkPosts();

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            ...post,
            postList,
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
