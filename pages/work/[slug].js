import Meta from '../../components/Meta';
import Image from 'next/image';
import 'isomorphic-fetch';
import importWorkPosts from '../../lib/importWorkPosts';

const workPost = ({ post }) => {
    console.log('post: ', post);
    const { title, subtitle, image } = post.attributes;

    return (
        <div>
            <Meta title={title} />
            <h1 className="u-a2">{title}</h1>
            <p className="u-b0">{subtitle}</p>
            {/**/}
            <Image alt={title} src={`/${image}`} layout="responsive" width={640} height={420} />
        </div>
    );
};

workPost.getInitialProps = async ({ query }) => {
    const { slug } = query;

    const post = await import(`../../content/workPosts/${slug}.md`).catch(error => null);

    return { post };
};

export default workPost;

// WTF this aint workin' right?
// export const getStaticProps = async context => {
//     console.log('context: ', context);
//     const { params } = context;
//
//     console.log('params: ', params);
//
//     const post = await import(`../../content/workPosts/${params.slug}.md`).catch(error =>
//         console.error(error)
//     );
//
//     console.log('getStaticProps post: ', post);
//
//     if (!post) {
//         return {
//             notFound: true,
//         };
//     }
//
//     return {
//         props: {
//             ...post,
//         },
//     };
// };
//
// export const getStaticPaths = async () => {
//     const postList = await importWorkPosts();
//     const paths = postList.map(post => ({ params: { slug: `/work/${post.slug}` } }));
//     // const paths = postList.map(({ slug }) => `/work/${slug}`);
//
//     console.log('paths: ', paths);
//
//     return {
//         paths,
//         fallback: true,
//     };
// };
