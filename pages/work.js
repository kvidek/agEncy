import Meta from '../components/Meta';
import { attributes } from '../content/work_posts.md';

const work = () => {
    let { title, subtitle, work_posts } = attributes;

    return (
        <div>
            <Meta title="Work" />
            <h1 className={'u-a2'}>{title}</h1>
            <p className="u-b0">{subtitle}</p>
            <ul>
                {work_posts.map((workItem, k) => (
                    <li key={k}>
                        <h2>{workItem.name}</h2>
                        <p>{workItem.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default work;
