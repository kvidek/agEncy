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

    return { post };
};

export default workPost;
