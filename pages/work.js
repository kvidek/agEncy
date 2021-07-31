import Meta from '../components/Meta';
import 'isomorphic-fetch';
import Link from 'next/link';
import Image from 'next/image';
import { attributes } from '../content/work.md';

const importWorkPosts = async () => {
    // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
    // second flag in require.context function is if subdirectories should be searched
    const markdownFiles = require
        .context('../content/workPosts', false, /\.md$/)
        .keys()
        .map(relativePath => relativePath.substring(2));

    return Promise.all(
        markdownFiles.map(async path => {
            const markdown = await import(`../content/workPosts/${path}`);
            return { ...markdown, slug: path.substring(0, path.length - 3) };
        })
    );
};

const work = ({ postList }) => {
    let { title, subtitle } = attributes;

    console.log(typeof postList);
    console.log(postList);

    return (
        <div>
            <Meta title="Work" />
            <h1 className={'u-a2'}>{title}</h1>
            <p className="u-b0">{subtitle}</p>

            <div>
                {postList && (
                    <ul>
                        {postList.map((post, k) => {
                            return (
                                <Link key={k} href={`work/${post.slug}`}>
                                    <a>
                                        <h3>{post.attributes.title}</h3>
                                        <Image
                                            alt={post.attributes.title}
                                            src={`/${post.attributes.image}`}
                                            layout="responsive"
                                            width={320}
                                            height={240}
                                        />
                                    </a>
                                </Link>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

work.getInitialProps = async () => {
    console.log('getInitialProps');

    const postList = await importWorkPosts();
    return { postList };
};

export default work;
