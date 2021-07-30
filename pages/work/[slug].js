import Meta from '../../components/Meta';
import 'isomorphic-fetch';

const workPost = ({ post }) => {
    console.log(typeof post);
    console.log(post);

    return (
        <div>
            <Meta title={post.attributes.title} />
            <h1 className={'u-a2'}>{post.attributes.title}</h1>
            <p className="u-b0">{post.attributes.subtitle}</p>
            <img
                style={{ width: '640px' }}
                src={post.attributes.image}
                alt={post.attributes.title}
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
