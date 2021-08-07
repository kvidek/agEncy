import Meta from '../components/Meta';
import 'isomorphic-fetch';
import Link from 'next/link';
import Image from 'next/image';
import { attributes } from '../content/work.md';
import importWorkPosts from '../lib/importWorkPosts';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

const work = ({ postList }) => {
    const { title, subtitle } = attributes;

    return (
        <div>
            <Meta title="Work" />

            <Navigation />

            <Header variant={'dark'} title={title} subtitle={subtitle} />

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

export default work;

export const getStaticProps = async () => {
    const postList = await importWorkPosts();

    if (!postList) {
        return {
            notFound: true,
        };
    }

    return {
        props: { postList },
    };
};
