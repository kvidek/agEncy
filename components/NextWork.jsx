import styles from '../styles/components/NextWork.module.scss';
import Image from 'next/image';

const NextWork = ({ title, subtitle, image }) => {
    return (
        <div className={styles['c-next-work']}>
            <div className={styles['c-next-work__content']}>
                <h3 className="u-a3">Next project</h3>
                <p className="u-b0">{subtitle}</p>
            </div>
            <div className={styles['c-next-work__image']}>
                <Image alt={title} src={image} layout="responsive" width={320} height={240} />
            </div>
        </div>
    );
};
export default NextWork;
