import Meta from '../components/Meta';
import 'isomorphic-fetch';
import Link from 'next/link';
import Image from 'next/image';
import { attributes } from '../content/work.md';
import importWorkPosts from '../lib/importWorkPosts';

const work = ({ postList }) => {
    const { title, subtitle } = attributes;

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
                                    <li>
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
                                    </li>
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
