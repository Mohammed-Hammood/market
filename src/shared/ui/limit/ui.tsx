import { Endpoints } from '@/shared/utils';
import styles from './styles.module.scss';


type Props = {
    filters:ProductFilters;
    setFilters: (value: ProductFilters) => void;
    setUrl: (value: string | null) => void;
}

const LimitSelector = ({ setUrl, filters, setFilters}: Props) => {
    
    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {

        const limit = parseInt(e.target.value);
        
        setUrl(Endpoints.getProducts({ ...filters, limit }))

        setFilters({...filters, limit});
        
    };

    return (
        <div className={(styles.selectWrapper)}>
            <select
                className={styles.selectNumber}
                value={filters.limit}
                onChange={changeHandler}
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