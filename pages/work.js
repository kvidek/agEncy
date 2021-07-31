import Meta from '../components/Meta';
import 'isomorphic-fetch';
import Link from 'next/link';
import Image from 'next/image';
import { attributes } from '../content/work.md';
import importWorkPosts from '../lib/importWorkPosts';

const work = ({ postList }) => {
    const { title, subtitle } = attributes;

    return (
        <div>
            <Meta title="Work" />
            <h1 className="u-a2">{title}</h1>
            <p className="u-b0">{subtitle}</p>

            <div>
                {postList && (
                    <ul>
                        {postList.map((post, k) => {
                            const { title, subtitle, image } = post.attributes;

                            return (
                                <Link key={k} href={`work/${post.slug}`}>
                                    <li>
                                        <a>
                                            <h3>{title}</h3>
                                            <p>{subtitle}</p>
                                            <Image
                                                alt={title}
                                                src={`/${image}`}
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
