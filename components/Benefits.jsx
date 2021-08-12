import Container from './Container';
import styles from '../styles/components/Benefits.module.scss';

const Benefits = ({ benefits }) => {
    const { title, benefits_list } = benefits;

    return (
        <Container>
            <div className={styles['c-benefits']}>
                <h2 className="u-a3 u-fw-400">{title}</h2>
                <ul className={styles['c-benefits__list']}>
                    {benefits_list.map((benefit, k) => {
                        return (
                            <li className={styles['c-benefits__list-item']} key={k}>
                                <h4 className="u-b1 u-uppercase u-fw-700">{benefit.name}</h4>
                                <p className="u-b0">{benefit.text}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Container>
    );
};
export default Benefits;
