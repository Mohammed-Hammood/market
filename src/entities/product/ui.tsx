import { Product } from '@/entities/CardsGallary/model/types/types';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { Theme } from '@/app/providers/ThemeProvider/ThemeProvider';

type ProductProps = {
	product: Product;
	theme: Theme;
	setProduct: (product: Product) => void;
}

const ProductItem = ({ product, setProduct, theme }: ProductProps) => {

	return (
		<div className={styles.Product} onClick={() => setProduct(product)}>
			<img
				src={product.thumbnail}
				alt={product.title}
				className={clsx(styles.Thumbnail, { [styles.DarkThemeBorder]: Theme.DARK === theme })}
			/>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>{`$ ${product.price}`}</div>
		</div>
	);
};

export default ProductItem;