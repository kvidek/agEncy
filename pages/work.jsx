import Meta from '../components/Meta';
import 'isomorphic-fetch';
import Link from 'next/link';
import { attributes } from '../content/work.md';
import importWorkPosts from '../lib/importWorkPosts';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import WorkItem from '../components/WorkItem';
import WorkList from '../components/WorkList';

const work = ({ postList }) => {
    const { title, subtitle } = attributes;

    return (
        <>
            <Meta title="Work" />

            <Navigation />

            <Header variant={'dark'} title={title} subtitle={subtitle} />

            <Container>
                <WorkList>
                    {postList &&
                        postList.map((post, k) => {
                            const { title, subtitle, image } = post.attributes;

                            const evenOdd = k => {
                                return k % 2 ? 'left' : 'right';
                            };

                            return (
                                <Link key={k} href={`work/${post.slug}`}>
                                    <a>
                                        <WorkItem
                                            title={title}
                                            subtitle={subtitle}
                                            image={image}
                                            orientation={evenOdd(k)}
                                        />
                                    </a>
                                </Link>
                            );
                        })}
                </WorkList>
            </Container>

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
