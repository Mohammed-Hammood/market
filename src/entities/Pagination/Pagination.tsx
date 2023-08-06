import styles from './Pagination.module.scss';
import clsx from 'clsx';

type Props = {
	totalPages: number;
	currentPage: number;
	setCurrentPage: (value: number) => void;

}

const Pagination = ({ totalPages, setCurrentPage, currentPage }: Props) => {

	const pages: number[] = Array.from({ length: totalPages }, (_: unknown, index: number) => index + 1);

	return (
		<div className={styles.pagination}>
			{pages.map((page) => {
				return (
					<button
						key={page}
						className={clsx(styles.pageBtn, { [styles.currentPage]: page === currentPage })}
						onClick={() => setCurrentPage(page)}
					>
						{page}
					</button>)
			})}
		</div>
	);
};

export default (Pagination);
