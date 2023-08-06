import { Endpoints } from '@/shared/utils';
import styles from './SelectNumber.module.scss';
import clsx from 'clsx';
import { Theme, ThemeContext } from '@/app/providers/ThemeProvider/ThemeProvider';
import { useContext } from 'react';

type Props = {
    limit: number;
    query: string;
    category: string;
    setLimit: (value: number) => void;
    setUrl: (value: string | null) => void;
}

const LimitSelector = ({ limit, setLimit, setUrl, category, query }: Props) => {
    const { theme } = useContext(ThemeContext);
    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let newLimit = parseInt(e.target.value);

        setLimit(newLimit);

        setUrl(Endpoints.getProducts({ limit: newLimit, skip: 0, category, query }))
    };

    return (
        <div className={(styles.selectWrapper)}>
            <select
                className={clsx(styles.selectNumber, { "DarkThemeBorder": theme === Theme.DARK } )}
                value={limit}
                onChange={changeHandler}
            >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
    );
};

export default LimitSelector;