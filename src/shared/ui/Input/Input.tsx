import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import ICON from '@/shared/ui/Icons';
import { Endpoints } from '@/shared/utils';

type Props = {
    filters: ProductFilters;
    setFilters: (value: ProductFilters) => void;
    setUrl: (value: string | null) => void;
}

const SearchInput = ({ setUrl, filters, setFilters }: Props) => {

    const isValid = (value: string): boolean => (/^[a-zA-Z0-9 ]*$/).test(value);

    const changeHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
        
        if (isValid(value)) setFilters({...filters, query:value});

    };

    const SubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        
        e.preventDefault();

        if (filters.query.trim().length > 0 && isValid(filters.query)) {

            setUrl(Endpoints.getProducts(filters));

        }
    }
    return (
        <form onSubmit={SubmitHandler} className={styles.Form}>
            <div className={(styles.Wrapper)}>
                <input
                    title='Filter products by typing (Only lantin numbers, spaces, numbers are allowed)'
                    type={"search"}
                    value={filters.query}
                    onChange={changeHandler}
                    className={clsx(styles.Input)}
                    placeholder={"Search"}
                />
                <button className={styles.SearchButton} type={'submit'} name='Search'>
                    <ICON name="magnifying-glass-solid" color='#868686' />
                </button>
            </div>
        </form>
    );
};

export default SearchInput
