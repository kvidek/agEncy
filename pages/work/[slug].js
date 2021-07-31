import Meta from '../../components/Meta';
import Image from 'next/image';
import 'isomorphic-fetch';

const workPost = ({ post }) => {
    return (
        <div>
            <Meta title={post.attributes.title} />
            <h1 className={'u-a2'}>{post.attributes.title}</h1>
            <p className="u-b0">{post.attributes.subtitle}</p>

            <Image
                alt={post.attributes.title}
                src={`/${post.attributes.image}`}
                layout="responsive"
                width={640}
                height={420}
            />
        </div>
    );
};

workPost.getInitialProps = async ({ query }) => {
    const { slug } = query;
    const post = await import(`../../content/workPosts/${slug}.md`).catch(error => null);

    return { post };
};

export default workPost;
