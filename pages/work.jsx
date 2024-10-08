import Meta from '../components/Meta';
import 'isomorphic-fetch';
import Link from 'next/link';
import { attributes } from '../content/work.md';
import importWorkPosts from '../lib/importWorkPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import WorkItem from '../components/WorkItem';
import WorkList from '../components/WorkList';
import evenOdd from '../helpers/evenOdd';

const work = ({ postList }) => {
    const { title, subtitle } = attributes;

    return (
        <>
            <Meta title="Work" />

            <Header variant={'dark'} title={title} subtitle={subtitle} />

            <Container>
                <WorkList>
                    <h2 className="u-a3 u-fw-400">Our work</h2>

                    {postList &&
                        postList.map((post, k) => {
                            const { title, subtitle, image } = post.attributes;

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
