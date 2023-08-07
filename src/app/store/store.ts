import { Product } from '@/entities/CardsGallary/model/types/types';
import { createStore, createEffect } from 'effector';

export const $filters = createStore<ProductFilters>({
	limit: 10,
	query: "",
	category: 'all' as Category,
	skip: 0,
})

export const setFilters = createEffect((filters: ProductFilters) => filters);

export const $products = createStore<Product[]>([]);


type Props = {
	url: string;
	setLoading: (value: boolean) => void
	setUrl: (value: string | null) => void;
}

export const fetchProducts = createEffect(async ({ url, setLoading, setUrl }: Props) => {
	try {

		setLoading(true);
		const req = await fetch(url);
		const res = await req.json();
		return res;
	}
	catch (err: any) {
		console.log(err)
	}
	finally {
		setUrl(null);
		setLoading(false);
	}
});


$products
	.on(fetchProducts.doneData, (_, data) => {
		return data.data
	})

$filters.on(setFilters.done, (_, payload) => payload.result);
