import React from 'react';
import styles from './Input.module.scss';
import { Theme } from '@/app/providers/ThemeProvider/ThemeProvider';
import clsx from 'clsx';
import ICON from '@/shared/ui/Icons';

type Props = {
    value?: string;
    setValue: (value: string) => void;
    theme: Theme;
}

const SearchInput = ({ theme, value, setValue }: Props) => {

    const isValid = (value: string): boolean =>  (/^[a-zA-Z0-9 ]*$/).test(value);
    

    const changeHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
        if (isValid(value)) setValue(value);
    };


    return (
        <div className={clsx(styles.Wrapper, { "DarkThemeBorder": theme === Theme.DARK })}>
            <input
                title='Filter products by typing (Only lantin numbers, spaces, numbers are allowed)'
                type={"search"}
                value={value}
                onChange={changeHandler}
                className={clsx(styles.Input)}
                placeholder={"Search"}
            />
            <button className={styles.SearchButton}>
                <ICON name="magnifying-glass-solid" color='#868686' />
            </button>
        </div>
    );
};

export default SearchInput
