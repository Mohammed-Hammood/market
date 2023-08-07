import { Endpoints } from '@/shared/utils';
import styles from './styles.module.scss';

type Props = {
    filters: ProductFilters;
    setFilters: (value: ProductFilters) => void;
    setUrl: (value: string | null) => void;
}

const Categories = ({ filters,  setUrl, setFilters }: Props): JSX.Element => {

    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {

        const category = (e.target as HTMLSelectElement).value as Category;

        const url = Endpoints.getProducts({...filters, category})

        setUrl(url);

        setFilters({...filters, category});

    }
    
    return (
        <div className={styles.selectWrapper}>
            <select
                className={styles.Select}
                value={filters.category}
                onChange={changeHandler}
            >
                <option className={styles.option} value={"all"}>All</option>
                <option className={styles.option} value={"automotive"}>Automotive</option>
                <option className={styles.option} value={"groceries"}>Groceries</option>
                <option className={styles.option} value={"home-decoration"}>Home decoration</option>
                <option className={styles.option} value={"fragrances"}>Fragrances</option>
                <option className={styles.option} value={"furniture"}>Furniture</option>
                <option className={styles.option} value={"laptops"}>Laptops</option>
                <option className={styles.option} value={"lighting"}>Lighting</option>
                <option className={styles.option} value={"mens-shirts"}>Mens shirts</option>
                <option className={styles.option} value={"mens-shoes"}>Mens shoes</option>
                <option className={styles.option} value={"mens-watches"}>Mens watches</option>
                <option className={styles.option} value={"motorcycle"}>Motorcycle</option>
                <option className={styles.option} value={"skincare"}>Skincare</option>
                <option className={styles.option} value={"smartphones"}>Smartphones</option>
                <option className={styles.option} value={"sunglasses"}>Sunglasses</option>
                <option className={styles.option} value={"tops"}>Tops</option>
                <option className={styles.option} value={"womens-bags"}>Womens bags</option>
                <option className={styles.option} value={"womens-dresses"}>Womens dresses</option>
                <option className={styles.option} value={"womens-jewellery"}>Womens jewellery</option>
                <option className={styles.option} value={"womens-shoes"}>Womens shoes</option>
                <option className={styles.option} value={"womens-watches"}>Womens watches</option>

            </select>
        </div >
    );
};

export default Categories;