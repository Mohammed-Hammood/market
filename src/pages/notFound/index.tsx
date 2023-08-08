import React from 'react';
import styles from './styles.module.scss';


const NotFoundPage: React.FC = (): JSX.Element => {
    return (
        <main className={styles.NotFoundPage}>
            <div className={styles.Card}>
                <h1>Page not found!</h1>
            </div>
        </main>
    )
};

export default NotFoundPage;