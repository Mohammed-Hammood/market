import styles from "./styles.module.scss";

type Props = {
    productsNumber: number;
}

export function Loader({ productsNumber }: Props): JSX.Element {
    const items: number[] = Array.from({ length: productsNumber }, (v: unknown, k: number) => k);

    return (<>
        {items.map((item: number) => {
            return (
                <span key={item} className={styles.Loader}></span>
            )
        })
        }
    </>)
}