import styles from './styles.module.scss';

type Props = {
    setLimit: (value: number) => void;
    limit: number;
}

const LimitSelector = ({ setLimit, limit }: Props) => {

    return (
        <div className={styles.selectWrapper}>
            <select
                className={styles.selectNumber}
                value={limit}
                onChange={e => setLimit(parseInt((e.target as HTMLSelectElement).value))}
            >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
        </div>
    );
};

export default LimitSelector;