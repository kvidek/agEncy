import Container from './Container';
import Image from 'next/image';
import styles from '../styles/components/Intro.module.scss';

const Intro = ({ intro }) => {
    const { eyebrow, intro_text, title, image } = intro;

    return (
        <>
            <Container>
                <div className={styles['c-intro']}>
                    <span className="u-b1 u-uppercase u-fw-700">{eyebrow}</span>
                    <p className="u-a1">{intro_text}</p>
                </div>
            </Container>
            {image && (
                <Image alt={title} src={image} layout="responsive" width={640} height={340} />
            )}
        </>
    );
};

export default Intro;
