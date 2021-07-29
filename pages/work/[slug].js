import Meta from '../../components/Meta';
import 'isomorphic-fetch';

const workPost = ({ workpost }) => {
    console.log(workpost);

    return (
        <div>
            <Meta title={workpost.attributes.title} />
            <h1 className={'u-a2'}>{workpost.attributes.title}</h1>
            <p className="u-b0">{workpost.attributes.subtitle}</p>
            <img
                style={{ width: '640px' }}
                src={workpost.attributes.image}
                alt={workpost.attributes.title}
            />
        </div>
    );
};

workPost.getInitialProps = async ({ query }) => {
    const { slug } = query;
    const workpost = await import(`../../content/workPosts/${slug}.md`).catch(error => null);

    return { workpost };
};

export default workPost;
