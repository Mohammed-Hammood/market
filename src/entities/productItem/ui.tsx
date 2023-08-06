import { Product } from '@/entities/CardsGallary/model/types/types';
import styles from './styles.module.scss';

interface ProductProps {
	product: Product;
	setProduct: (product: Product) => void;

}
const ProductItem = ({ product, setProduct }: ProductProps) => {

	return (
		<div className={styles.Product} onClick={() => setProduct(product)}>
			<img src={product.thumbnail} className={styles.thumbGood} />
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>{`$ ${product.price}`}</div>
		</div>
	);
};

export default ProductItem;