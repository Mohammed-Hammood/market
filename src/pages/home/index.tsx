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
import { Endpoints } from "@/shared/utils";
import LimitSelector from "@/shared/ui/limit/ui";
import { ThemeContext } from "@/app/providers/ThemeProvider/ThemeProvider";


const HomePage = (): JSX.Element => {
    const { theme } = useContext(ThemeContext);
    const products = useStore($products);
    const filters = useStore($filters);
    const [url, setUrl] = useState<string | null>(Endpoints.getProducts(filters));
    const [loading, setLoading] = useState<boolean>(false);

    const [activeProduct, setActiveProduct] = useState<null | Product>(null);

    const fetchData = (url: string) => fetchProducts({ url, setLoading, setUrl });

    useEffect(() => {

        if (url && !loading) fetchData(url);

    }, [filters, url, fetchData, loading]);

    return (
        <main className={styles.homePage}>
            <div className={styles.Container}>
                <div className={styles.controllPanel}>
                    <SearchInput
                        {...{
                            filters,
                            setUrl,
                            setFilters
                        }}
                    />
                    <Categories
                        {...{
                            filters,
                            setUrl,
                            setFilters
                        }}
                    />
                    <LimitSelector
                        {...{
                            filters,
                            setUrl,
                            setFilters
                        }}
                    />
                </div>
                <div className={styles.ProductsList}>
                    {loading ?
                        <Loader productsNumber={filters.limit} />
                        :
                        products.map((item) => {
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
            {activeProduct ?
                <Modal
                    isVisible={true}
                    hideModal={() => setActiveProduct(null)}
                    product={activeProduct}
                    setActiveProduct={setActiveProduct}
                    products={products}
                />
                : null}
        </main>
    );
};

export default HomePage;