import styles from '../styles/components/WorkItem.module.scss';
import Image from 'next/image';
import LinkButton from './LinkButton';

const WorkItem = ({ eyebrow, title, subtitle, image, orientation }) => {
    console.log(orientation);

    return (
        <div className={`${styles['c-work-item']} ${styles['c-work-item--' + orientation]}`}>
            <div className={styles['c-work-item__content']}>
                {eyebrow && <span className="u-b2 u-uppercase">{eyebrow}</span>}
                <h3 className="u-a1">{title}</h3>
                <p className="u-b0">{subtitle}</p>
                <LinkButton label={'View project'} variant={'small'} />
            </div>
            <div className={styles['c-work-item__image']}>
                <Image alt={title} src={image} layout="responsive" width={320} height={240} />
            </div>
        </div>
    );
};
export default WorkItem;
