import Meta from '../../components/Meta';
import Image from 'next/image';
import 'isomorphic-fetch';

const workPost = ({ post }) => {
    console.log(post);

    const { title, subtitle, image } = post.attributes;

    return (
        <div>
            <Meta title={title} />
            <h1 className="u-a2">{title}</h1>
            <p className="u-b0">{subtitle}</p>

            <Image alt={title} src={`/${image}`} layout="responsive" width={640} height={420} />
        </div>
    );
};

workPost.getInitialProps = async ({ query }) => {
    const { slug } = query;

    const post = await import(`../../content/workPosts/${slug}.md`).catch(error => null);

    console.log(post);
    return { post };
};

export default workPost;

// WTF this aint workin'?
// export const getStaticProps = async context => {
//     const { slug } = context;
//     const post = await import(`../../content/workPosts/${slug}.md`).catch(error =>
//         console.error(error)
//     );
//
//     if (!post) {
//         return {
//             notFound: true,
//         };
//     }
//
//     return {
//         props: { post },
//     };
// };
//
// export const getStaticPaths = async () => {
//     const postList = await importWorkPosts();
//     const paths = postList.map(post => ({ params: { slug: post.slug } }));
//
//     return {
//         paths,
//         fallback: true,
//     };
// };
