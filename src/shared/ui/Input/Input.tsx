import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import ICON from '@/shared/ui/Icons';

type Props = {
    query: string;
    setQuery: (value: string) => void;
}

const SearchInput = ({ query, setQuery  }: Props) => {

    const isValid = (value: string): boolean => (/^[a-zA-Z0-9 ]*$/).test(value);

    const changeHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {

        if (isValid(value)) setQuery(value) 

    };
 
    return (
            <div className={(styles.Wrapper)}>
                <input
                    title='Filter products by typing (Only lantin numbers, spaces, numbers are allowed)'
                    type={"search"}
                    value={query}
                    onChange={changeHandler}
                    className={clsx(styles.Input)}
                    placeholder={"Search"}
                    id='searchInput'
                />
                <button
                    className={styles.SearchButton}
                    type={'button'}
                    title='Search'
                    onClick={()=> document.getElementById("searchInput")?.focus()}
                    aria-label='Search button'
                >
                    <ICON name="magnifying-glass-solid" color='#868686' />
                </button>
            </div>
    );
};

export default SearchInput
