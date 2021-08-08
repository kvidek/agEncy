import Meta from '../components/Meta';
import 'isomorphic-fetch';
import Link from 'next/link';
import Image from 'next/image';
import { attributes } from '../content/work.md';
import importWorkPosts from '../lib/importWorkPosts';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const work = ({ postList }) => {
    const { title, subtitle } = attributes;

    return (
        <>
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
                                            <h3 className={'u-a2'}>{title}</h3>
                                            <p className={'u-b0'}>{subtitle}</p>
                                            <Image
                                                alt={title}
                                                src={image}
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

            <Footer />
        </>
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
