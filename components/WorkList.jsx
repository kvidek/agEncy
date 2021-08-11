import styles from '../styles/components/WorkList.module.scss';

const WorkList = ({ children }) => {
    return <div className={styles['c-work-list']}>{children}</div>;
};

export default WorkList;
