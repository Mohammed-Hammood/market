import styles from "./styles.module.scss";
import { useStore } from "effector-react";
import SearchInput from '@/shared/ui/Input/Input';
import { useContext, useEffect, useState } from 'react';
import { $filters, $products, fetchProducts, setFilters } from '@/app/store/store';
import { Product } from "@/entities/CardsGallary/model/types/types";
import ProductItem from "@/entities/product/ui";
import { Modal } from "@/shared/ui/modal";
import { Loader } from "@/shared/ui/loader";
import Categories from "@/shared/ui/Categories/ui";
import LimitSelector from "@/shared/ui/limit/ui";
import { ThemeContext } from "@/app/providers/ThemeProvider";


const HomePage = (): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(false);
    const { theme } = useContext(ThemeContext);
    const products = useStore($products);
    const filters = useStore($filters);
    const { query, category, limit } = filters;
    const [activeProduct, setActiveProduct] = useState<null | Product>(null);

    const includes = (value: string): boolean => value.toLowerCase().includes(query.toLowerCase());

    const filteredProducts = products
        .filter(item =>
            query.trim().length === 0 ||
            includes(item.brand) ||
            includes(item.description) ||
            includes(item.title)
        )
        .filter(item => category === 'all' || item.category === category)
        .filter((_, index: number) => index < limit)


    useEffect(() => {
        if (products.length === 0) fetchProducts({ setLoading, filters })
    }, [filters, products]);

    return (
        <main className={styles.homePage}>
            <div className={styles.Container}>
                <div className={styles.controllPanel}>
                    <SearchInput
                        {...{
                            query,
                            setQuery: (query: string) => setFilters({ ...filters, query })
                        }}
                    />
                    <Categories
                        {...{
                            category,
                            setCategory: (category: Category) => setFilters({ ...filters, category }),
                        }}
                    />
                    <LimitSelector
                        {...{
                            limit,
                            setLimit: (limit: number) => setFilters({ ...filters, limit })
                        }}
                    />
                </div>
                <div className={styles.ProductsList}>
                    {loading ?
                        <Loader productsNumber={filters.limit} />
                        :
                        filteredProducts.map((item) => {
                            return (
                                <ProductItem
                                    theme={theme}
                                    product={item}
                                    setProduct={setActiveProduct}
                                    key={item.id}
                                />
                            )
                        })}
                </div>
            </div>
            <Modal
                {...{
                    isVisible: activeProduct !== null,
                    hideModal: () => setActiveProduct(null),
                    product: activeProduct,
                    setActiveProduct,
                    products,
                }}
            />
        </main>
    );
};

export default HomePage;