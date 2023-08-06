import React from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';
import ICON from '@/shared/ui/Icons';
import { Endpoints } from '@/shared/utils';

type Props = {
    value: string;
    setValue: (value: string) => void;
    setUrl: (value: string | null) => void;
    limit: number;
    category: string;
}

const SearchInput = ({ limit, setUrl, category,   value, setValue }: Props) => {

    const isValid = (value: string): boolean => (/^[a-zA-Z0-9 ]*$/).test(value);


    const changeHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
        if (isValid(value)) setValue(value);
    };

    const SubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (value.trim().length > 0 && isValid(value)) {

            setUrl(Endpoints.getProducts({ limit, skip: 0, category, query: value.trim() }))
        }
    }
    return (
        <form onSubmit={SubmitHandler} className={styles.Form}>
            <div className={(styles.Wrapper)}>
                <input
                    title='Filter products by typing (Only lantin numbers, spaces, numbers are allowed)'
                    type={"search"}
                    value={value}
                    onChange={changeHandler}
                    className={clsx(styles.Input)}
                    placeholder={"Search"}
                />
                <button className={styles.SearchButton} type={'submit'}>
                    <ICON name="magnifying-glass-solid" color='#868686' />
                </button>
            </div>
        </form>
    );
};

export default SearchInput
