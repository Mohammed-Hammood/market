import styles from "./styles.module.scss";
import { useStore } from "effector-react";
import SearchInput from '@/shared/ui/Input/Input';
import { useContext, useEffect, useState } from 'react';
import { $products, fetchProducts, $limit, $query, setQuery, setLimit } from '@/app/store/store';
import { Product } from "@/entities/CardsGallary/model/types/types";
import ProductItem from "@/entities/productItem/ui";
import { Modal } from "@/shared/ui/modal";
import { Loader } from "@/shared/ui/loader";
import Categories from "@/shared/ui/Categories/ui";
import { Endpoints } from "@/shared/utils";
import LimitSelector from "@/shared/ui/SelectNumber/SelectNumber";
import { ThemeContext } from "@/app/providers/ThemeProvider/ThemeProvider";


const HomePage = (): JSX.Element => {
    const { theme } = useContext(ThemeContext);
    const [category, setCategory] = useState<string>('all');
    const products = useStore($products);
    const query = useStore($query);
    const limit = useStore($limit);
    const [url, setUrl] = useState<string | null>(Endpoints.getProducts({ limit, skip: 0, category, query }));
    const [loading, setLoading] = useState<boolean>(false);

    const [activeProduct, setActiveProduct] = useState<null | Product>(null);

    const fetchData = (url: string) => fetchProducts({ url, setLoading, setUrl });

    useEffect(() => {

        if (url && !loading) fetchData(url)

    }, [limit, category, url, fetchData, loading]);

    return (
        <main className={styles.homePage}>
            <div className={styles.Container}>
                <div className={styles.controllPanel}>
                    <SearchInput
                        value={query}
                        setValue={setQuery}
                        theme={theme}
                    />
                    <Categories
                        query={query}
                        limit={limit}
                        theme={theme}
                        setUrl={setUrl}
                        category={category}
                        setCategory={setCategory}
                    />
                    <LimitSelector
                        query={query}
                        category={category}
                        limit={limit}
                        setLimit={setLimit}
                        setUrl={setUrl}
                    />
                </div>
                <div className={styles.ProductsList}>
                    {loading ?
                        <Loader productsNumber={limit} />
                        :
                        products.map((item) => {
                            return (
                                <ProductItem
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